const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'John smith',
  role: 'xyz',
  description:
    'abc',
  social: {
    github: 'https://github.com',
  },
}




const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'PYTHON',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'xyzm',
}

export { header, about, projects, skills, contact }
