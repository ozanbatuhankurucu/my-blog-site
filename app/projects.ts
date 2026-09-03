import { Project, ProjectStatus } from '../components/types'
import { PULSE_APP_PATH, PULSE_APP_STORE_URL, PULSE_IMAGE_DIR } from '../lib/constants'

// Re-export types for convenience
export type { Project, ProjectStatus }

export const PROJECTS: Project[] = [
	{
		slug: 'pomodoro-work-study-timer',
		title: 'Pomodoro: Work & Study Timer',
		category: 'Native macOS app',
		description:
			'A calm, native Pomodoro timer for the macOS menu bar — with a redesigned popover, full focus history, session-aware alerts, and English/Turkish support.',
		outcome:
			'Version 1.3 delivers a pixel-aligned timer experience, stable menu bar countdown, accurate local-first history, and completion feedback tailored to every session type.',
		img: `${PULSE_IMAGE_DIR}/hero.png`,
		imgAlt: 'Pomodoro: Work & Study Timer idle focus session with weekly history in the macOS menu bar',
		imgAspectRatio: '1024 / 640',
		imgFit: 'contain',
		stack: ['SwiftUI', 'AppKit', 'Combine', 'AVFoundation', 'Swift Testing'],
		highlights: [
			'Redesigned timer, settings, launch experience, and completion celebration',
			'Stable menu bar countdown sized for sessions up to 120 minutes',
			'Full history with total focus time, sessions, current streak, and best streak',
			'Session-aware completion alerts for focus, short break, and long break',
			'English and Turkish interfaces with system-language default',
		],
		createdAt: '2026-08-20',
		status: 'progress',
		updatedAt: '2026-09-03',
		url: PULSE_APP_STORE_URL,
		primaryAction: {
			label: 'Download on the Mac App Store',
			href: PULSE_APP_STORE_URL,
			external: true,
		},
		secondaryAction: {
			label: 'Learn more',
			href: PULSE_APP_PATH,
		},
		features: [
			{ text: 'Focus, short break, and long break sessions with fully customizable durations' },
			{ text: 'Stable menu-bar countdown that updates immediately without moving the popover' },
			{ text: 'Full focus history with total time, session count, current streak, and best streak' },
			{ text: 'Accurate history timestamps after sleep, wake, restart, and app relaunch' },
			{ text: 'Session-aware completion copy for focus, short break, and long break' },
			{ text: 'English and Turkish interfaces with system-language default and manual override' },
			{ text: 'Redesigned popover, first-launch experience, and completion celebration' },
			{ text: 'Six completion sounds and six optional animal celebration animations' },
			{ text: 'Local-only persistence with no accounts, analytics, ads, or network requests' },
			{ text: 'VoiceOver support, keyboard controls, and Reduce Motion support' },
		],
		featuresTitle: 'Highlights',
	},
	{
		slug: 'markdown-preview',
		title: 'Markdown Preview',
		category: 'Developer tool',
		description:
			'A fast, browser-based markdown workspace that pairs a focused editor with an instant, GitHub-flavored preview.',
		outcome:
			'A private, client-only writing environment with a persistent document library, synchronized panes, and one-click export.',
		githubUrl: 'https://github.com/ozanbatuhankurucu/markdown-preview',
		img: '/images/markdown-preview.png',
		imgAlt: 'Markdown Preview editor with a document library and rendered preview',
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
		highlights: [
			'Live GFM rendering with syntax highlighting and table of contents',
			'Searchable, pinnable document library with automatic local saves',
			'Resizable, synchronized panes with keyboard-first export tools',
		],
		createdAt: '2026-03-17',
		status: 'progress',
		updatedAt: '2026-06-16',
		url: 'https://main.djrdauoqxjm9k.amplifyapp.com/',
		primaryAction: {
			label: 'Open live app',
			href: 'https://main.djrdauoqxjm9k.amplifyapp.com/',
			external: true,
		},
		secondaryAction: {
			label: 'View source',
			href: 'https://github.com/ozanbatuhankurucu/markdown-preview',
			external: true,
		},
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
		slug: 'magic-quadrant',
		title: 'Magic Quadrant',
		category: 'Data visualization',
		description: 'Magic Quadrant is a scatter chart developed by Gartner to visualize major players in a specific market',
		outcome:
			'An interactive, reusable quadrant visualization that turns relative vision and execution scores into an immediately readable market map.',
		githubUrl: 'https://github.com/ozanbatuhankurucu/magic-quadrant',
		img: '/images/magicquadrant.png',
		imgAlt: 'Magic Quadrant visualization plotting companies by vision and ability to execute',
		stack: ['React', 'TypeScript', 'Styled Components', 'JavaScript'],
		highlights: [
			'Maps market players across execution and vision dimensions',
			'Presents four strategic quadrants in a compact visual format',
			'Built as a reusable React and TypeScript visualization',
		],
		createdAt: '2022-02-19',
		status: 'completed',
		updatedAt: '2026-03-16',
		url: 'https://master.d1zdbcjpkfl493.amplifyapp.com/',
		primaryAction: {
			label: 'Open live demo',
			href: 'https://master.d1zdbcjpkfl493.amplifyapp.com/',
			external: true,
		},
		secondaryAction: {
			label: 'View source',
			href: 'https://github.com/ozanbatuhankurucu/magic-quadrant',
			external: true,
		},
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
