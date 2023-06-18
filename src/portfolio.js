

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://portfolio.alainpaulin.com',
  title: 'Alain Paulin.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Alain Paulin Niyonkuru',
  role: 'Full Stack Developer',
  description:
    'I am an experienced and passionate Full Stack Developer specializing in innovative and user-friendly web applications. With expertise in both front-end and back-end development, I excel in creating seamless digital experiences from concept to deployment. My skills include HTML, CSS, JavaScript, React, Angular, Python, Java, and Node.js, along with frameworks like Django and Express.js. I prioritize clean code and stay updated with emerging technologies. My portfolio showcases successful projects such as e-commerce platforms and content management systems. I look forward to collaborating with you on your next digital venture.',
  resume: 'https://resume.alainpaulin.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/alain-paulin-niyonkuru/',
    github: 'https://github.com/alainpaulinn',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'alainpaulinn@gmail.com',
}

export { header, about, projects, skills, contact }
