"use client";

import {
  FaHtml5,
  FaCss3,
  // FaJs,
  FaReact,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiMysql, SiFirebase, SiDjango, SiFastapi, SiNodedotjs, SiGithub, SiPostman, SiTypescript } from "react-icons/si";


// about data

const about = {
  title: "About me",
  description:
    "Hi, I’m Awais Niaz, a passionate Full Stack Developer with a knack for building dynamic, user-focused web applications. With expertise in Python, Django, React, and JavaScript, I love transforming ideas into seamless digital experiences. My journey in coding is driven by curiosity and a commitment to crafting clean, scalable solutions. When I’m not coding, you’ll find me exploring new tech trends or sharing my knowledge as an aspiring educator in web development. Let’s create something amazing together!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Awais Niaz",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 335-220-4606 ",
    },
    {
      fieldName: "Experience",
      fieldValue: "02 Years",
    },
    {
      fieldName: "Email",
      fieldValue: "awaisniaz720@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: (
        <a
          href="https://www.linkedin.com/in/muhammad-hamza-a56b12300/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Awais Niaz
        </a>
      ),
    },
    {
      fieldName: "GitHub",
      fieldValue: (
        <a
          href="https://github.com/Awais68"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          AwaisNiaz68
        </a>
      ),
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avaliable",
    },
    {
      fieldName: "Languages",
      fieldValue: "English , Urdu",
    },
  ],
};

// experiences data
const experience = {
  icon: "/icons,badge.svg,cap.svg",
  title: "My Experience",
  description:
    "Passionate Full Stack Developer skilled in building dynamic, responsive web applications using React, Django, and Node.js. Adept at creating seamless front-end experiences and robust back-end APIs, with a focus on clean code, scalability, and user-centric design. Eager to deliver innovative solutions in collaborative, fast-paced environments.",
  items: [
    {
      company: "CodeAlpha",
      position: "Front-End Developer Intern",
      duration: "Summer 2025",
    },
    {
      company: "DigiSkills",
      position: "Freelancer",
      duration: "2020 - Present",
    },

    {
      company: "Private Institutes",
      position: "Teacher",
      duration: "2017 - 2020",
    },
  ],
};

// education data
const education = {
  icon: "/cv.png",
  title: "My Education",
  description:
    "I have not stopped learning cause  thoughts you can not complete your learning process.there is somthing always left to learn behind.so go on and get more.",
  item: [
    {
      instituion: "DIGISKILL by Virtual University",
      degree: "Freelancer",
      duration: "2023-2024",
    },
    {
      instituion: "DIGISKILL by Virtual University",
      degree: "Wordpress Developer",
      duration: "2023-2024",
    },
    {
      instituion: "Sindh University, Jamshoro",
      degree: "Master's in English Studies (MA ENGLISH)",
      duration: "2019 - 2021",
    },
    {
      instituion: "Sindh University, Jamshoro",
      degree: "Beachloar's In Science (BSc)",
      duration: "2017 - 2019",
    },
    {
      instituion: "NILT College of Science & Commerce",
      degree: "Intermediate ",
      duration: "2015 - 2017",
    },
    {
      instituion: "Korean Computer Academy ",
      degree: "Certificate in Information Technology",
      duration: "2013 ",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Technical skills are the specialized knowledge and expertise required to perform specific tasks and use specific tools and programs in real-world situations.",
  skillList: [
    {
      icon: <FaPython />,
      name: "Python"
    },
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },

    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <BsWordpress />,
      name: "Wordpress Developer",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <FaMobileScreenButton />,
      name: "React Native",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiFastapi />,
      name: "FastAPI",
    },
    {
      icon: <SiNodedotjs />,
      name: "NodeJs",
    },
    {
      icon: <SiGithub />,
      name: "Github",
    },
    {
      icon: <SiPostman />,
      name: "Postman Testing Tool",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { BsWordpress } from "react-icons/bs";
import { FaMobileScreenButton } from "react-icons/fa6";


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: .1, duration: 0.1, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full" >
              <div className="flex flex-col  gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold text-accent hover:underline">{experience.title}</h3>
                <p className="max-w-[600px] text/white/60 mx-auto xl:m-0 " >{experience.description}</p>
                <ScrollArea className="h-[400px]" >
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" >
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration} </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[10px] h-[10px] rounded-full bg-accent " ></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>

                        </li>
                      )
                    })}

                  </ul>
                </ScrollArea>

              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full" >
              <div className="flex flex-col  gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold text-accent hover:underline">{education.title}</h3>
                <p className="max-w-[600px] text/white/60 mx-auto xl:m-0 " >{education.description}</p>
                <ScrollArea className="h-[400px]" >
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]" >
                    {education.item.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration} </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[10px] h-[10px] rounded-full bg-accent " ></span>
                            <p className="text-white/60">{item.instituion}</p>
                          </div>

                        </li>
                      )
                    })}

                  </ul>
                </ScrollArea>

              </div>

            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full" >
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl text-bold text-accent hover:underline  ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize text-xl text-accent">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left" >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-accent hover:underline">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl hover:underline hover:text-accent">{item.fieldValue}</span>
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
  );
};

export default Resume;
