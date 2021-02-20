import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Brian Norton', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to the web developer portfolio of Brian Norton!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Brian.',
  subtitle: 'I am a Web Developer.',
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "Hello! My name is Brian. I'm from Illinois, and I currently study Web Development at Purdue University.",
  paragraphTwo: "Front-End Development is my strength, and I have experience building websites in both professional settings and on my own.",
  paragraphThree: "When I'm not making websites, I like to hang out with friends, watch NBA games, and play video games.",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'sfp.jpg',
    title: 'SFP',
    info: 'During my 8 months at Stormfront Productions in Lafayette, I learned a ton about the fundamentals of creating professional websites for clients. I picked up experience with Laravel and WordPress as well. Here are a few sites I created with the amazing team there.',
    info2: '',
    url: 'https://sfp.net',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'commerce.jpg',
    title: 'Commerce',
    info: 'Commerce is an e-commerce site built with React. This project uses the Commerce.js API, Stripe, and Material-UI to deliver a fully functional online shop. This was a great way to practice React Hooks, Router, and JavaScript skills.',
    info2: '',
    url: 'https://bnorton184commerce.netlify.app/',
    repo: 'https://github.com/norton16/ecommerce', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'social.png',
    title: 'Social Media',
    info: "This photo sharing social media website was made with React and Google Firebase. A user can sign in, upload photos with captions, comment on, and delete posts. While creating this project, I learned how to work with Firebase Firestore along with React Hooks and Context API.",
    info2: '',
    url: 'https://socialmedia-1f4ae.web.app/',
    repo: 'https://github.com/norton16/simplesocialmedia', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Send me an Email to get in touch!',
  btn: "Let's talk",
  email: 'bnorton184@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bnorton184/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/norton16',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
