'use client'
import React, { FC } from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

export interface CodeBlockProps {
  language: string
  children: string
}

export interface PreBlockProps {
  children: any
  // Add any other props you may use in PreBlock component
}

const CodeBlock: FC<CodeBlockProps> = ({ language, children }) => {
  return (
    <SyntaxHighlighter language={language} style={oneLight}>
      {children}
    </SyntaxHighlighter>
  )
}

// markdown-to-jsx uses <pre><code/></pre> for code blocks.
const PreBlock: FC<PreBlockProps> = ({ children, ...rest }) => {
  if ('type' in children && children['type'] === 'code') {
    const { className, children: codeChildren } = children['props']
    let lang = 'javascript' // default monospaced text
    if (className && className.startsWith('lang-')) {
      lang = className.replace('lang-', '')
    }
    return <CodeBlock language={lang}>{codeChildren}</CodeBlock>
  }
  return <pre {...rest}>{children}</pre>
}

export default PreBlock
