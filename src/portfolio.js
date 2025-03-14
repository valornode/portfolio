/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Brayden",
  title: "Hi there, I'm Brayden",
  subTitle: emoji(
    "A passionate Network Engineer 🚀 with experience in building networks consisting of Fortinet, Extreme Networks, HP Aruba, Dell, UniFi and other solutions."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/valornode",
  linkedin: "https://www.linkedin.com/in/brayden-at-valor/",
  gmail: "contact@iambrayden.net",
//  gitlab: "https://gitlab.com/saadpasta",
//  facebook: "https://www.facebook.com/saad.pasta7",
//  medium: "https://medium.com/@saadpasta",
//  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Dedicated learner in the Network Engineering industry.",
  skills: [
    emoji(
      "⚡ Configure networks utilizing BGP, SDWAN, VPN, MPLS, and other protocols."
    ),
    emoji("⚡ Design, configure, deploy and manage both small and large networks, including routers, firewalls, switches, APs and servers."
    ),
    emoji(
      "⚡ Be the go-to guy for all networking related questions and concerns for multiple small and large clients."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
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
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Western Governor's University",
      logo: require("./assets/images/wgu.png"),
      subHeader: "Bachelor of Science in Network Engineering & Security",
      duration: "February 2025 - Current",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Furthering my education by transferring my Associate degree from SNHU."
      ]
    },
    {
      schoolName: "Southern New Hampshire Univeristy",
      logo: require("./assets/images/snhu.png"),
      subHeader: "Associate of Science in Cybersecurity",
      duration: "February 2022 - Jan 2025",
      desc: "",
      descBullets: ["Honor's Roll List for 2023"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "FortiGate Routing/Switching", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Network Design/Configuration",
      progressPercentage: "85%"
    },
    {
      Stack: "SD-WAN Design/Configuration",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Tier II Engineer",
      company: "Essential Network Technologies",
      companylogo: require("./assets/images/essential_network_technologies_logo.jpg"),
      date: "October 2024 – Present",
      desc: "Providing top-tier network management for our internal network and clients.",
      descBullets: [
        "Targeted my focus on learning our main products, Fortinet and Extreme.",
        "Designed and deployed successful large network build outs.",
        "Configured large SD-WAN networks spanning across multiple locations.",
        "The go to for escalations from Support Engineers for networking, VOIP, wireless and much more."
      ]
    },
    {
      role: "President",
      company: "Valor Holdings",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Started from the ground up, building my own cloud compute/datacenter company.",
      descBullets: [
        "Provided excellent customer service for nearly 750 clients.",
        "Implemented key systems for our infrastructure, including billing, management, remote access, and much more.",
        "Managed all of our datacenters, which included deploying networking equipment, servers for hypervisors and virtualization, and remote backup solutions.",
        "Managed our colocation facilities, which included maintaining privacy and safe management of client equipment, such as firewalls/routers, switches and servers.",
      ]
    }
    
//    {
//      role: "",
//      company: "Airbnb",
//      companylogo: require("./assets/images/airbnbLogo.png"),
//      date: "Jan 2015 – Sep 2015",
//      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Some of my top achievements and certifications that I have accomplished through my years of experience and learning.",

  achievementsCards: [
    {
      title: "Fortinet",
      subtitle:
        "5+ certifications completed through the Fortinet Training Institute",
      image: require("./assets/images/fortinet.png"),
      imageAlt: "Fortinet Logo",
      footerLink: [
        {
          name: "Certified Associate Cybersecurity",
          url: "https://www.credly.com/badges/81937534-fd17-45cb-9958-4af33107635e/linked_in_profile"
        },
        {
          name: "Certified Funddamentals Cybersecurity",
          url: "https://www.credly.com/badges/686478a5-97fb-4367-bdf7-c728a53b3cc2/linked_in_profile"
        },
        {
          name: "FortiGate 7.4 Operator",
          url: "https://www.credly.com/badges/f9a291fc-1557-40f3-99b7-8daaa8e33623/linked_in_profile"
        },
        {
          name: "Introduction to the Threat Landscape 2.0",
          url: "https://www.credly.com/badges/87e6b038-29ae-4493-8ddd-a7b8f7480748/linked_in_profile"
        },
                {
          name: "FortiGate 7.4 Administrator",
          url: ""
        },
        {
          name: "FortiManager 7.4 Administrator",
          url: ""
        },
        {
          name: "FortiAnalyzer 7.4 Analyst",
          url: ""
        },
        {
          name: "Azure Cloud Security 7.4 Administrator",
          url: ""
        }
      ]
    },
    {
      title: "Extreme Networks",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/extreme.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certified Associate - Extreme Fabric Connect",
          url: "https://www.credly.com/badges/5a6537c5-fe12-4984-a136-4316def1828c/linked_in_profile"
        },
        {
          name: "Certified Associate - Extreme Switching",
          url: "https://www.credly.com/badges/cb07434e-5b8c-485c-914b-fe0ac940342c/linked_in_profile"
        },
        {
          name: "Certified Associate - ExtremeCloud IQ",
          url: "https://www.credly.com/badges/2ff8a1e0-e5ad-4d41-a248-e1e29b449960/linked_in_profile"
        },
        {
          name: "Certified Associate - Site Engine",
          url: "https://www.credly.com/badges/60922aa8-4d68-48a7-bb68-db2e0a7c42ae/linked_in_profile"
        },
       {
          name: "Certified Associate - ExtremeControl",
          url: "https://www.credly.com/badges/548252bb-3d6c-4824-8420-c25850fcbde0/linked_in_profile"
        },
        {
          name: "Certified Associate - Network Security Basics",
          url: "https://www.credly.com/badges/9c893954-b8dc-43ad-9787-9048d541bcb7/linked_in_profile"
        },
        {
          name: "Certified Associate - Solutions Design",
          url: "https://www.credly.com/badges/33a76e1c-8fef-405d-b3f8-0f7fbb9bf40a/linked_in_profile"
        },
        {
          name: "Networks Associate - Building Scalable and Mission Critical Networks",
          url: "https://www.credly.com/badges/0ea9d5a2-bb08-49fd-afe8-e1b957f26c9f/linked_in_profile"
        },
        {
          name: "Networks Associate - Building Secure and Robust Wireless Networks",
          url: "https://www.credly.com/badges/c561e40d-e934-411e-ab27-212a08dda1f7/linked_in_profile"
        },
       {
          name: "Networks Associate - Introduction to Future Networking",
          url: "https://www.credly.com/badges/7572c7e4-b5cb-4977-b1cb-39006bc514aa/linked_in_profile"
        }        
        
      ]
    },

    {
      title: "Sophia Learning",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/sophia.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Introduction to Networking", url: "https://www.credly.com/badges/29f25374-0553-4426-b145-2e18bdac17ed/linked_in_profile"},
        {
          name: "Introduction to Information Technology",
          url: "https://www.credly.com/badges/fa6d958a-4baf-411c-af3b-b2160a88d170/linked_in_profile"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "contact@iambrayden.net"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
