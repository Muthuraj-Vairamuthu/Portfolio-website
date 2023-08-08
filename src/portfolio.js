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
    'I am a sophomore pursuing Computer Science at IIIT Delhi. With a keen interest in business, technology, and science, I am driven to contribute meaningfully to these domains. Alongside my academic pursuits, I possess strong public speaking and oratory skills, coupled with a knack for critical problem-solving. These attributes empower me to work towards my aspirations and make a valuable impact.',
  social: {
    linkedin: 'https://www.linkedin.com/in/muthuraj-vairamuthu-748600258/',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Assembler-Simulator',
    description:
      'This multi-faceted project involves the design, implementation, and enhancement of an assembler-simulator system capable of processing assembly language programs and handling simple floating-point computations. ',
    stack: ['Python', 'Git'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'PYTHON',
  'SQL',
  'C',
  'JAVA',
  'TABLEAU',
  'MIROBOARD',
  'SCRATCH',
  'ALICE',
  'Git',
  'TKINTER',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'muthuraj.vairamuthu@gmail.com',
}

export { header, about, projects, skills, contact }
