/**
 * Prompt construction for the Article AI Toolkit.
 *
 * All prompts are grounded in the article markdown that the server passes in.
 * The model is instructed to respond in the article's own language so
 * Turkish posts get Turkish output and English posts get English output
 * without extra client-side wiring.
 */

export type AiFeature = 'summary' | 'keyPoints' | 'ask' | 'explain'

export interface ChatTurn {
  role: 'user' | 'assistant'
  content: string
}

export interface PromptInput {
  title: string
  article: string
  question?: string
  history?: ChatTurn[]
}

const MAX_ARTICLE_CHARS = 200_000

const truncateArticle = (article: string): string => {
  if (article.length <= MAX_ARTICLE_CHARS) return article
  return `${article.slice(0, MAX_ARTICLE_CHARS)}\n\n[Article truncated for length]`
}

const BASE_RULES = `You are the reading assistant embedded inside a technical blog post.
Ground every answer strictly in the ARTICLE below. If the article does not contain the answer, say so plainly instead of inventing details.
Reply in the same language the article is written in (do not translate).
Format the response as GitHub-flavored markdown. Do not wrap the whole reply in a single code block.`

const articleBlock = (title: string, article: string): string =>
  `# ARTICLE
Title: ${title}

<article>
${truncateArticle(article)}
</article>`

const summaryInstruction = `Task: Write a 4–6 sentence summary that a busy reader can consume in about 30 seconds.
- Preserve technical accuracy and named concepts.
- Do not use bullet points or headings, just plain paragraphs.
- Do not restate the title.`

const keyPointsInstruction = `Task: Extract 5–8 key takeaways from the article.
- Output as a markdown bullet list ("- ...").
- Each bullet should be at most 20 words.
- Start each bullet with a short **bold label** followed by a colon, then the takeaway.
- Order the bullets by importance (most important first).`

const explainInstruction = `Task: Rewrite the article for a junior developer who is new to the topic.
- Use short paragraphs and simple sentences.
- Introduce every jargon term the first time it appears and briefly define it.
- Use one concrete analogy or example where it helps understanding.
- Skip advanced tangents that are not needed to grasp the main idea.
- Preserve the article's structure with markdown headings where useful.`

const askInstructionHeader = `Task: Answer the reader's question about the article below.
- Use only information from the article; if it is not there, say so and suggest what part of the article the reader could re-read.
- Be concise and structured. Use short paragraphs, optionally with a small bullet list for enumerations.
- If the answer references code, quote the relevant snippet with a fenced code block.`

const formatHistory = (history: ChatTurn[]): string => {
  if (!history.length) return ''
  const lines = history.map((turn) => {
    const label = turn.role === 'user' ? 'User' : 'Assistant'
    return `${label}: ${turn.content}`
  })
  return `\n\n# PREVIOUS TURNS\n${lines.join('\n\n')}`
}

export const buildPrompt = (
  feature: AiFeature,
  { title, article, question, history = [] }: PromptInput
): string => {
  const article_ = articleBlock(title, article)

  switch (feature) {
    case 'summary':
      return `${BASE_RULES}\n\n${article_}\n\n${summaryInstruction}`
    case 'keyPoints':
      return `${BASE_RULES}\n\n${article_}\n\n${keyPointsInstruction}`
    case 'explain':
      return `${BASE_RULES}\n\n${article_}\n\n${explainInstruction}`
    case 'ask': {
      const q = (question ?? '').trim()
      if (!q) {
        throw new Error('A question is required for the "ask" feature.')
      }
      return `${BASE_RULES}\n\n${article_}\n\n${askInstructionHeader}${formatHistory(
        history
      )}\n\n# CURRENT QUESTION\n${q}`
    }
    default: {
      const _exhaustive: never = feature
      throw new Error(`Unknown AI feature: ${_exhaustive}`)
    }
  }
}

export const isAiFeature = (value: unknown): value is AiFeature =>
  value === 'summary' ||
  value === 'keyPoints' ||
  value === 'ask' ||
  value === 'explain'
