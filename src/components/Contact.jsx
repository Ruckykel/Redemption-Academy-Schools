import React from 'react'
import Navbar from './Navbar'
import ContactMap from './ContactMap'
import Footer from './Footer'

const Contact = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <ContactMap />
      <Footer />
    </div>
  )
}

export default Contact