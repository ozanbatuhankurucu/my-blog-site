import { Project, ProjectStatus } from '../components/types'

// Re-export types for convenience
export type { Project, ProjectStatus }

export const PROJECTS: Project[] = [
	{
		title: 'Markdown Preview',
		description:
			'A live markdown editor and previewer built with Next.js. Paste or type markdown on the left, see the rendered output on the right.',
		githubUrl: 'https://github.com/ozanbatuhankurucu/markdown-preview',
		img: '/images/markdown-preview.png',
		stack: [
			'Next.js 16',
			'TypeScript',
			'Tailwind CSS v4',
			'react-markdown',
			'remark-gfm',
			'rehype-highlight',
			'rehype-raw',
			'rehype-slug',
			'react-resizable-panels',
			'next-themes',
			'lucide-react',
			'sonner',
		],
		createdAt: '2026-03-17',
		status: 'progress',
		updatedAt: '2026-06-16',
		url: 'https://main.djrdauoqxjm9k.amplifyapp.com/',
		features: [
			{ text: 'Live preview — Rendered output updates as you type' },
			{ text: 'GitHub Flavored Markdown — Tables, task lists, strikethrough, footnotes, and autolinks' },
			{ text: 'Syntax highlighting — Code blocks with language detection via highlight.js' },
			{ text: 'Resizable panels — Drag the divider to resize the editor and preview panes' },
			{ text: 'Fullscreen mode — Expand either panel to full width; press Escape to restore the split layout' },
			{ text: 'Dark and light mode — System, light, and dark theme options' },
			{ text: 'Document library — Keep up to 100 markdown documents in a left slide-in drawer; search, rename, pin, duplicate, and delete from one place' },
			{ text: "Active document in the header — A breadcrumb-style header shows the active document's title; click it (or the pencil affordance) to rename inline, press Enter to commit or Escape to cancel" },
			{ text: 'One-click new document — A primary + New button in the header (and a keyboard shortcut) creates a fresh document without losing the current one' },
			{ text: 'Auto-save per document — Every edit is written to localStorage against the active document so nothing is lost when you switch' },
			{ text: 'Scroll sync — Editor and preview scroll positions stay in sync using pointer-tracking' },
			{ text: 'Active line highlighting — Current line is highlighted in both the editor and the gutter' },
			{ text: 'Auto-pairing — Brackets, backticks, quotes, and markdown characters auto-close; selections are wrapped automatically' },
			{ text: 'Copy button on code blocks — Hover over a code block in the preview to reveal a one-click copy button' },
			{ text: 'Drag-and-drop import — Drop a .md, .markdown, or .txt file onto the editor to import it as a new document' },
			{ text: 'Table of contents — Click the list icon in the preview header to navigate headings' },
			{ text: 'Copy as HTML — Copy the rendered HTML to clipboard' },
			{ text: 'Download — Export your markdown as a .md file' },
			{ text: 'Keyboard shortcuts — Ctrl+B to toggle the document library, Ctrl/Cmd+Alt+N to create a new document, Ctrl+S to download, Ctrl+Shift+C to copy HTML, Escape to exit fullscreen' },
		],
		featuresTitle: 'Features',
	},
	{
		title: 'Magic Quadrant',
		description: 'Magic Quadrant is a scatter chart developed by Gartner to visualize major players in a specific market',
		githubUrl: 'https://github.com/ozanbatuhankurucu/magic-quadrant',
		img: '/images/magicquadrant.png',
		stack: ['React', 'TypeScript', 'Styled Components', 'JavaScript'],
		createdAt: '2022-02-19',
		status: 'completed',
		updatedAt: '2026-03-16',
		url: 'https://master.d1zdbcjpkfl493.amplifyapp.com/',
		features: [
			{
				text: 'X-axis (Completeness of Vision): represents relative innovation level.'
			},
			{
				text: 'Y-axis (Ability to Execute): represents relative financial maturity.'
			}
		],
		featuresTitle: 'Features'
	},
]

// Project status constants for filtering
export const PROJECT_STATUS: Record<ProjectStatus, ProjectStatus> = {
	completed: 'completed',
	progress: 'progress',
	todo: 'todo'
} as const
