﻿
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "M. Huzaifa",
  title: "Hi all, I'm Huzaifa",
  subTitle: emoji("A passionate Data Analyst/ Software Engineer/ Chatbot Developer 🚀 having an experience of building Web and Desktop based applications with JavaScript / Reactjs / Nodejs / Java and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1ig6j5g5JgKBW_l4VYRrwB4meYLsHTsSl/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/HuzaifaKamran",
  linkedin: "https://www.linkedin.com/in/huzaifakamran/",
  gmail: "mohammadhuzaifa72@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/m.huzaifakamran",
  // Instagram and Twitter are also supported in the links!
  instagram: "https://www.instagram.com/huzaifa_kamran21"
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER AND CHATBOT DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Dashboards by using Tableau and PowerBI"),
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web applications"),
    emoji("⚡ Develop chatbots that helps to grow your business"),
    emoji("⚡ Integration of third party services such as Firebase/ Google Cloud Platform (GCP) / Google Sheets etc.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
   
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
 
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fab fa-Tableau"
    },
   
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Chatbot",
      progressPercentage: "85%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",  
      company: "TCS",
      companylogo: require("./assets/images/tcs.png"),
      date: "Nov 2019 – Feb 2020",
      desc: "I have completed internship in Information Technology Department at TCS Head Office, Karachi. Worked On:",
      descBullets: [
        "Website Development",
        "MVC Framework",
        "SQL"
      ]
    }
    , {
      role: "Data Analyst",   
      company: "Move Express And Logistics",
      companylogo: require("./assets/images/Logo.png"),
      date: "Oct 2020 – Present",
      desc: "Working as a Data Analyst and Technical Support Officer",
      descBullets: [
        "Tableau Visualization",
        "Mysql",
        "Tech Support"
      ]
    },
    // {
    //   role: "Software Engineer Intern",  
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.webp"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "HuzaifaKamran", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo.jpg"),
      link: "https://www.facebook.com/personageclothingbrand/"
    },
    
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Chatbot",
      subtitle: "Building conversational experience with Dialogflow.",
      image: require("./assets/images/coursera.png"),
      footerLink: [
        { name: "View Certificate", url: "https://www.coursera.org/account/accomplishments/certificate/RZTSVNSJCTC9" },
        // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        // { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "LEARN TO BUILD CHATBOTS",
      subtitle: "A crash course on how to create intelligent chatbots using Dialogflow.",
      image: require("./assets/images/udemy.png"),
      footerLink: [{ name: "View Certificate", url: "https://www.udemy.com/certificate/UC-DVBO6RV6/" }]
    },

    {
      title: "Data Science",
      subtitle: "Completed Certifcation from Coursera for a crash course on basic data science.",
      image: require("./assets/images/ibm.png"),
      footerLink: [
        { name: "View Certificate", url: "https://www.coursera.org/account/accomplishments/certificate/A9ETFH3X6JDZ?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate" },
        // { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    },
    
      {
        title: "Data Analysis",
        subtitle: "Certified Data Analyst is rigorous training scheme with 70+ hours content taught to professionals on flexible weekends.",
        image: require("./assets/images/DataAnalyst.jpg"),
        footerLink: [
          { name: "View Certificate", url: "https://media-exp1.licdn.com/dms/image/C4D2DAQEFN96Drs8Xkg/profile-treasury-image-shrink_1280_1280/0/1606320478042?e=1619992800&v=beta&t=OCfzN5yU4xjckvDxwvhvpdH_pfBlfx3XkBxg_VWYMlg" },
          
        ]
      },
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3133546506",
  email_address: "mohammadhuzaifa72@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
