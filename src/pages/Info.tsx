import { About, Education, Work, Skill, Project } from "../types"

export const about: About[] = [
  {
    section: "Loves",
    blurb: "I love the Lord, I love my wife and I love my son.",
  },
  {
    section: "Interests",
    blurb:
      "I have a passion for the technical and for problem solving. I like to read Kierkegaard, XKCD, and have an interest in woodworking.",
  },
  {
    section: "Math and Coding",
    blurb:
      "I like toying around with numbers and formulas. Finding solutions to problems, automating workflow and finding better ways of achieving a goal excites me. I like content and solutions that are clean, concise and well presented.",
  },
  {
    section: "Australia ('straya)",
    blurb:
      "I was born, raised and have lived in Australia my whole life sans travel. It's where my family is and it is the place that made me me. Love the lifestyle. Early 2021 my family and I relocated to the USA where I am a now a Permanent Resident.",
  },
]

export const skills: Skill[] = [
  { name: "NODEJS" },
  { name: "MONGODB" },
  { name: "POSTGRES" },
  { name: "Graphql" },
  { name: "APOLLO" },
  { name: "TYPEGRAPHQL" },
  { name: "REST" },
  { name: "EXPRESS" },
  { name: "GIT" },
  { name: "NPM" },
  { name: "TYPESCRIPT" },
  { name: "JAVASCRIPT" },
  { name: "CSS" },
  { name: "HTML" },
  { name: "REACT" },
  { name: "REDUX" },
  { name: "ZUSTAND" },
  { name: "STYLED COMPONENTS" },
  { name: "TAILWIND CSS" },
  { name: "CSS MODULES" },
  { name: "JEST" },
]

export const projects: Project[] = [
  {
    name: "The Prayer Wall",
    description: "A full stack app for prayers",
    technologies: "NodeJS, React, Redux, Styled-Components, MongoDB",
    date: "2020",
    proudPart: "Infinite scroll without a library",
    image: "theprayerwall.png",
    projectLink: {
      url: "https://pwd-the-prayer-wall.herokuapp.com/",
      type: "URL",
      label: "The Prayer Wall",
    },
  },
  {
    name: "Study Chat",
    description: "A place to listen to music and chat if you'd like",
    technologies: "NodeJS, Express, React, React Providers, Socket.io",
    proudPart: "Socket.io, and how long it took me to build (not long)",
    image: "studychat.jpg",
    date: "2020",
    projectLink: {
      url: "https://pwd-study-chat.herokuapp.com/",
      type: "URL",
      label: "Study Chat",
    },
  },
  {
    name: "SydHelp",
    description: "A place for people to give and recieve help",
    technologies: "Same as the Prayer Wall plus Mapbox, Multer, DraftJS",
    proudPart: "Size and functionality",
    date: "Early 2021",
    image: "sydhelp.png",
    projectLink: {
      url: "https://pwd-sydhelp.herokuapp.com/",
      type: "URL",
      label: "SydHelp",
    },
  },
  {
    name: "Report Writer",
    description: "A tool for writing reports / repetitive text",
    technologies: "GraphQL, PostGres, React, Tailwind CSS",
    date: "Mid 2021",
    image: "rw.png",
    proudPart: "Technologies beneath it - first time using many of them",
    projectLink: {
      url: "https://pwd-report-writer.herokuapp.com/",
      type: "URL",
      label: "Report Writer",
    },
  },
]

export const education: Education[] = [
  {
    place: "Coding - Self Taught",
    time: "2019 - Pressent",
    paragraphs: [
      "Free Code Camp, Stephen Grider, Traversy Media, DevelopedByEd, Coding with Chaim",

      "Some projects built as part of courses includes an e-commerce site, a blog app and Electron desktop apps.",
    ],
  },
  {
    place: "The University of New South Wales",
    time: "2007 - 2010",
    paragraphs: [
      "Bachelor of Science (Mathematics) / Bachelor of Education",
      "Northern Beaches Christian School Future Teacher Scholarship",
      "Academic Achievement Award Scholarship",
    ],
  },
  {
    place: "Northern Beaches Christian School",
    time: "2001 - 2006",
    paragraphs: ["Graduated Valedictorian"],
  },
]

export const work: Work[] = [
  {
    place: "BirchNotes",
    time: "2022 - Present",
    paragraphs: ["TBA"],
  },
  {
    place: "The King's School",

    time: "2014 - Present",
    paragraphs: [
      "I began at Australia's oldest independent school - an all boys boarding school - as a Mathematics Teacher in 2014. The responsibilities for a teacher at King’s go beyond the classroom-extending to pastoral and sporting commitments-as teachers are expected to be involved in the life of the school and in raising the ‘entire boy’.",
      "In 2017 my wife and I picked up 80 new teenage boys as housemates as we moved into boarding, spending around a year and a half living at work.",
      "During this time I also began the role of Reserve Academic Database Coordinator, assisting with managing the schools database (MySQL), becoming familiar with both the user end (procedures, etc) and writing SQL.",
      "In 2018 and 2019 I stepped into the Data Analytics Coordinator role where I furthered skills from my previous role, and my responsibilities increased. These included writing SQL, pulling data to create reports in Tableau and advanced use of Google Sheets to analyse and organise data.",
      "During 2020 I was promoted to Operations and Data Analyst. This included timetabling (scheduling) the entire secondary school (1450 students and 180 staff) for their day to day classes, examinations and other events. Change was a constant, and organisation paramount. With COVID-19 this meant regularly rescheduling and re-rooming classes according to government regulations and the many internal restraints as well as keeping parents paying $40,000 in tuition a year happy. I relied heavily on Google Sheets and timetabling software to achieve a successful outcome.",
    ],
  },
  {
    place: "Northern Beaches Christian School",

    time: "2011 - 2013",
    paragraphs: [
      "“I teach high school math. I sell a product to a market that doesn’t want it, but is forced by law to buy it.” - Dan Meyer",
      "I would describe myself as scholarly and technical, so stepping into a people oriented job such as teaching was a (welcomed) challenge. As a young teacher straight from college I learned how to motivate high school students to love (or sometimes tolerate) mathematics.",
      "At Northern Beaches Christian School I was one of six Mathematics teachers and taught a load of 100 students per academic year. The school was focused on innovation and education which meant I was driven to challenge traditional methods through creativity and flexibility in my teaching approach. In addition I contributed in writing educational programs and student examinations.",
    ],
  },
]

// 2000 - 2010: Programmed Timber Supplies
// Working in the family timber business to pay my way through high school and college, I stacked a lot of wood... and I mean a lot!
// This job taught me a lot about people, ranging from those on day release from a local jail to near retired professionals-all much older than myself. I also learned the importance of applying yourself and the satisfaction that hard work brings.
