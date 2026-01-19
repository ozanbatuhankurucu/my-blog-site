import { Project, ProjectStatus } from '../components/types'

// Re-export types for convenience
export type { Project, ProjectStatus }

const PROJECTS_BASE_LINK = 'https://master.d3c1rfe7yqyxzj.amplifyapp.com/projects/'

export const PROJECTS: Project[] = [
  {
    title: 'Karia Endustri',
    description:
      'On the home page of this website, information is given about Karia Endustri Company. In the section of products, the materials that are actively sold are promoted. The reason why Gatsby library was chosen especially for technology stack selection is that it is a static website and does not require frequent data updates.',
    githubUrl: 'https://github.com/ozanbatuhankurucu/karia',
    img: '/images/kariaendustri.jpg',
    stack: ['Gatsby', 'CSS', 'JavaScript', 'AWS Amplify', 'Strapi'],
    createdAt: '2021-03-02',
    status: 'completed',
    updatedAt: '2021-03-02',
    url: 'https://www.kariaendustri.com/'
  },
  {
    title: 'Expense Tracker',
    description: 'In this project I use hooks (useState, useContext, useReducer) and the context API.',
    githubUrl: 'https://github.com/ozanbatuhankurucu/Expense-Tracker-Using-useContext-and-useReducer-hooks',
    img: '/images/expensetracker.png',
    stack: ['React', 'Context API', 'State Management'],
    createdAt: '2022-01-01',
    status: 'completed',
    updatedAt: '2022-01-01',
    url: 'https://master.d5s6ddtgqv0y2.amplifyapp.com/'
  },
  {
    title: 'Magic Quadrant',
    description: 'Magic Quadrant is a scatter chart develop by Gartner to visualize major players in a specific market',
    githubUrl: 'https://github.com/ozanbatuhankurucu/magic-quadrant',
    img: '/images/magicquadrant.png',
    stack: ['React', 'TypeScript', 'Styled Components', 'JavaScript'],
    createdAt: '2022-02-19',
    status: 'completed',
    updatedAt: '2022-02-19',
    url: 'https://master.dsj8aspqo6u80.amplifyapp.com/',
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
    status: 'progress',
    updatedAt: '2022-05-29',
    url: 'https://master.d3c1rfe7yqyxzj.amplifyapp.com/projects',
    features: [
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
      { text: 'Hidden Search Widget', link: `${PROJECTS_BASE_LINK}hidden-search-widget` }
    ],
    featuresTitle: 'Projects',
    useColumnCount: true
  },
  {
    title: 'React Portfolio with TailwindCSS',
    description:
      "This project is a great way to learn all about Tailwind's utility classes, taking a mobile first approach dark/light mode, and more.",
    githubUrl: 'https://github.com/ozanbatuhankurucu/Nextjs-Portfolio-with-TailwindCss',
    img: '/images/reactportfolio.png',
    stack: ['TailwindCSS', 'NextJS', 'ReactJS'],
    createdAt: '2022-10-02',
    status: 'completed',
    updatedAt: '2022-10-02',
    url: 'https://main.d3faia6pj647yk.amplifyapp.com'
  }
]

// Project status constants for filtering
export const PROJECT_STATUS: Record<ProjectStatus, ProjectStatus> = {
  completed: 'completed',
  progress: 'progress',
  todo: 'todo'
} as const
