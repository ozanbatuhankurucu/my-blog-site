'use client'

import { FC, ReactNode, useState } from 'react'
import cx from 'classnames'
import {
  LuBaby,
  LuHelpCircle,
  LuListChecks,
  LuSparkles,
} from 'react-icons/lu'
import { Drawer } from '../Drawer'
import SummaryTab from './tabs/SummaryTab'
import KeyPointsTab from './tabs/KeyPointsTab'
import AskTab from './tabs/AskTab'
import ExplainTab from './tabs/ExplainTab'
import type { AiFeature, AiToolkitProps, AskMessage } from './types'
import { getArticleMessages } from '../../lib/article-localization'

interface TabDef {
  id: AiFeature
  label: string
  icon: ReactNode
}

const AiToolkit: FC<AiToolkitProps> = ({
  title,
  article,
  locale,
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<AiFeature>('summary')
  const [summaryText, setSummaryText] = useState('')
  const [keyPointsText, setKeyPointsText] = useState('')
  const [explainText, setExplainText] = useState('')
  const [askMessages, setAskMessages] = useState<AskMessage[]>([])
  const messages = getArticleMessages(locale).ai
  const tabs: TabDef[] = [
    {
      id: 'summary',
      label: messages.tabs.summary,
      icon: <LuSparkles size={14} />
    },
    {
      id: 'keyPoints',
      label: messages.tabs.keyPoints,
      icon: <LuListChecks size={14} />
    },
    {
      id: 'ask',
      label: messages.tabs.ask,
      icon: <LuHelpCircle size={14} />
    },
    {
      id: 'explain',
      label: messages.tabs.explain,
      icon: <LuBaby size={14} />
    }
  ]

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      title={messages.title}
      closeAriaLabel={messages.closeAria}
      width="min(600px, 100vw)"
    >
      <div className="flex flex-col h-full min-h-0">
        <div
          role="tablist"
          aria-label={messages.featuresAria}
          className="flex flex-wrap gap-1.5 pb-3 border-b border-border-subtle"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab
            return (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`ai-toolkit-panel-${tab.id}`}
                id={`ai-toolkit-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={cx(
                  'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md',
                  'text-xs font-medium transition-colors duration-fast',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                  isActive
                    ? 'bg-accent-muted text-accent'
                    : 'bg-bg-surface text-text-muted hover:text-text-primary hover:bg-bg-hover'
                )}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`ai-toolkit-panel-${activeTab}`}
          aria-labelledby={`ai-toolkit-tab-${activeTab}`}
          className="flex-1 min-h-0 min-w-0 overflow-y-auto overflow-x-hidden py-4 pr-2"
        >
          {activeTab === 'summary' && (
            <SummaryTab
              title={title}
              article={article}
              cachedText={summaryText}
              onText={setSummaryText}
              locale={locale}
            />
          )}
          {activeTab === 'keyPoints' && (
            <KeyPointsTab
              title={title}
              article={article}
              cachedText={keyPointsText}
              onText={setKeyPointsText}
              locale={locale}
            />
          )}
          {activeTab === 'ask' && (
            <AskTab
              title={title}
              article={article}
              messages={askMessages}
              onMessagesChange={setAskMessages}
              locale={locale}
            />
          )}
          {activeTab === 'explain' && (
            <ExplainTab
              title={title}
              article={article}
              cachedText={explainText}
              onText={setExplainText}
              locale={locale}
            />
          )}
        </div>

        <p className="text-[11px] text-text-muted border-t border-border-subtle pt-3">
          {messages.disclaimer}
        </p>
      </div>
    </Drawer>
  )
}

export default AiToolkit
