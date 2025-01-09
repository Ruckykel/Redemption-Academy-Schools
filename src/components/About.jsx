import React from 'react'
import AboutHero from './AboutHero'
import Navbar from './Navbar'
import Footer from './Footer'
import Achievement from './Achievement'
import SchoolAbout from './SchoolAbout'
import Cta from './Cta'

const About = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <AboutHero />
      <Achievement />
      <SchoolAbout />
      <Cta />
      <Footer />
    </div>
  )
}

export default About