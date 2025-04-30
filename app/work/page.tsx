"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const WorkDisplayPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.1, duration: 0.1, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <motion.div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-white mb-8">
          Explore My Work and Skills
        </h1>
        <p className="text-xl text-white/70 mb-12">
          Here's a brief overview of the technologies I use and the projects I've created with them.
        </p>

        {/* Technology Sections */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {/* HTML, CSS, JS Section */}
          <Link href="/work/html-projects">
            <motion.div
              variants={card}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full cursor-pointer"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">HTML, CSS, & JavaScript</h2>
              <p className="text-white/60 mb-4">
                I build interactive and visually appealing websites using HTML, CSS, and JavaScript. I focus on responsive design, accessibility, and performance optimization.
              </p>
              <p className="text-accent font-semibold hover:underline">
                Explore HTML/CSS/JS Projects
              </p>
            </motion.div>
          </Link>

          {/* Next.js & Tailwind CSS Section */}
          <Link href="/work/nextjs-projects">
            <motion.div
              variants={card}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full cursor-pointer"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Next.js & Tailwind CSS</h2>
              <p className="text-white/60 mb-4">
                I build scalable web applications with Next.js, focusing on server-side rendering, dynamic routes, and API integrations. I use Tailwind CSS for fast, customizable UI development, enabling responsive and flexible designs.
              </p>
              <p className="text-accent font-semibold hover:underline">
                Explore Next.js & Tailwind CSS Projects
              </p>
            </motion.div>
          </Link>

          {/* Python Section */}
          <Link href="/work/python-projects">
            <motion.div
              variants={card}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col justify-between h-full cursor-pointer"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Python</h2>
              <p className="text-white/60 mb-4">
                I work with Python to build automation scripts, small apps, and backend functionalities. I am also learning how to work with frameworks like Streamlit, FastAPI, Pandas, and Twisted.
              </p>
              <p className="text-accent font-semibold hover:underline">
                Explore Python Projects
              </p>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WorkDisplayPage;
