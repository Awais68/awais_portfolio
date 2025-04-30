import Herosection from '@/components/Herosection'
import Services from '@/app/services/page'
import React from 'react'
import Resume from './resume/page'
import WorkDisplayPage from './work/page'
import Contact from './contact/page'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <div>
      <Herosection />

      {/* Call the Services Section */}
      <div className="container mx-auto px-4 text-center">
        {/* Section Divider Line */}
        <div className="w-full mt-20 h-1 bg-accent/60 mx-auto mb-4 rounded-full" />

        {/* Heading */}
        <h1 className="text-4xl font-extrabold mt-20 text-white hover:text-accent  mb-4">Services I Provide</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-20">
          From frontend development to backend APIs and data tools, here's an overview of the services I offer.
        </p>

        {/* Your Services Component */}
        <Services />
      </div>
      {/* Call the resume Section */}
      <div className="container mx-auto px-4 text-center">
        {/* Section Divider Line */}
        <div className="w-full mt-20 h-1 bg-accent/60 mx-auto mb-4 rounded-full" />

        {/* Heading */}
        <h1 className="text-4xl font-extrabold mt-20 text-white hover:text-accent  mb-4">My Expertise & Experience</h1>
        <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-20">
        "With extensive experience, I specialize in creating scalable web apps, robust backends, and intuitive UIs—explore my resume to see the skills I've developed.
        </p>

        {/* Your Services Component */}
        <Resume />
      </div>
      {/* Call the Work Section */}
      <div className="container mx-auto px-4 text-center">
        {/* Section Divider Line */}
        <div className="w-full mt-20 h-1 bg-accent/60 mx-auto mb-4 rounded-full" />

        {/* Your Services Component */}
        <WorkDisplayPage />
      </div>
      {/* Call the Services Section */}
      <div className="container mx-auto px-4 text-center">
        {/* Section Divider Line */}
        <div className="w-full mt-20 h-1 bg-accent/60 mx-auto mb-4 rounded-full" />

        {/* Heading */}
        <h1 className="text-4xl font-extrabold mt-20 text-white hover:text-accent  mb-4">Get In Touch</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
        I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out to me, and I'll get back to you as soon as possible.
        </p>

        {/* Your Services Component */}
        <Contact />
      </div>
      
<Footer />
 

    </div>
  )
}

export default Home
