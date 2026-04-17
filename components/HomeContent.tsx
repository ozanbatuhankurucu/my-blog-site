'use client'

import { useEffect, useMemo, useState } from 'react'
import { RiCloseLine, RiSearchLine } from 'react-icons/ri'
import { ArticleCard } from './ArticleCard'
import { CategoryType, PostMetadata, PostSearchRecord } from './types'

interface HomeContentProps {
	articles: PostMetadata[]
	categories: CategoryType[]
	searchIndex: PostSearchRecord[]
}

const SEARCH_DEBOUNCE_MS = 150

function useDebouncedValue<T>(value: T, delay: number): T {
	const [debounced, setDebounced] = useState(value)

	useEffect(() => {
		const id = setTimeout(() => setDebounced(value), delay)
		return () => clearTimeout(id)
	}, [value, delay])

	return debounced
}

// Score a single post's searchable fields against tokens.
// Returns null when any token is missing from all fields (post filtered out).
function scorePost(
	tokens: string[],
	record: Pick<PostSearchRecord, 'title' | 'description' | 'category' | 'content'>
): number | null {
	const title = record.title.toLowerCase()
	const description = record.description.toLowerCase()
	const category = record.category.toLowerCase()
	const content = record.content

	let score = 0
	for (const token of tokens) {
		const inTitle = title.includes(token)
		const inDescription = description.includes(token)
		const inCategory = category.includes(token)
		const inContent = content.includes(token)

		if (!inTitle && !inDescription && !inCategory && !inContent) {
			return null
		}

		if (inTitle) score += 3
		if (inDescription) score += 2
		if (inCategory) score += 2
		if (inContent) score += 1
	}

	return score
}

export default function HomeContent({ articles, categories, searchIndex }: HomeContentProps) {
	const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(null)
	const [query, setQuery] = useState('')
	const debouncedQuery = useDebouncedValue(query, SEARCH_DEBOUNCE_MS)

	const searchBySlug = useMemo(() => {
		const map = new Map<string, PostSearchRecord>()
		for (const record of searchIndex) {
			map.set(record.slug, record)
		}
		return map
	}, [searchIndex])

	const filteredArticles = useMemo(() => {
		const byCategory = selectedCategory
			? articles.filter((article) => article.category === selectedCategory)
			: articles

		const trimmed = debouncedQuery.trim().toLowerCase()
		if (!trimmed) return byCategory

		const tokens = trimmed.split(/\s+/).filter(Boolean)
		if (tokens.length === 0) return byCategory

		const scored: { article: PostMetadata; score: number }[] = []
		for (const article of byCategory) {
			const record = searchBySlug.get(article.slug)
			const fallback = {
				title: article.title ?? '',
				description: article.description ?? '',
				category: article.category,
				content: ''
			}
			const score = scorePost(tokens, record ?? fallback)
			if (score !== null) {
				scored.push({ article, score })
			}
		}

		// Stable sort: higher score first, keep original (date-desc) order as tiebreaker.
		scored.sort((a, b) => b.score - a.score)
		return scored.map((s) => s.article)
	}, [articles, selectedCategory, debouncedQuery, searchBySlug])

	const isSearching = debouncedQuery.trim().length > 0
	const resultCount = filteredArticles.length
	const hasActiveFilter = isSearching || selectedCategory !== null

	return (
		<>
			{/* Search input */}
			<div role="search" className="mb-4">
				<label htmlFor="post-search" className="sr-only">
					Search posts
				</label>
				<div className="relative">
					<span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-text-muted">
						<RiSearchLine size={18} />
					</span>
					<input
						id="post-search"
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === 'Escape') {
								setQuery('')
							}
						}}
						placeholder="Search posts by title, description, or content"
						aria-label="Search posts"
						className="
							w-full pl-10 pr-10 py-2.5 rounded-md
							bg-bg-surface border border-border-subtle
							text-text-primary placeholder:text-text-muted
							focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent
							transition-colors duration-fast
						"
					/>
					{query.length > 0 && (
						<button
							type="button"
							onClick={() => setQuery('')}
							aria-label="Clear search"
							className="absolute inset-y-0 right-0 flex items-center pr-3 text-text-muted hover:text-text-primary transition-colors duration-fast"
						>
							<RiCloseLine size={18} />
						</button>
					)}
				</div>
			</div>

			{/* Category Filter */}
			<div className="mb-6">
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

			{/* Result count (only when a filter is active) */}
			{hasActiveFilter && resultCount > 0 && (
				<p className="mb-4 text-sm text-text-muted" aria-live="polite">
					{resultCount} {resultCount === 1 ? 'post' : 'posts'}
					{isSearching ? ` matching "${debouncedQuery.trim()}"` : ''}
				</p>
			)}

			{/* Articles Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredArticles.map((article) => (
					<ArticleCard
						key={article.slug}
						date={article.date}
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
					<p className="text-text-muted">
						{isSearching
							? `No posts match "${debouncedQuery.trim()}"${selectedCategory ? ` in ${selectedCategory}` : ''}.`
							: 'No articles found in this category.'}
					</p>
				</div>
			)}
		</>
	)
}
