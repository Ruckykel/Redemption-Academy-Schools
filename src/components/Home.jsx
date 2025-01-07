import React from 'react'
import Navbar from './Navbar'
import HomeHero from './HomeHero'
import Mission from './Mission'
import Inspiration from './Inspiration'
import Club from './Club'
import Principal from './Principal'
import Sports from './Sports'
import Footer from './Footer'

const Home = () => {
    return (
        <div className='overflow-x-hidden min-h-screen flex flex-col'>
          <Navbar />
          <HomeHero />
          <Mission />
          <Inspiration />
          <Club />
          <Principal />
          <Sports />
          <Footer />
        </div>
      )
}

export default Home