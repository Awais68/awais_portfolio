"use client"
import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import Typewriter from "typewriter-effect";
import Link from "next/link"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Herosection = () => {
  return (
    <section className="h-full px-24 xl:py-8">
      <div className="container mx-auto  h-full">

        <div className="flex flex-col xl:flex-row items-center justify-between">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-4xl text-accent">ASPIRING WEB DEVELOPER!!</span>
            <br />
            <br />
            <h1 className="text-5xl ">
              Hello There Here&#39;s me <br /><br /> <span className="text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 text-transparent bg-clip-text">
                Awais Niaz
              </span>
            </h1>
            <br />

            <div className="flex items-center text-5xl gap-4 mb-4">A
              <h2 className="h3  text-accent">
                <Typewriter

                  options={{
                    strings: [
                      "Full Stack Developer!!",
                      "Front-end Developer!!",
                      "Junior Web & App Developer",
                      "Python Programmer!!",
                      "Aspiring Python Developer",
                      "Django Speacilist",
                      "Web Developer!!",
                    ],
                    autoStart: true,
                    loop: true,

                  }}
                />
              </h2>
            </div>

            <p className="max-w-[500px] mb-9 text-justify text-white/80" >Welcome to my portfolio!!
              As a passionate web developer, I thrive on transforming ideas into seamless, interactive digital experiences. With a blend of creativity and technical expertise, I craft responsive, user-centric websites that not only captivate but also perform flawlessly across devices. My journey in the ever-evolving world of web development is fueled by a commitment to innovation, clean code, and pushing the boundaries of what's possible online. Explore my work to see how I bring visions to life, one pixel at a time.
              {/* I&#39;ve developed a passion for delivering high-quality work */}
            </p>

            {/* button and socials */}
            <div className="flex items-center flex-col xl:flex-row gap-8">

              <Button variant="outline" size="lg" className="uppercase flex items-center gap-3">
                <a href="/cv.pdf"><span className="flex gap-4 hover:text-base">Download CV<FiDownload className="text-xl hover:text-2xl" /></span></a>
              </Button>
              <div className="mb-8 xl:mb-0 flex gap-8  ">

                <Link href="https://github.com/Awais68" className="Link">  <FaGithub /> </Link>
                <Link href="https://www.linkedin.com/in/muhammad-hamza-a56b12300/" className="Link"> <FaLinkedin /></Link>
                <Link href="https://www.instagram.com" className="Link"> <FaInstagram /></Link>
                <Link href="https://x.com/" className="Link"> <FaXTwitter /></Link>
              </div>
            </div>

          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Herosection