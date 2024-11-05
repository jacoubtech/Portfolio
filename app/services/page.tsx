"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { title } from "process";
 
const services = [
  {
    num: '01',
    title: 'Web Developement',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' ,
    href: ""
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' ,
    href: ""
  },
  {
    num: 'Photo/Video-Graphy',
    title: 'Web Developement',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' ,
    href: ""
  },
  {
    num: '04',
    title: 'Video Editing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' ,
    href: ""
  },
]


import { motion

 } from "framer-motion";
const Services = () => {
  return (
    <section>
      <div className="container mx-auto">services page</div>
    </section>
  )
}

export default Services