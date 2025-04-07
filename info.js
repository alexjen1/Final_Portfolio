let info = {
  name: "Alexandreate Jenedick Naynes",
  logo_name: "AJN",
  flat_picture: require("./src/assets/image.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I’m a Bachelor of Science in Computer Science student at Colegio Dela Ciudad De Tayabas with a strong passion for Software Development, Web Technologies, and Database Management. I thrive in dynamic environments, continuously refining my skills and staying up-to-date with the latest technologies. <br><br>My experience spans backend development with Directus, frontend development with Vue.js, and database management using Laravel and Firebase. I’m highly detail-oriented and love problem-solving, ensuring efficiency in every project I work on. <br><br> I’m always eager to take on new challenges and exciting opportunities—let’s build something amazing together! ",
  links: {
    facebook: "https://www.facebook.com/alexandreatejenedick.naynes.9",
    github: "https://github.com/alexjen1",
    angellist: "https://angel.co/u/hrishikesh-paul",
    resume:
      "https://github.com/alexjen1/personal-portfolio/blob/master/Alexandreate_Jenedick_Naynes_Resume%20(1).pdf"
  },
  education: [
    {
      name: "Colegio Dela Ciudad De Tayabas",
      place: "Philippines",
      date: "Sept, 2021 - Present",
      degree: "Bachelor of Science in Computer Science",
      gpa: "N/A",
      description: "Currently pursuing my Bachelor's degree in Computer Science, focusing on software development, database management, and web technologies.",
      skills: [
        "Software Development",
        "Database Management",
        "Web Development",
        "Vue.js",
        "Laravel",
        "Directus",
        "PHP",
        "JavaScript",
        "Problem Solving"
      ]
    }    
  ],
  experience: [
    {
      name: "Codefest 2024: Hack Your Way to Innovation",
      place: "Philippines",
      date: "2024 ",
      position: "Participant",
      description: "Participated in the Codefest 2024 hackathon organized by OpeniT Philippines, focusing on innovative solutions in technology and software development.",
      skills: [
        "Hackathon Development",
        "Problem Solving",
        "Collaboration",
        "Rapid Prototyping",
        "Software Engineering"
      ]
    },    
    {
      name: "E-Organic: A Digital Platform for Sustainable Agriculture",
      place: "Colegio Dela Ciudad De Tayabas, Philippines",
      date: "2024",
      position: "Founder & Prototype Developer",
      description: "Designed and developed a prototype for E-Organic, a platform focused on promoting sustainable and organic farming practices. The prototype connects farmers with resources for organic farming, offering tools for crop tracking, farm activity management, and access to market opportunities for organic produce.",
      skills: [
        "Prototype Development",
        "Web Design",
        "Figma",
        "Sustainable Agriculture",
        "User Experience Design",
        "Problem Solving",
        "Project Management"
      ]
    },    
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Python",
        "PHP",
        "Javascript",
        "TypeScript",
        "C++",
      ],
      icon: "fa fa-code"
    },
    {
      title: "web technologies",
      info: ["Vue", "React", "Node", "Laravel", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: [ "MySQL", "NoSQL", "Directus"],
      icon: "fa fa-database"
    },
    {
      title: "design",
      info: [ "Photoshop", "Figma"],
      icon: "fa fa-pencil-square-o"
    },
  ],
  portfolio: [
    {
      name: "SMARTLANE:",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/1.jpg")
        },
        {
          img: require("./src/assets/portfolio/msr/5.jpg")
        },
        {
          img: require("./src/assets/portfolio/msr/2.jpg")
        },
        {
          img: require("./src/assets/portfolio/msr/3.jpg")
        },
        {
          img: require("./src/assets/portfolio/msr/4.jpg")
        },
      ],
      technologies: ["Native PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      category: "Software Engineering Project",
      date: "2023 - 2024",
      github:
        "https://github.com/alexjen1",
      visit: "https://github.com/alexjen1",
      description:
        "Students can log in using their student IDs to browse books, while librarians manage inventory and student records. A QR code system tracks library visits, and borrowing/returning is automated through ID and barcode scanning. Staff can also update clearance dates and process renewals for students. "
    },
    {
      name: "ProFarmer:",
      pictures: [
        {
          img: require("./src/assets/portfolio/noq/1.png")
        },
        {
          img: require("./src/assets/portfolio/noq/2.png")
        },
        {
          img: require("./src/assets/portfolio/noq/3.png")
        },
        {
          img: require("./src/assets/portfolio/noq/4.png")
        },
        {
          img: require("./src/assets/portfolio/noq/5.png")
        }
      ],
      technologies: ["Node", "Vue", "JavaScript ", "SQL"],
      category: "Website",
      date: "Sep, 2019 - Dec  , 2019",
      github: "https://github.com/alexjen1",
      visit: "https://github.com/alexjen1",
      description:
        "The system is built with a Vue.js frontend and a Directus backend, featuring a dashboard with visual analytics through charts and graphs. It provides complete CRUD functionality for managing farmer profiles, along with search and filtering capabilities. Customizable reports can be generated from selected data tables, and administrative actions are tracked with a notification system. Additionally, the system supports image/ID uploads, PDF exports, and bulk operations for enhanced functionality."
    },
    // {
    //   name: "POST",
    //   pictures: [
    //     {
    //       img: require("./src/assets/portfolio/post/one.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/post/two.png")
    //     }
    //   ],
    //   technologies: [
    //     "Markov Models",
    //     "Python",
    //     "Artificial Intelligence",
    //     "Vue",
    //     "Heroku"
    //   ],
    //   category: "Algorithm",
    //   github: "https://github.com/hrishikeshpaul/pos-tagger",
    //   date: "Oct, 2019 - Nov, 2019",
    //   visit: "https://post-client.herokuapp.com/",
    //   description:
    //     "Post is a simple algorithm that was developed to tagging a word corresponding to its part of speech. The algorithm makes of a probabilisitic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling."
    // },
    // {
    //   name: "Suicide Analyzer",
    //   pictures: [
    //     {
    //       img: require("./src/assets/portfolio/suicide/suicide-analyzer.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/suicide/suicide2-original.png")
    //     }
    //   ],
    //   technologies: ["Node", "Angular", "Express", "Leaflet", "Pandas"],
    //   category: "Website",
    //   date: "Oct, 2018 - Nov, 2018",
    //   github: "https://github.com/hrishikeshpaul/whodata",
    //   visit: "https://skylarktiral.herokuapp.com/",
    //   description:
    //     "This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO. The application consists of a Leaflet map that colors every nation, based on the number of suicides that have been committed in that country, for that year. It provides us with the capability to select the data as well as the continent."
    // },
    // {
    //   name: "Sentiment Analyzer",
    //   pictures: [
    //     {
    //       img: require("./src/assets/portfolio/smit/one.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/smit/two.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/smit/three.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/smit/four.png")
    //     }
    //   ],
    //   technologies: ["LSTM", "Keras", "Angular", "Tweepy", "Heroku", "Python"],
    //   category: "Alogrithm",
    //   date: "Feb, 2018 - Apr  , 2018",
    //   github: "https://github.com/hrishikeshpaul/sih",
    //   visit: "https://angel.co/projects/1009777-sentiment-analysis",
    //   description:
    //     "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
    // },
    // {
    //   name: "Clumpr",
    //   pictures: [
    //     {
    //       img: require("./src/assets/portfolio/clumpr/logo.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/clumpr/one.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/clumpr/two.png")
    //     }
    //   ],
    //   technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
    //   category: "Web App",
    //   github: "https://github.com/hrishikeshpaul/clumpr",
    //   date: "Sep, 2017 - Nov, 2017",
    //   visit: "https://github.com/hrishikeshpaul/clumpr",
    //   description:
    //     'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    // },
    {
      name: "BookIt:",
      pictures: [
        {
          img: require("./src/assets/portfolio/nc/1.png")
        },
        {
          img: require("./src/assets/portfolio/nc/2.png")
        },
        {
          img: require("./src/assets/portfolio/nc/3.png")
        },
        {
          img: require("./src/assets/portfolio/nc/4.png")
        },
      ],
      technologies: ["Node", "Vue", "JavaScript ", "SQL"],
      category: "Website",
      github: "https://github.com/alexjen1",
      date: "2025",
      visit: "https://github.com/alexjen1",
      description:
        "The BookIt Project is a web-based application designed to streamline the process of renting bed spaces at SLSU Tayabas. It allows users to browse available bed spaces, make reservations, and manage bookings through a user-friendly platform. The system aims to simplify the rental process for students and staff, ensuring a seamless experience for both tenants and administrators."
    }
  ],
  portfolio_design: [
    {
      name: "BookIt",
      title: "BookIt - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/coursera1/1.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/coursera1/2.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/coursera1/3.png"),
          title: "Mockups 2"
        },
        {
          img: require("./src/assets/designs/coursera1/4.png"),
          title: "App Elements"
        }
      ],
      technologies: ["Photoshop", "Figma"],
      category: "Visual Design",
      github: "",
      date: "2025",
      visit: "",
      description:
        "The BookIt Project is a web-based platform designed to simplify the process of renting bed spaces at SLSU Tayabas. Students and staff can easily browse available bed spaces, view details, and make reservations through an intuitive interface. The system allows users to manage their bookings, check availability in real-time, and receive notifications for booking confirmations. Administrators can efficiently manage the inventory of bed spaces, track reservations, and handle payment transactions. By automating the booking process, BookIt provides a seamless and efficient solution for bed space rentals at SLSU Tayabas."
    },
    // {
    //   name: "Pantree",
    //   title: "Pantree - Mockup Design",
    //   pictures: [
    //     {
    //       img: require("./src/assets/designs/pantree/MoodBoard.png"),
    //       title: "Moodboard"
    //     },
    //     {
    //       img: require("./src/assets/designs/pantree/1.png"),
    //       title: "Mockups 1"
    //     },
    //     {
    //       img: require("./src/assets/designs/pantree/2.png"),
    //       title: "Mockups 2"
    //     }
    //   ],
    //   technologies: ["XD", "Illustrator"],
    //   category: "Visual Design",
    //   github: "",
    //   date: "May, 2020 - July, 2020",
    //   visit: "",
    //   description:
    //     "Pantree is a recipiece finding and recommending application. It is often the case that you have run to your closest grocery store just to pick up one item that is missing in your kitchen. Pantree keeps a track of all your ingredients, and suggests recipes based on your meal preferences and past recipes. <br/><br/> The goal of the interface is to keep it similar to various recipe/food apps to reduce the learning required by the user, but also provide a smooth interface for users to seemlessly browse through recipes and ingredients."
    // },
    // {
    //   name: "Bunder",
    //   title: "Bunder - MVP Proposal",
    //   pictures: [
    //     {
    //       img: require("./src/assets/designs/bunder/Moodboard.png"),
    //       title: "Moodboard"
    //     },
    //     {
    //       img: require("./src/assets/designs/bunder/Mockup 1.png"),
    //       title: "Mockup 1"
    //     },
    //     {
    //       img: require("./src/assets/designs/bunder/Mockup 2.png"),
    //       title: "Mockup 2"
    //     },
    //     {
    //       img: require("./src/assets/designs/bunder/Mockup 3.png"),
    //       title: "Mockup 3"
    //     },
    //     {
    //       img: require("./src/assets/designs/bunder/Market Research 1.png"),
    //       title: "Market Research 1"
    //     },
    //     {
    //       img: require("./src/assets/designs/bunder/Market Research 2.png"),
    //       title: "Market Research 2"
    //     }
    //   ],
    //   technologies: ["XD", "Illustrator"],
    //   category: "Visual Design",
    //   github: "",
    //   date: "May, 2020 - July, 2020",
    //   visit: "",
    //   description:
    //     "Bunder is an intuitive web platform for micro-communities to share sensitive data with privacy within the community and allow engagement amongst them. Our aim is two-fold - Co-existing and Collaboration. The former is executed by providing a platform for communities that are geographically positioned in the same proximity (Housing societies, Dorms, Apartment Complexes) to have and share data (exact apartment addresses, phone number, apartment housing rules, individuals tested positive for COVID-19) in an exclusive platform. The latter is to give these people in the community the ability to carry out a task you are physically or remotely unable to do; with dignity and ease."
    // }
  ],
  // recommendations: [
  //   {
  //     title:
  //       "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
  //     author: "Ushanas Shastri",
  //     position: "CTO",
  //     company: "Viteos Capital Market Services",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
  //     author: "Anil Dukkipatty",
  //     position: "CTO",
  //     company: "Elemential Labs",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
  //     author: "Chintan Shah",
  //     position: "Director",
  //     company: "Hridayam Soft Solution",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
  //     author: "Mrinal Pai",
  //     position: "Co-Founder & Director",
  //     company: "Skylark Drones",
  //     location: "Bangalore"
  //   }
  // ]
};

export default info;
