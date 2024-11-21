"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+213) 699 99 80 15',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'contact@islem-fortas.site',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Setif Algeria',
  },
];

const contact = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = {
      firstname,
      lastname,
      email,
      phone,
      service,
      message,
    };
  
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const content = await response.json();
      console.log(content);
    } catch (error) {
      console.error("Fetch error: " );
    }
    // if (content.data && content.data.tableRange) {
    //   alert(content.data.tableRange);
    // } else {
    //   alert('Submission successful, but no table range returned.');
    // }
  
    setFirstname('');
    setLastname('');
    setEmail('');
    setPhone('');
    setService('');
    setMessage('');
  };

  return (
    <motion.section initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Let's work together! I'm ready to leverage my extensive skills in web design, UI/UX, and multimedia production to help achieve your project goals with innovative and effective digital solutions.</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input value={firstname} onChange={e => setFirstname(e.target.value)} type="text" placeholder="First Name" />
                <Input value={lastname} onChange={e => setLastname(e.target.value)} type="text" placeholder="Last Name" />
                <Input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email Address" />
                <Input value={phone} onChange={e => setPhone(e.target.value)} type="text" placeholder="Phone Number (WhatsApp)" />
              </div>
              <Select onValueChange={value => setService(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                    <SelectItem value="social-media-design">Social Media Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text area */}
              <Textarea value={message} className="h-[200px]" onChange={e => setMessage(e.target.value)} name="message" placeholder="Type Your message Here" />
              <Button size="sm" className="max-w-40" type="submit">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;