"use client";

import { Description } from "@radix-ui/react-dialog";
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPhotoVideo, FaEdit, FaJava, FaCamera, FaDev} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

// about Data

const about = {
  title: 'About me',
  description: "I am a multifaceted professional with a strong educational background in computer science and networking, enhanced by specialized skills in digital media and advertising. My experience spans web design, front-end development, UI/UX design, and multimedia production, making me proficient in delivering comprehensive digital solutions.",
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
      fieldName: 'LinkedIn',
      fieldValue: 'Fortas Nour El Islem Yaakoub',
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
  description: "With years of expertise in digital media and technology, I am a seasoned professional skilled in web design, front-end development, UI/UX design, and multimedia production, including photography, videography, and video editing.",
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
    title: "My Education",
    description: "I hold a Licence Diploma in Computer Science and a Master Diploma in Networking and Distributed Systems from Ferhat Abbas University, complemented by a Diploma in Meta Ads for Facebook & Instagram from Esaboura.",
    items: [
      {
      institution: "Ferhat Abbas University",
      Degree: "Licence Diploma in Computer Science",
      duration: "2017 - 2020", 
      },
      {
        institution: "Ferhat Abbas University",
        Degree: "Master Diploma in Networking and Distributed Systems",
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
    description: "I possess a robust skill set that includes web design, front-end development, UI/UX design, multimedia production (photography, videography, video editing), networking, and expertise in Meta advertising platforms.",
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
        icon: <FaJava />,
        name: "Java", 
      },
      {
        icon: <FaFigma />,
        name: "figma", 
      },
      {
        icon: <FaPhotoVideo />,
        name: "Video Editing-Adobe Premiere", 
      },
      {
        icon: <FaEdit />,
        name: "Graphic Design-Adobe photoshop",  
      },
      {
        icon: <FaCamera />,
        name: "Photo/Video Graphy", 
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
                <ScrollArea className="h-[400px] overflow-y-auto scrollbar-hide">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="block text-sm text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-sm text-white/60 ">{item.company}</p>
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
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px] overflow-y-auto scrollbar-hide">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="block text-sm text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.Degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="text-sm text-white/60 ">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
            </div>
          </TabsContent>
          {/* skills */}
          <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {skills.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillslist.map((skill, index)=>{
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center" >
                              <div className="text-6xl hover:text-accent
                              transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </TabsContent>
          {/* about me */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item, index)=>{
                        return (
                          <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                            <span className="text-white/60">{item.fieldName}</span>
                            <span className="text-xl">{item.fieldValue}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
    </motion.div>
  )
};

export default resume;