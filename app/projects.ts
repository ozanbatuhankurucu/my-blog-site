interface Project {
  title: string
  description: string
  githubUrl: string
  img: string
  stack: string[]
  createdAt: string
  status: ProjectStatus
  updatedAt: string
  url?: string
  features?: string[]
  featuresTitle?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Project 1',
    description: 'This is the first project',
    githubUrl: 'https://github.com/project1',
    img: '/images/zafertaki1.png',
    stack: ['HTML', 'CSS', 'JavaScript'],
    createdAt: '2022-01-01',
    status: 'completed',
    updatedAt: '2022-01-01',
    url: 'https://project1.com',
    features: ['Feature 1', 'Feature 2'],
    featuresTitle: 'Key Features'
  },
  {
    title: 'Project 2',
    description: 'This is the second project',
    githubUrl: 'https://github.com/project2',
    img: '/images/zafertaki2.png',
    stack: ['React', 'Node.js', 'MongoDB'],
    createdAt: '2022-02-01',
    status: 'progress',
    updatedAt: '2022-02-01',
    url: 'https://project2.com',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    featuresTitle: 'Highlighted Features'
  },
  {
    title: 'Project 3',
    description: 'This is the third project',
    githubUrl: 'https://github.com/project3',
    img: '/images/zafertaki3.png',
    stack: ['Python', 'Django', 'PostgreSQL'],
    createdAt: '2022-03-01',
    status: 'completed',
    updatedAt: '2022-03-01',
    url: 'https://project3.com',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    featuresTitle: 'Main Features'
  },
  {
    title: 'Project 4',
    description: 'This is the fourth project',
    githubUrl: 'https://github.com/project4',
    img: '/images/zafertaki4.png',
    stack: ['Vue.js', 'Firebase'],
    createdAt: '2022-04-01',
    status: 'completed',
    updatedAt: '2022-04-01',
    url: 'https://project4.com',
    features: ['Feature 1', 'Feature 2'],
    featuresTitle: 'Key Features'
  },
  {
    title: 'Project 5',
    description: 'This is the fifth project',
    githubUrl: 'https://github.com/project5',
    img: '/images/zafertaki5.png',
    stack: ['Angular', 'Express.js', 'MySQL'],
    createdAt: '2022-05-01',
    status: 'progress',
    updatedAt: '2022-05-01',
    url: 'https://project5.com',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    featuresTitle: 'Notable Features'
  }
]

export type ProjectStatus = 'completed' | 'progress' | 'todo'

export const PROJECT_STATUS = {
  completed: 'completed',
  progress: 'progress',
  todo: 'todo'
}

const PROJECT_STATUS_TEXT = {
  completed: 'Completed',
  inProgress: 'In Progress',
  toDo: 'To Do'
}

const STATU_COLORS = {
  completed: '#50E37A',
  inProgress: '#458CF7',
  toDo: '#292C31'
}

export const getProjectStatuProps = (projectStatu: ProjectStatus) => {
  switch (projectStatu) {
    case PROJECT_STATUS.completed:
      return {
        statuColor: STATU_COLORS.completed,
        projectStatu: PROJECT_STATUS_TEXT.completed
      }
    case PROJECT_STATUS.progress:
      return {
        statuColor: STATU_COLORS.inProgress,
        projectStatu: PROJECT_STATUS_TEXT.inProgress
      }
    case PROJECT_STATUS.todo:
      return {
        statuColor: STATU_COLORS.toDo,
        projectStatu: PROJECT_STATUS_TEXT.toDo
      }
    default:
      return {}
  }
}
