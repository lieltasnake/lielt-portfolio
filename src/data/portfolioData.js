import todoLoginScreenshot from '../assets/todo-list/todo-login.png'
import drAiLoginScreenshot from '../assets/dr-ai/dr-ai-login.jpg'
import drAiSignupScreenshot from '../assets/dr-ai/dr-ai-signup.jpg'
import drAiHomeScreenshot from '../assets/dr-ai/dr-ai-home.jpg'

export const skills = [
  {
    title: 'Languages',
    items: ['Java', 'C++', 'Python', 'JavaScript', 'PHP'],
  },
  {
    title: 'Web & Mobile',
    items: ['React', 'React Native', 'Node.js', 'Express.js', 'HTML5', 'CSS3', 'Expo'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL'],
  },
  {
    title: 'Desktop Development',
    items: ['JavaFX', 'Scene Builder'],
  },
  {
    title: 'AI & Voice',
    items: ['AI Integration', 'Speech-to-Text', 'Text-to-Speech'],
  },
  {
    title: 'Networking',
    items: ['Cisco Networking', 'Network Configuration', 'Troubleshooting'],
  },
]

export const projects = [
  {
    slug: 'dr-ai',
    number: '01',
    title: 'Dr. AI',
    subtitle: 'Voice-Enabled AI Health Recommendation Mobile Application',
    label: 'Featured project',
    overview:
      'Dr. AI is a final-year university project developed as a team. The application provides basic symptom-based health guidance and encourages users to seek professional medical care when symptoms may be serious.',
    role: 'Team Leader',
    roleDescription:
      'I contributed to both frontend and backend development while coordinating the team, supporting technical decisions, and helping with project delivery.',
    description:
      'A final-year university project developed as a team. I served as Team Leader and contributed to both frontend and backend development. The application provides basic symptom-based guidance and encourages professional medical care for serious symptoms.',
    highlights: ['Team Leader responsible for coordinating the final-year project', 'Frontend and backend contributions across the mobile application and supporting services'],
    technologies: ['React Native', 'Expo', 'Node.js', 'Python', 'PostgreSQL', 'Speech-to-Text', 'Text-to-Speech', 'AI Integration'],
    features: ['Basic symptom-based health guidance', 'Voice interaction using Speech-to-Text and Text-to-Speech', 'Encouragement to seek professional care for serious symptoms'],
    screenshots: [
      {
        src: drAiLoginScreenshot,
        alt: 'Dr. AI mobile application sign-in screen',
        caption: 'Sign-in screen',
      },
      {
        src: drAiSignupScreenshot,
        alt: 'Dr. AI mobile application account registration screen',
        caption: 'Account registration screen',
      },
      {
        src: drAiHomeScreenshot,
        alt: 'Dr. AI mobile application support-category home screen',
        caption: 'Main support-category screen',
      },
    ],
    githubUrl: '',
    liveUrl: '',
    lessons: 'I learned how to balance technical decisions, collaboration, and delivery while contributing across frontend and backend development.',
  },
  {
    slug: 'todo-list',
    number: '02',
    title: 'Todo List Desktop Application',
    subtitle: 'Java Desktop Application',
    label: 'Desktop application',
    overview:
      'A Java desktop productivity application focused on practical task management, structured data handling, and a clear user experience.',
    role: '',
    roleDescription: '',
    description:
      'A Java desktop productivity application focused on practical task management, structured data handling, and a clear user experience.',
    highlights: [
      'Designed the interface with JavaFX and Scene Builder',
      'Connected application data to a MySQL database',
      'Implemented a focused desktop workflow for managing tasks',
    ],
    technologies: ['Java', 'JavaFX', 'Scene Builder', 'MySQL'],
    features: [],
    screenshots: [{
      src: todoLoginScreenshot,
      alt: 'Todo List Desktop Application login and registration screen',
      caption: 'Login and registration interface',
    }],
    githubUrl: '',
    liveUrl: '',
    lessons: '',
  },
  {
    slug: 'car-rental',
    number: '03',
    title: 'Car Rental Management System',
    subtitle: 'Software Application',
    label: 'Software application',
    overview:
      'A software project focused on organizing car rental operations and managing rental-related information through a structured application workflow.',
    role: '',
    roleDescription: '',
    description:
      'A software project for managing car rental operations and organizing rental-related information through a structured application workflow.',
    highlights: [],
    technologies: [],
    features: [],
    screenshots: [],
    githubUrl: '',
    liveUrl: '',
    lessons: '',
  },
]

export const contact = {
  phone: '+251 933 181 328',
  email: 'lieltasnake@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lielt-asnake-216a68406/',
  github: 'https://github.com/lieltasnake',
  telegram: 'https://t.me/Lielt2119',
}
