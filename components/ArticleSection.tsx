'use client'
import React, { FC } from 'react'
import { ArticleCard } from './ArticleCard'
import DUMMY_ARTICLE_DATA from './dummyData'
import { SectionTitle } from './SectionTitle'
import _ from 'lodash'

interface ArticleSectionProps {
  category: string
  sectionTitle: string
}
export const ArticleSection: FC<ArticleSectionProps> = ({
  category,
  sectionTitle
}) => {
  const filteredArticles = _.chain(DUMMY_ARTICLE_DATA)
    .filter((item) => item.category === category)
    .orderBy(['date'], ['desc'])
    .value()

  return (
    <div className='mt-20'>
      <SectionTitle title={sectionTitle} />
      <div className='flex flex-col items-center gap-4 mt-[30px] py-1 hide-scrollbar md:flex-row md:overflow-x-auto'>
        {filteredArticles.map(({ category, date, img, title }) => (
          <ArticleCard
            key={title}
            category={category}
            date={date}
            img={img}
            title={title}
          />
        ))}
      </div>
    </div>
  )
}
