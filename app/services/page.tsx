"use client";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full Stack Developer",
    description:
      "As a dedicated Full Stack Developer, I build seamless, end-to-end web applications using modern front-end frameworks like React and robust back-end technologies like Node.js and Django. My ability to integrate databases, APIs, and user-focused designs ensures scalable, high-performance solutions that meet client needs.",
    href: "",

  },
  {
    num: "02",
    title: "Front-end Developer!",
    description:
      "I’m a passionate Front-end Developer skilled in crafting responsive, user-friendly interfaces with HTML, CSS, JavaScript, and frameworks like React and Vue.js. My focus on clean code and intuitive design delivers engaging, accessible web experiences across devices...",
    href: "",
  },
  {
    num: "03",
    title: "Junior Web & App Developer",
    description:
      "As a Junior Web & App Developer, I bring enthusiasm and a growing expertise in building dynamic websites and mobile apps using HTML, CSS, JavaScript, and Python. Eager to learn and contribute, I create functional, user-centric solutions while honing my skills in collaborative environments.",
    href: "",
  },
  {
    num: "04",
    title: "Python Programmer",
    description:
      "As an Aspiring Python Developer, I’m driven to master Python’s power for web development, data analysis, and automation. With hands-on experience in Django and scripting, I’m eager to build innovative solutions while continuously expanding my technical expertise.",
    href: "",
  },
  {
    num: "05",
    title: "Django Specialist",
    description:
      "As a Django Specialist, I excel in building secure, scalable web applications using Django’s robust framework. My expertise in  RESTful APIs, and database integration enables me to deliver efficient, maintainable solutions tailored to business requirements.",
    href: "",
  },
  {
    num: "06",
    title: "Web Developer",
    description:
      "I’m a versatile Web Developer passionate about creating responsive, high-performance websites using HTML, CSS, JavaScript, and back-end technologies like Python and Node.js. My focus on clean code and user experience drives impactful digital solutions.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-[80vh] py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: .1, duration: 0.1, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex-col flex justify-center gap-6 group "
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-4xl font-extrabold text-outline text-transparent
             group-hover:text-outline-hover transition-all duration-500 "
                  >
                    {service.num}{" "}
                  </div>

                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white
             group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 "
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />{" "}
                  </Link>
                </div>
                {/* title */}
                <h2
                  className="text-[32px] font-bold leading-none text-white group-hover:text-accent
            transition-all duration-500 "
                >
                  {service.title}
                </h2>
                {/* decription */}
                <p className="text-justify h-52"> {service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
