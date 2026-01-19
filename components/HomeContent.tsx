'use client'

import { useState } from 'react'
import { ArticleCard } from './ArticleCard'
import { CategoryType, PostMetadata } from './types'

interface HomeContentProps {
  articles: PostMetadata[]
  categories: CategoryType[]
}

export default function HomeContent({ articles, categories }: HomeContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null)

  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles

  return (
    <>
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`
              px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-fast
              ${selectedCategory === null 
                ? 'bg-accent text-bg-base' 
                : 'bg-bg-surface text-text-secondary hover:text-text-primary hover:bg-bg-hover'
              }
            `}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-fast
                ${selectedCategory === category 
                  ? 'bg-accent text-bg-base' 
                  : 'bg-bg-surface text-text-secondary hover:text-text-primary hover:bg-bg-hover'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <ArticleCard
            key={article.slug}
            date={article.date}
            img={article.img}
            title={article.title}
            slug={article.slug}
            category={article.category}
            description={article.description}
          />
        ))}
      </div>

      {/* Empty state */}
      {filteredArticles.length === 0 && (
        <div className="text-center py-16">
          <p className="text-text-muted">No articles found in this category.</p>
        </div>
      )}
    </>
  )
}
