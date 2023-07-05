'use client'
import React, { FC } from 'react'
import { ArticleCard } from './ArticleCard'
import DUMMY_ARTICLE_DATA from './dummyData'
import { SectionTitle } from './SectionTitle'
import _ from 'lodash'
import { PostMetadata } from './types'

interface ArticleSectionProps {
  category: string
  sectionTitle: string
  articles: PostMetadata[]
}
export const ArticleSection: FC<ArticleSectionProps> = ({
  category,
  sectionTitle,
  articles
}) => {
  const filteredArticles = _.chain(articles)
    .filter((item) => item.category === category)
    .orderBy(['date'], ['desc'])
    .value()

  return (
    <div className='mt-20'>
      <SectionTitle title={sectionTitle} />
      <div className='flex flex-col items-center gap-4 mt-[30px] py-1 hide-scrollbar md:flex-row md:overflow-x-auto'>
        {filteredArticles.map(({ date, img, title, slug }) => (
          <ArticleCard
            key={title}
            date={date}
            img={img}
            title={title}
            slug={slug}
          />
        ))}
      </div>
    </div>
  )
}
