"use client";

import { Description } from "@radix-ui/react-dialog";
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

// about Data

const about = {
  title: 'About me',
  Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam exercitationem unde esse numquam quas incidunt optio.",
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Islem Fortas',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+213) 6 99 99 80 15',
    },
    {
      fieldName: 'Experience',
      fieldValue: '+10 Years',
    },
    {
      fieldName: 'Skype',
      fieldValue: 'Islem Fortas',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Algerian',
    },
    {
      fieldName: 'Email',
      fieldValue: 'contact@islem-fortas.site',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'Arabic , English , French',
    },
  ]
};
// about Experience

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam exercitationem unde esse numquam quas incidunt optio.",
  items: [
    {
    company: "Esaboura",
    position: "Video Editor",
    duration: "2022 - Present", 
    },
    {
      company: "Esaboura",
      position: "Graphic Designer",
      duration: "2022 - Present", 
    },
    {
      company: "Esaboura",
      position: "Photo/Video-Grapher",
      duration: "2022 - Present", 
    },
    {
      company: "Esaboura",
      position: "Community Manager",
      duration: "2023 - Present", 
    },
    {
      company: "Esaboura",
      position: "Sales Marketing",
      duration: "2023 - Present", 
    },
    {
      company: "PharmaSetif",
      position: "Freelance Video Producer",
      duration: "11-2022 - 02-2023", 
    },
    {
      company: "MKTech",
      position: "Freelance UI/UX Designer",
      duration: "03-2023 - 08-2023", 
    },
    {
      company: "StartUP Click Med",
      position: "Freelance UI/UX Designer",
      duration: "01-2023 - 06-2024", 
    },
  ]
  };

  // Education Data
  const education = {
    icon: "/assets/resume/badge.svg",
    title: "My education",
    Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam exercitationem unde esse numquam quas incidunt optio.",
    items: [
      {
      institution: "Ferhat Abbas University",
      Degree: "Licence Degree Diploma in Computer Science",
      duration: "2017 - 2020", 
      },
      {
        institution: "Ferhat Abbas University",
        Degree: "Master Degree Diploma in Computer Science - Networking and Distributed Systems",
        duration: "2020 - 2022", 
      },
      {
        institution: "Esaboura",
        Degree: "Meta Ads - Facebook & Instagram",
        duration: "2024", 
      },
    ]
    };
const resume = () => {
  return (
    <div>resume page</div>
  )
};

export default resume;