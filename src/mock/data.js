import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Nitish Rane', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello I'm",
  name: 'Nitish Rane',
  subtitle: "I'm a Java | Flutter Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'me.jpg',
  paragraphOne: 'An enthusiastic developer with highly motivated and leadership skills having Masters in Computer Applications (2020)',
  paragraphTwo: 'Eager to learn new technologies and methodologies. Flexible to work in any environment as required.',
  paragraphThree: 'Check out my Resume here',
  resume: 'https://drive.google.com/drive/folders/1Mt85EMc3rlDPVcMJIVH49Tka0mjdN9qU', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'c.jpg',
    title: 'C Programming Notes',
    info: 'Made with Flutter',
    info2: 'On the "C Programming Notes", you can find C Programming Tutorial,Programming Chapters, Basic and Advanced Programs, Pattern Programs, Programming Algorithms, Interview QnA, and all that you need to either learn C programming basics or to become a C programming expert.',
    url: 'https://play.google.com/store/apps/details?id=com.noobdev7.cprogrammingapp',
   // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'cpp.jpg',
    title: 'C++ Notes',
    info: 'Made with Flutter',
    info2: 'Build your programming skills in C++ Programming language. Learn the basics of C++ Programming or become an expert in C++ Programming with this best C++ Programming learning app. Learn to code with C++ Programming Language for free with a one-stop code learning app - “C++ Notes”. If you’re preparing for a C++ programming interview or just preparing for your upcoming coding exam, this is a must-have app for you.',
    url: 'https://play.google.com/store/apps/details?id=com.noobdev7.cppnotes',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'java.jpg',
    title: 'Java Simplified',
    info: 'Made with Flutter',
    info2: 'On the "Java Simplified", you can find the Java Programming Tutorial, Programming Chapters, 150+ Basic and Advanced Programs, Multiple Choice Questions, Topic-wise Interview Question-Answers, and all that you need to either learn Java programming basics or to become a Java programming expert.',
    url: 'https://play.google.com/store/apps/details?id=com.noobdev7.javasimplified',
   // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'isp.jpg',
    title: 'Internet Service Provider',
    info: 'Made with Java and MySQL',
    info2: "We build a project to simplify internet service providers' job. The main job of our project is to help ISP to keep their customer record. And also to create a new internet plan. And assign a plan to the requested customer. Our software is a windows application designed in such a way it minimizes the workload of ISP admin. And simplified their job. and also help ISP admin to keep a record of their employee. and solved complaints of customer",
  // url: 'https://play.google.com/store/apps/details?id=com.noobdev7.javasimplified',
    repo: 'https://github.com/nitishr7/ISP-Java', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sms.jpg',
    title: 'SuperMarket Management system',
    info: 'Made with VB6 and MSAccess',
    info2: 'The objective of the “Supermarket Management System “is to produce software that manages the sales activity done in a supermarket, maintaining the stock details, maintaining the records of the sales done for a particular month/year. The users will consume less time in the calculation and the sales activity will be completed within a fraction of seconds whereas the manual system will make the user write it down which is a long procedure and it also consumes a lot of time.',
    repo: 'https://github.com/nitishr7/Supermarket-Management-System_2015', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'would you like to work with me ?',
  btn: "Let's talk",
  email: 'nitishrane28@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nitish-rane-2b5a53169/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nitishr7',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
