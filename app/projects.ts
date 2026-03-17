import { Project, ProjectStatus } from '../components/types'

// Re-export types for convenience
export type { Project, ProjectStatus }

const PROJECTS_BASE_LINK = 'https://master.d3c1rfe7yqyxzj.amplifyapp.com/projects/'

export const PROJECTS: Project[] = [
	{
		title: 'Markdown Preview',
		description: 'Markdown Preview is a web application that allows you to preview markdown files.',
		githubUrl: 'https://github.com/ozanbatuhankurucu/markdown-preview',
		img: '/images/markdown-preview.png',
		stack: ['Nextjs', 'TypeScript', 'TailwindCSS'],
		createdAt: '2026-03-17',
		status: 'progress',
		updatedAt: '2026-03-17',
		url: 'https://main.djrdauoqxjm9k.amplifyapp.com/',
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
	{
		title: 'Small HTML & CSS & JavaScript Projects in React',
		description:
			'Small HTML, CSS and JavaScript projects developed by using React, TailwindCSS, StyledComponents, Airbnb config.',
		githubUrl: 'https://github.com/ozanbatuhankurucu/Small-HTML-CSS-JS-Projects',
		img: '/images/smallhtmlcss.png',
		stack: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'Styled Components', 'Airbnb config'],
		createdAt: '2022-05-29',
		status: 'completed',
		updatedAt: '2026-03-17',
		url: 'https://master.d3c1rfe7yqyxzj.amplifyapp.com/projects',
		features: [
			{ text: 'Insect Catch Game', link: `${PROJECTS_BASE_LINK}insect-catch-game` },
			{ text: 'Todo List', link: `${PROJECTS_BASE_LINK}todo-list` },
			{ text: 'Random Image Feed', link: `${PROJECTS_BASE_LINK}random-image-feed` },
			{ text: 'Testimonial Box Switcher', link: `${PROJECTS_BASE_LINK}testimonial-box-switcher` },
			{ text: 'Quiz App', link: `${PROJECTS_BASE_LINK}quiz-app` },
			{ text: 'Netflix Navigation', link: `${PROJECTS_BASE_LINK}netflix-navigation` },
			{ text: 'Custom Range Slider', link: `${PROJECTS_BASE_LINK}custom-range-slider` },
			{ text: 'Feedback UI Design', link: `${PROJECTS_BASE_LINK}feedback-ui-design` },
			{ text: 'Live User Filter', link: `${PROJECTS_BASE_LINK}live-user-filter` },
			{ text: 'Verify Account UI', link: `${PROJECTS_BASE_LINK}verify-account-ui` },
			{ text: '3D Background Boxes', link: `${PROJECTS_BASE_LINK}3d-background-boxes` },
			{ text: 'Password Strength Background', link: `${PROJECTS_BASE_LINK}password-strength-background` },
			{ text: 'Mobile Tab Navigation', link: `${PROJECTS_BASE_LINK}mobile-tab-navigation` },
			{ text: 'Pokedex', link: `${PROJECTS_BASE_LINK}pokedex` },
			{ text: 'Hoverboard', link: `${PROJECTS_BASE_LINK}hoverboard` },
			{ text: 'Image Carousel', link: `${PROJECTS_BASE_LINK}image-carousel` },
			{ text: 'Animated Countdown', link: `${PROJECTS_BASE_LINK}animated-countdown` },
			{ text: 'Notes App', link: `${PROJECTS_BASE_LINK}notes-app` },
			{ text: 'Good Cheap Fast', link: `${PROJECTS_BASE_LINK}good-cheap-fast` },
			{ text: 'Password Generator', link: `${PROJECTS_BASE_LINK}password-generator` },
			{ text: 'Typing Effect', link: `${PROJECTS_BASE_LINK}typing-effect` },
			{ text: 'Double Click Heart', link: `${PROJECTS_BASE_LINK}double-click-heart` },
			{ text: 'Github Profiles', link: `${PROJECTS_BASE_LINK}github-profiles` },
			{ text: 'Toast Notification', link: `${PROJECTS_BASE_LINK}toast-notification` },
			{ text: 'Double Vertical Slider', link: `${PROJECTS_BASE_LINK}double-vertical-slider` },
			{ text: 'Sticky Navbar', link: `${PROJECTS_BASE_LINK}sticky-navbar` },
			{ text: 'Content Placeholder', link: `${PROJECTS_BASE_LINK}content-placeholder` },
			{ text: 'Kinetic CSS Loader', link: `${PROJECTS_BASE_LINK}kinetic-css-loader` },
			{ text: 'Drawing App', link: `${PROJECTS_BASE_LINK}drawing-app` },
			{ text: 'Drag N Drop', link: `${PROJECTS_BASE_LINK}drag-n-drop` },
			{ text: 'Button Ripple Effect', link: `${PROJECTS_BASE_LINK}button-ripple-effect` },
			{ text: 'Theme Clock', link: `${PROJECTS_BASE_LINK}theme-clock` },
			{ text: 'Background Slider', link: `${PROJECTS_BASE_LINK}background-slider` },
			{ text: 'Movie App', link: `${PROJECTS_BASE_LINK}movie-app` },
			{ text: 'Drink Water', link: `${PROJECTS_BASE_LINK}drink-water` },
			{ text: 'Incrementing Counter', link: `${PROJECTS_BASE_LINK}incrementing-counter` },
			{ text: 'Animated Navigation', link: `${PROJECTS_BASE_LINK}animated-navigation` },
			{ text: 'Random Choice Picker', link: `${PROJECTS_BASE_LINK}random-choice-picker` },
			{ text: 'FAQ Collapse', link: `${PROJECTS_BASE_LINK}faq-collapse` },
			{ text: 'Event KeyCodes', link: `${PROJECTS_BASE_LINK}event-keycodes` },
			{ text: 'Dad Jokes', link: `${PROJECTS_BASE_LINK}dad-jokes` },
			{ text: 'Diamond Autograder', link: `${PROJECTS_BASE_LINK}diamond-autograder` },
			{ text: 'Search Dropdown', link: `${PROJECTS_BASE_LINK}search-dropdown` },
			{ text: 'Sound Board', link: `${PROJECTS_BASE_LINK}sound-board` },
			{ text: 'Form Wave Animation', link: `${PROJECTS_BASE_LINK}form-wave-animation` },
			{ text: 'Split Landing Page', link: `${PROJECTS_BASE_LINK}split-landing-page` },
			{ text: 'Scroll Animation', link: `${PROJECTS_BASE_LINK}scroll-animation` },
			{ text: 'Blurry Loading', link: `${PROJECTS_BASE_LINK}blurry-loading` },
			{ text: 'Hidden Search Widget', link: `${PROJECTS_BASE_LINK}hidden-search-widget` },
			{ text: 'Rotating Navigation', link: `${PROJECTS_BASE_LINK}rotating-navigation` },
			{ text: 'Progress Steps', link: `${PROJECTS_BASE_LINK}progress-steps` },
			{ text: 'Expanding Cards', link: `${PROJECTS_BASE_LINK}expanding-cards` },
		],
		featuresTitle: 'Projects',
		useColumnCount: true
	},
]

// Project status constants for filtering
export const PROJECT_STATUS: Record<ProjectStatus, ProjectStatus> = {
	completed: 'completed',
	progress: 'progress',
	todo: 'todo'
} as const
