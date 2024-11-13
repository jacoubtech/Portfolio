"use client";

import { Description } from "@radix-ui/react-dialog";
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

// about Data

const about = {
  title: 'About me',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam exercitationem unde esse numquam quas incidunt optio.",
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
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam exercitationem unde esse numquam quas incidunt optio.",
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
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam exercitationem unde esse numquam quas incidunt optio.",
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
        Degree: "Diploma in Meta Ads - Facebook & Instagram",
        duration: "2024", 
      },
    ]
    };

    // Skills Data
  const skills = {
    title: "My skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam totam exercitationem unde esse numquam quas incidunt optio.",
    skillslist: [
      {
        icon: <FaHtml5 />,
        name: "html 5", 
      },
      {
        icon: <FaCss3 />,
        name: "css 3", 
      },
      {
        icon: <FaJs />,
        name: "javascript", 
      },
      {
        icon: <FaReact />,
        name: "react.js", 
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js", 
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css", 
      },
      {
        icon: <FaNodeJs />,
        name: "node.js", 
      },
      {
        icon: <FaFigma />,
        name: "figma", 
      },
    ]
    };

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { 
        Tooltip, 
        TooltipContent, 
        TooltipProvider, 
        TooltipTrigger 
      } from "@/components/ui/tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion

 } from "framer-motion";

const resume = () => {
  return (
    <motion.div initial={{opacity: 0}} 
    animate={{
      opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
  }}
  
  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <div className="container mx-auto">
      <Tabs defaultValue="experience" 
            className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About me</TabsTrigger>
        </TabsList>

        {/* content */}
        <div className="min-h-[70vh] w-full">
          {/* experience */}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[480px] overflow-y-auto scrollbar-hide">
                  <ul>
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="mb-4">
                          <span className="block text-sm text-gray-500">{item.duration}</span>
                          <h3 className="text-lg font-semibold">{item.position}</h3>
                          <div className="flex items-center mt-2">
                            {/* dot */}
                            <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                            <p className="text-sm text-gray-400">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
            </div>
          </TabsContent>
          {/* education */}
          <TabsContent value="education" className="w-full">
            education
          </TabsContent>
          {/* skills */}
          <TabsContent value="skills" className="w-full">
            skills
          </TabsContent>
          {/* about me */}
          <TabsContent value="about" className="w-full">
            about me
          </TabsContent>
        </div>
      </Tabs>
    </div>
    </motion.div>
  )
};

export default resume;