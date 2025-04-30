"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Call me",
    description: "(+92) 335-220-4606 ",
  },
  {
    icon: <FaEnvelope />,
    title: "Mail me",
    description: "awaisniaz720@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Home",
    description: "Korangi, KARACHI ",
  },
];

const Contact = () => {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (value: string) => {
    setSelectedService(value);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.1, ease: "easeInOut" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none ">
            <form
              action="https://formspree.io/f/mqakbkja"
              method="POST"
              className="flex flex-col gap-8 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl">
                Let&#39;s Work <span className="text-accent"> Together</span>
              </h3>
              <p className="text-white/60">
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input name="firstname" type="firstname" placeholder="Firstname" required />
                <Input name="lastname" type="lastname" placeholder="Lastname" required />
                <Input name="email" type="email" placeholder="Email Address" required />
                <Input name="phone" type="phone" placeholder="Phone Number" required />
              </div>
              {/* select */}
              <Select value={selectedService} onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="web_dev">Web Development</SelectItem>
                    <SelectItem value="ui_ux_design">React Developer</SelectItem>
                    <SelectItem value="logo_design">Django Developer</SelectItem>
                    <SelectItem value="nextjs_dev">Next.js Development</SelectItem>
                    <SelectItem value="python_dev">Python Development</SelectItem>
                    <SelectItem value="backend_dev">Backend Development (APIs, Databases)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type Your message here"
                name="message"
                required
              />
              {/* hidden field to submit selected service */}
              <input type="hidden" name="service" value={selectedService} />

              {/* btn */}
              <Button size="md" className="max-w-48">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60 text-2xl">{item.title}</p>
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

export default Contact;
