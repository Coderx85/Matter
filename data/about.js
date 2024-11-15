import { title } from "process"
import { FaGithub, FaLinkedin, FaReddit, FaTwitter, FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa"

export const aboutData = {
  title: 'About Me',
  description: 'I have a B-Tech in Computer Science (2021-25) and Intermediate (2019-21).',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Priyanshu'
    },
    {
      fieldName: 'Phone',
      fieldValue: '7071915785'
    },
    {
      fieldName: 'Email',
      fieldValue: 'work.priyanshu085@gmail.com'
    },
    {
      fieldName: 'Location',
      fieldValue: 'India'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Hindi'
    },
    {
      fieldName: 'Hobbies',
      fieldValue: 'Coding, Reading'
    },  
    {
      fieldName: 'Interests',
      fieldValue: 'Data Science, AI'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    }
  ]
}

export const experienceData = {
  title: 'experience',
  description: 'I have worked as a web developer at XYZ company for 2 years.',
  items: [
    {
      id: 1,
      title: "Frontend Web Intern",
      company: "JarGoan",
      duration: "05/2024 - 06/2024",
      description: "Improved platform usability by 20.6%, increased user engagement by 26.53%, and led UI design initiatives.",
    },
    {
      id: 2,
      title: "AI Intern",
      company: "Tublian",
      duration: "04/2024 - 06/2024",
      description: "Enhanced AI proficiency, crafted a chatbot increasing user interaction by 50%, and actively participated in AI sessions.",
    },
    {
      id: 3,
      title: "Open Source Contributor",
      company: "Tubalian",
      duration: "09/2023 - 11/2023",
      description: "Outperformed 91% of users, engaged in AI challenges, and enhanced AI technology proficiency by 30%.", 
    },
    {
      id: 4,
      title: "Open Source Contributor",
      company: "Hacktoberfest 2023",
      duration: "09/2023 - 10/2023",
      description: "Contributed 4 PRs accepted in open source projects, collaborated with global developers, improving community engagement.",
    }
  ]
}

export const educationData = {
  title: 'education',
  description: 'I have a B-Tech in Computer Science (2021-25) and Intermediate (2019-21).',
  items: [
    {
      title: 'B-Tech Computer Science',
      duration: '2021-25',
    },
    {
      title: 'Intermediate',
      duration: '2019-21',
    }
  ]
}
  
export const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description: "Create responsive and user-friendly interfaces, ensuring optimal performance and user experience.",
  },
  {
    num: "02",
    title: "Backend Development and Database Management",
    description: "Develop robust backend systems to support your web applications and services.",
  },
  {
    num: "03",
    title: "DevOps Implementation",
    description: "I can help you rank your website on the first page of Google.",
  },
  {
    num: "04",
    title: "UI/UX Design",
    description: "Lead UI design initiatives to enhance platform usability and user satisfaction.",
  }
]

export const contactInfo = [
  {
    title: 'Email',
    description: 'work.priyanshu085@gmail.com',
    icon: <FaEnvelope />
  },
  {
    title: 'Phone',
    description: '(+91) 707 191 5785',
    icon: <FaPhone />
  },
  {
    title: 'Location',
    description: 'New Delhi, India',
    icon: <FaLocationArrow />
  },
  {
    title: 'LinkedIn',
    description: 'coderx85',
    icon: <FaLinkedin />
  }
]

export const socialLinks = [
  {
    icon: <FaGithub />,
    title: 'GitHub',
    href: 'https://github.com/Coderx85'
  },
  {
    icon: <FaTwitter />,
    tittle: 'Twitter',
    href: 'https://x.com/PriyanshuX085'
  },
  {
    icon: <FaReddit />,
    title: 'Reddit',
    href: 'https://reddit.com/Priyanhu085'
  },
  {
    icon: <FaLinkedin />,
    tittle: 'Linkedin',
    href: 'https://linkedin.com/in/Priyanshu085'
  }
]