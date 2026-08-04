import type { AiFeature, AiLocale } from './prompts'

interface ArticleSection {
  heading: string
  markdown: string
  plainText: string
}

interface LocalResponseInput {
  feature: AiFeature
  article: string
  locale: AiLocale
  question?: string
}

const MAX_ASK_CONTEXT_CHARS = 18_000
const MAX_FALLBACK_SECTIONS = 8

const STOP_WORDS = new Set([
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'bu',
  'da',
  'de',
  'bir',
  'for',
  'from',
  'how',
  'i',
  'ile',
  'in',
  'is',
  'it',
  'mı',
  'mi',
  'mu',
  'mü',
  'nasıl',
  'ne',
  'nedir',
  'of',
  'on',
  'the',
  'to',
  've',
  'what',
  'why',
  'with'
])

export const markdownToPlainText = (markdown: string): string =>
  markdown
    .replace(/^---[\s\S]*?---\s*/m, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s{0,3}(#{1,6}\s+|>\s+|[-*+]\s+|\d+\.\s+)/gm, '')
    .replace(/(\*\*|__|\*|_|~~)/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const tokenize = (text: string): string[] =>
  text
    .toLocaleLowerCase()
    .match(/[\p{L}\p{N}][\p{L}\p{N}-]*/gu)
    ?.filter((token) => token.length > 2 && !STOP_WORDS.has(token)) ?? []

const parseSections = (article: string, locale: AiLocale): ArticleSection[] => {
  const sections: ArticleSection[] = []
  const introHeading = locale === 'tr' ? 'Giriş' : 'Introduction'
  let heading = introHeading
  let lines: string[] = []
  let inCodeBlock = false

  const pushSection = () => {
    const markdown = lines.join('\n').trim()
    if (!markdown) return
    sections.push({
      heading,
      markdown,
      plainText: markdownToPlainText(markdown)
    })
  }

  for (const line of article.replace(/^---[\s\S]*?---\s*/m, '').split('\n')) {
    if (line.trim().startsWith('```')) inCodeBlock = !inCodeBlock
    const match = !inCodeBlock ? /^#{2,3}\s+(.+?)\s*#*\s*$/.exec(line) : null
    if (match) {
      pushSection()
      heading = markdownToPlainText(match[1])
      lines = []
      continue
    }
    lines.push(line)
  }
  pushSection()

  return sections
}

const scoreText = (text: string, queryTokens: string[]): number => {
  const normalized = text.toLocaleLowerCase()
  return queryTokens.reduce((score, token) => {
    const matches = normalized.split(token).length - 1
    return score + Math.min(matches, 3)
  }, 0)
}

const rankSections = (
  sections: ArticleSection[],
  question: string
): ArticleSection[] => {
  const tokens = Array.from(new Set(tokenize(question)))
  if (!tokens.length) return sections

  return sections
    .map((section, index) => ({
      section,
      index,
      score:
        scoreText(section.heading, tokens) * 4 +
        scoreText(section.plainText, tokens)
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ section }) => section)
}

export const selectRelevantArticleContext = (
  article: string,
  question: string,
  locale: AiLocale
): string => {
  const sections = parseSections(article, locale)
  const ranked = rankSections(sections, question)
  const selected = (ranked.length ? ranked : sections).slice(
    0,
    MAX_FALLBACK_SECTIONS
  )

  let context = ''
  for (const section of selected) {
    const next = `## ${section.heading}\n\n${section.markdown}\n\n`
    if (context.length + next.length > MAX_ASK_CONTEXT_CHARS) break
    context += next
  }

  return context.trim() || article.slice(0, MAX_ASK_CONTEXT_CHARS)
}

const getSentences = (text: string): string[] =>
  markdownToPlainText(text)
    .split(/(?<=[.!?])\s+/u)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= 35)

const buildSummary = (article: string): string => {
  const sections = parseSections(article, 'en')
  const candidates = sections.flatMap((section) =>
    getSentences(section.markdown).slice(0, 1)
  )
  const sentences = Array.from(new Set(candidates)).slice(0, 6)
  return sentences.join(' ')
}

const buildKeyPoints = (article: string, locale: AiLocale): string => {
  const sections = parseSections(article, locale)
  return sections
    .map((section) => {
      const sentence = getSentences(section.markdown)[0]
      return sentence ? `- **${section.heading}:** ${sentence}` : ''
    })
    .filter(Boolean)
    .slice(0, MAX_FALLBACK_SECTIONS)
    .join('\n')
}

const buildExplanation = (article: string, locale: AiLocale): string => {
  const sections = parseSections(article, locale)
  const intro =
    locale === 'tr'
      ? 'Aşağıda makalenin ana fikirleri daha kısa ve doğrudan bir biçimde açıklanmıştır.'
      : 'Below are the article’s main ideas in a shorter, more direct form.'
  const content = sections
    .map((section) => {
      const sentences = getSentences(section.markdown).slice(0, 2).join(' ')
      return sentences ? `## ${section.heading}\n\n${sentences}` : ''
    })
    .filter(Boolean)
    .slice(0, MAX_FALLBACK_SECTIONS)
    .join('\n\n')

  return `${intro}\n\n${content}`.trim()
}

const buildAnswer = (
  article: string,
  question: string,
  locale: AiLocale
): string => {
  const ranked = rankSections(parseSections(article, locale), question)
  if (!ranked.length) {
    return locale === 'tr'
      ? 'Bu sorunun yanıtı makalede açıkça yer almıyor.'
      : 'The article does not clearly contain an answer to this question.'
  }

  const tokens = Array.from(new Set(tokenize(question)))
  return ranked
    .slice(0, 3)
    .map((section) => {
      const sentences = getSentences(section.markdown)
        .map((sentence, index) => ({
          sentence,
          index,
          score: scoreText(sentence, tokens)
        }))
        .sort((a, b) => b.score - a.score || a.index - b.index)
        .slice(0, 2)
        .map(({ sentence }) => sentence)
        .join(' ')
      return `## ${section.heading}\n\n${sentences || section.plainText}`
    })
    .join('\n\n')
}

export const buildLocalResponse = ({
  feature,
  article,
  locale,
  question = ''
}: LocalResponseInput): string => {
  switch (feature) {
    case 'summary':
      return buildSummary(article)
    case 'keyPoints':
      return buildKeyPoints(article, locale)
    case 'explain':
      return buildExplanation(article, locale)
    case 'ask':
      return buildAnswer(article, question, locale)
  }
}
