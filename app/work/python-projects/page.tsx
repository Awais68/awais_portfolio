"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";


const projects = [
  {
    num: "01",
    caterogy: "Data Analysis Application ",
    title: "Data Analysis Application",
    description:
      "The Streamlit data analysis application is a software tool designed to collect, process, visualize, and interpret data to help users uncover patterns, trends, and insights. It typically includes features for importing datasets, cleaning and transforming data, running statistical or machine learning models, and presenting results through charts, tables, or dashboards. These applications are widely used in fields like business, healthcare, finance, and research for informed decision-making..",
      stack: [{ name: "Python" }, { name: "Streamlit" }, ],
    image: "/assets/images/py2.png",
    live: "https://dataanalysisappasgrowthmind-01.streamlit.app/",
    github: "https://github.com/awais68/data_analysis_app_as_growth_mind/blob/main/app.py",
  },
  {
    num: "02",
    caterogy: "Calculator ",
    title: "BMI CALCULATOR APP",
    description:
      "A BMI (Body Mass Index) calculator is a simple tool that measures a person's body fat based on their height and weight. It calculates a numeric value (BMI) using the formula BMI = weight (kg) / height² (m²) The result helps classify a person as underweight, normal weight, overweight, or obese, offering a general indication of health related to body weight.",
    stack: [{ name: "Python" }, { name: "Streamlit" }, ],

    image: "/assets/images/py1.png",
    live: "https://bmicalculationapp.streamlit.app/",
    github: "https://github.com/awais68/bmi_calculator/blob/main/main.py",
  },
 
  {
    num: "03",
    caterogy: "Security Tool ",
    title: "Encryption And Decription System",
    description:
      "Encryption is the process of converting plain data into a coded format (ciphertext) to prevent unauthorized access. Decryption is the reverse process—converting the encrypted data back into its original, readable form using a key. Together, encryption and decryption protect sensitive information during storage or transmission...",
    stack: [{ name: "Python" }, { name: "Streamlit" }, ],

    image: "/assets/images/py3.png",
    live: "https://encryptions-data.streamlit.app/",
    github: "https://github.com/awais68/encryptions/blob/main/app.py",
  },
 
  {
    num: "04",
    caterogy: "Security Tool ",
    title: "Password Generator",
    description:
      "A password generator is a tool that creates strong, random passwords to enhance security. It typically allows users to customize password length and include a mix of uppercase letters, lowercase letters, numbers, and special characters. Using a password generator helps prevent easy-to-guess or reused passwords, reducing the risk of hacking or unauthorized access..",
    stack: [{ name: "Python" }, { name: "Streamlit" }, ],

    image: "/assets/images/py4.png",
    live: "https://password-generated.streamlit.app/",
    github: "https://github.com/awais68/password_generator/blob/main/main.py",
  },
 
  {
    num: "05",
    caterogy: "Python ",
    title: " UNIT CONVERTOR",
    description:
      "A unit converter is a tool that converts values from one measurement unit to another, such as from kilometers to miles, Celsius to Fahrenheit, or kilograms to pounds. It helps users quickly and accurately switch between different units used in science, engineering, or daily life..",
    stack: [{ name: "Python" }, { name: "Streamlit" },{name: "UV "} ],

    image: "/assets/images/py5.png",
    live: "https://unitconverterapppy.streamlit.app/",
    github: "https://github.com/awais68/unit_converter_streamlit/blob/main/main.py",
  },
 
  // {
  //   num: "06",
  //   caterogy: "Automation Tool",
  //   title: "Money Making Machine",
  //   description:
  //     "A unit converter is a tool that converts values from one measurement unit to another, such as from kilometers to miles, Celsius to Fahrenheit, or kilograms to pounds. It helps users quickly and accurately switch between different units used in science, engineering, or daily life...",
  //   stack: [{ name: "Python" }, { name: "Streamlit" },{name : "FastAPI"}, {name : "UV"} ],

  //   image: "/assets/images/py6.png",
  //   live: "https://q3p1datasweeper.streamlit.app/",
  //   github: "https://github.com/faryal16/Ramadan_Coding_Nights/tree/main/05_money-making-machine",
  // },
 
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: { realIndex: number }) => {
    // get current slide index
    const realIndex = swiper.realIndex;
    // update project state based on current slide index
    setProject(projects[realIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: .1, duration: 0.1, ease: "easeInOut" },
      }}
      className="min-h-[80vh flex flex-col justify-center py-12  xl:px-0]"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* outline num */}
              <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                {project.num}  
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.caterogy}project
              </h2>
              <p className="text-accent/70 text-3xl text-center underline">{project.title}</p>
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remover the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-lg">Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-lg">Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop= {true}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[400px] relative group  flex justify-center items-center rounded-[40px] bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full rounded-[40px] bg-black/10 z-10"></div>
                      {/* images */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className=" rounded-[40px] "
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorkSliderBtn
  containerStyles="flex gap-2 absolute right-0 bottom-[60px] xl:bottom-[70px] z-20 w-full justify-between xl:w-max xl:justify-none"
  btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
  iconStyles={undefined}
/>

            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
