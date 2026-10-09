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
    subtitle: 'AI-Powered Medical Information and Support for Android',
    label: 'Featured project',
    overview:
      'Doctor AI is an AI-powered mobile application that offers accessible, conversational health information. It combines a React Native app with a Node.js API and a Python AI service connected to Groq.',
    androidDownloadUrl: 'https://expo.dev/accounts/lielt/projects/doctor-ai/builds/06773c52-5552-43d2-b2bd-36233818f959',
    problem:
      'People often need an accessible starting point for general health questions. Doctor AI provides informational support across common health topics and helps surface situations that may need urgent professional attention.',
    role: 'Team Leader & Full-Stack Developer',
    roleDescription:
      'I served as Team Leader and contributed to frontend and backend development, with a primary focus on designing and integrating the Python Flask AI service, its Groq-powered response flow, and its communication with the Node.js backend and PostgreSQL database.',
    description:
      'A team-built mobile health information project. I focused on the AI service and backend integration, including conversational assistance, safety handling, and deploying the services that power the Android app.',
    highlights: [
      'Designed and integrated the Python Flask AI service with the Groq API and developed prompts and a structured medical-information response flow',
      'Implemented symptom analysis, emergency detection and safety handling, plus focused support flows for mental health, diabetes, and pregnancy-related questions',
      'Connected the AI service to the Node.js / Express backend and PostgreSQL through REST APIs; supported JWT authentication and conversation history integration',
      'Integrated multilingual interactions and speech-to-text using Groq Whisper',
      'Deployed the AI service and backend on Render, tested Android API communication, and built and distributed the APK using Expo EAS',
      'Debugged API communication across the mobile app, backend, and AI service',
    ],
    technologies: ['React Native', 'Expo', 'Node.js', 'Express', 'Python', 'Flask', 'Groq API', 'Groq Whisper', 'PostgreSQL', 'JWT', 'AsyncStorage', 'REST APIs', 'Render', 'Expo EAS'],
    features: [
      'Conversational medical information and symptom analysis',
      'Mental health, diabetes-related, and pregnancy-related assistance',
      'Emergency detection with safety-oriented responses',
      'Conversation history and multiple-language support',
      'Speech-to-text input powered by Groq Whisper',
    ],
    architecture: [
      'React Native with Expo provides the Android client; AsyncStorage supports on-device storage.',
      'The mobile app communicates with the Node.js / Express REST API, which handles JWT authentication and PostgreSQL data such as conversation history.',
      'The backend connects to a Python / Flask AI service for prompt-driven assistance and safety handling; the AI service integrates with the Groq API, including Groq Whisper for speech-to-text.',
    ],
    deployment: 'The Node.js backend and Python AI service are deployed on Render. Android builds are produced and distributed with Expo EAS.',
    disclaimer: 'Doctor AI is an educational and informational project, not a medical device or substitute for professional medical advice, diagnosis, or treatment. Users should consult a qualified healthcare professional about medical concerns and seek emergency care when needed.',
    resources: [
      { label: 'GitHub repository', url: '', pending: 'Project link to be added' },
    ],
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
    lessons: 'The project strengthened my experience integrating AI services with mobile and backend systems, testing distributed API flows, and preparing Android releases.',
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
