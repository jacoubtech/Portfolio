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
  title: 'About me',
  Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam exercitationem unde esse numquam quas incidunt optio.",
  info: []
  };
const resume = () => {
  return (
    <div>resume page</div>
  )
};

export default resume;