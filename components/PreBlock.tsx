'use client'
import React, { FC, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { LuCopy, LuCheck } from 'react-icons/lu'

export interface CodeBlockProps {
  language: string
  children: string
}

export interface PreBlockProps {
  children: any
}

// Language display names
const languageNames: Record<string, string> = {
  javascript: 'JavaScript',
  js: 'JavaScript',
  typescript: 'TypeScript',
  ts: 'TypeScript',
  jsx: 'JSX',
  tsx: 'TSX',
  html: 'HTML',
  css: 'CSS',
  scss: 'SCSS',
  json: 'JSON',
  bash: 'Bash',
  shell: 'Shell',
  python: 'Python',
  py: 'Python',
  java: 'Java',
  go: 'Go',
  rust: 'Rust',
  sql: 'SQL',
  graphql: 'GraphQL',
  markdown: 'Markdown',
  md: 'Markdown',
  yaml: 'YAML',
  yml: 'YAML',
  xml: 'XML',
  plaintext: 'Text',
}

const CodeBlock: FC<CodeBlockProps> = ({ language, children }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const displayLanguage = languageNames[language.toLowerCase()] || language.toUpperCase()

  return (
    <div className="relative group my-6">
      {/* Header bar with language and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-bg-surface border border-b-0 border-border-subtle rounded-t-md">
        <span className="text-xs font-mono text-text-muted">
          {displayLanguage}
        </span>
        <button
          onClick={handleCopy}
          className="
            flex items-center gap-1.5 px-2 py-1 rounded
            text-xs font-medium
            text-text-muted hover:text-text-primary
            bg-transparent hover:bg-bg-hover
            transition-all duration-fast
            focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-surface
          "
          aria-label={copied ? 'Copied!' : 'Copy code'}
        >
          {copied ? (
            <>
              <LuCheck size={14} className="text-success" />
              <span className="text-success">Copied!</span>
            </>
          ) : (
            <>
              <LuCopy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code block - using CSS variables for inline styles where Tailwind can't be used */}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          background: 'var(--bg-elevated)',
          borderRadius: '0 0 var(--radius-md) var(--radius-md)',
          padding: 'var(--space-4) var(--space-6)',
          margin: 0,
          border: '1px solid var(--border-subtle)',
          borderTop: 'none',
          fontSize: 'var(--text-sm)',
        }}
        codeTagProps={{
          style: {
            fontFamily: "'JetBrains Mono', monospace",
          }
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

// markdown-to-jsx uses <pre><code/></pre> for code blocks.
const PreBlock: FC<PreBlockProps> = ({ children, ...rest }) => {
  if ('type' in children && children['type'] === 'code') {
    const { className, children: codeChildren } = children['props']
    let lang = 'javascript' // default
    if (className && className.startsWith('lang-')) {
      lang = className.replace('lang-', '')
    }
    return <CodeBlock language={lang}>{codeChildren}</CodeBlock>
  }
  return <pre {...rest}>{children}</pre>
}

export default PreBlock
