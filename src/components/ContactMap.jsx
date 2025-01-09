import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const ContactMap = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section - Contact Information */}
      <div className="w-full md:w-2/5 bg-[#1f1f35] text-white p-8 md:p-16 flex flex-col justify-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">CONTACT US</h1>
        
        <p className="text-gray-200 text-sm mb-8 md:mb-12">
          We appreciate your feedback, questions, and suggestions.
          Don't hesitate to get in touch with us using the contact details below.
          Our committed team is ready to assist you and will aim to respond to your message promptly.
        </p>

        <div className="space-y-6 md:space-y-8">
          {/* Address Section */}
          <div>
            <h2 className="text-indigo-400 text-base font-medium mb-2">ADDRESS</h2>
            <p className="text-sm">Redemption Academy</p>
            <p className="text-sm">No 7 College Road,</p>
            <p className="text-sm">Through Necco</p>
            <p className="text-sm">Mando, Kaduna State</p>
          </div>

          {/* Information Section */}
          <div>
            <h2 className="text-indigo-400 text-base font-medium mb-2">INFORMATION</h2>
            <p className="text-sm">For information or questions</p>
          </div>

          {/* Email Section */}
          <div>
            <h2 className="text-white text-sm mb-2">E-MAIL US</h2>
            <a href="mailto:redemptionacademyschools@gmail.com" 
               className="text-indigo-400 underline hover:underline text-base">
              redemptionacademyschools@gmail.com
            </a>
          </div>

          {/* Phone Section */}
          <div>
            <h2 className="text-indigo-400 text-sm mb-2">CALL OUR MAINLINE</h2>
            <p className="text-sm">+2347066688763</p>
          </div>

          {/* Office Hours Section */}
          <div>
            <h2 className="text-indigo-400 text-sm mb-2">OFFICE HOURS</h2>
            <div className="text-sm space-y-1">
              <p>While school is in session our</p>
              <p>staff offices are open from</p>
              <p className='text-indigo-400 text-lg font-semibold'>7:30 am - 4:00 pm</p>
              <p>During the summer our staff</p>
              <p>offices are open</p>
              <p className='text-indigo-400 text-lg font-semibold'>8:30 am - 3:30 pm</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-indigo-400 text-sm mb-4">FOLLOW US</h2>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/redemptionacademyschools/profilecard/?igsh=OTdvMmw3cXJ0NWpy" 
                 className="text-white hover:text-indigo-400 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/share/15RCBDgroV/?mibextid=wwXIfr" 
                 className="text-white hover:text-indigo-400 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Map */}
      <div className="w-full md:w-3/5 h-[400px] md:h-auto">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.9541010198122!2d7.405882704966164!3d10.582761691353484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b2ca59fc200513%3A0xfe01725508ac4969!2sRedemption%20Academy!5e0!3m2!1sen!2sng!4v1736332638058!5m2!1sen!2sng"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ContactMap;