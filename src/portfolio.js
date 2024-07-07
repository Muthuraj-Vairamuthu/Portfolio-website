const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://Muthuraj-Vairamuthu.github.io/Portfolio-website',
  title: 'MV.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Muthuraj Vairamuthu',
  role: 'CSE Sophomore at IIIT Delhi',
  description: 
    "I'm Muthuraj Vairamuthu, pursuing a degree in Computer Science Engineering at IIITD with a focus on React technologies as a front-end developer. My passion lies in software development and emerging technologies, particularly Machine Learning.As a member of ACM SIGCHI, I am constantly eager to expand my horizons in development, from education to sports, IoT, and beyond. I am enthusiastic about exploring the applications of Human-Computer Interaction (HCI) across various fields, including sports, education, and innovative platforms where technology can drive meaningful progress, connecting and empowering us.",
  social: {
    linkedin: 'https://www.linkedin.com/in/muthuraj-vairamuthu-748600258/',
    github: 'https://github.com',
  },
}

const projects = [
  {
    name: 'Roamify',
    description:
      'AI-powered service providing personalized travel itineraries using NLP and ML to enhance travel planning. Achieved a BLEU Score of 0.78 (Llama) and 0.72 (T5) and a ROUGE score of 0.80 (Llama) and 0.75 (T5).',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'ML (nltk)', 'Llama3'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'ALT',
    description:
      'Open-source mobile application to facilitate active learning and teaching. Scope includes refactoring the codebase and updating Firestore connection for better accessibility.',
    stack: ['JavaScript', 'React-Native'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Disease Gene Classification Using Machine Learning',
    description:
      'Developed an ML model to classify disease-related genes using differential gene expression analysis. Implemented a CNN with TensorFlow and feature selection with XGBoost, achieving 92% accuracy.',
    stack: ['Python', 'Machine Learning', 'TensorFlow', 'XGBoost'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Fit-o-Mania',
    description:
      'Utilizes React to craft a seamless website for personalized calorie tracking and fitness levels via API calls. Developed during a hackathon by BYLD Club at IIIT Delhi.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'ByteBite Builders',
    description:
      'Developed a mobile and web app with global cuisine and calorie tracking using Cosylab API for accurate details during a 14-hour hackathon by CosyLab IIIT Delhi.',
    stack: ['Dart', 'C++', 'Python', 'JavaScript', 'CSS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'HCI Impact In Real Life (IIT Bombay-ACM SIGCHI)',
    description:
      'Presented a poster on HCI and IoT at the ACM-SIGCHI Conference, IIT Bombay. Secured full scholarship for conference attendance and participation.',
    stack: [],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'MedPlus Connect',
    description:
      'Developed an online pharmaceutical store with efficient inventory management, user-friendly navigation, and multiple payment options, enhancing B2C healthcare accessibility.',
    stack: ['React (Front end)', 'MySQL', 'Node.js', 'Postman API (Backend)'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'OS Simple Scheduler and Shell',
    description:
      'Created a Linux shell and scheduler, showcasing skills in multi-threading, forking, and thread management.',
    stack: ['Linux', 'C', 'Operating Systems Concepts'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Stickman Project',
    description:
      'Developed the Stick hero game as a clone from scratch using Java FX.',
    stack: ['Java FX'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Shapley-Shubik Power Index for Indian State Elections',
    description:
      'Addressed equitable political representation in Indian elections using the Shapley-Shubik Power index to find the influence of each state in the elections.',
    stack: ['Python', 'C'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Assembler-Simulator',
    description:
      'Developed an assembler and simulator for a custom ISA; the assembler translates custom assembly code into machine code, while the simulator executes this code, tracking registers, program counter, and memory usage.',
    stack: ['Python'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
];


const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'SQL',
  'C',
  'Java',
  'Tableau',
  'Miroboard',
  'Scratch',
  'Alice',
  'Git',
  'Tkinter',
  'Shell Script',
  'Google Cloud Services',
  'Postman API',
  'MySQL',
  'HTML',
  'CSS',
  'JavaScript',
  'Django',
  'React',
  'LATEX (Overleaf)',
  'Web Development (HTML, CSS, React, JavaScript)',
  'C++',
  'JavaScript',
];


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'muthuraj.vairamuthu@gmail.com',
}

export { header, about, projects, skills, contact }
