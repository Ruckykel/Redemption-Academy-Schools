import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  // Navigation links with URLs
  const navigationLinks = [
    { title: 'About', url: '/About Us' },
    { title: 'News', url: '#' },
    { title: 'Events', url: '#' },
    { title: 'Admissions', url: '#' },
    { title: 'FAQ', url: '#' },
    { title: 'Alumni', url: '#' }
  ];

  return (
    <>
      <footer className="bg-[#160C3B] text-white py-24 px-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between md:gap-16 max-w-7xl">
          {/* School Info Section */}
          <div className="mb-8 md:mb-0">
            <img 
              src="/LogoFooter.png" 
              alt="School Logo" 
              className="h-16 w-auto mb-4"
            />
            <address className="not-italic">
              <p>Redemption Academy</p>
              <p>No 7 College Road,</p>
              <p>Through Necco</p>
              <p>Mando, Kaduna State</p>
            </address>
          </div>

          {/* Quick Navigation Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="font-bold text-lg mb-4">Quick Navigation</h3>
            <div className="grid grid-cols-2 gap-8">
              {navigationLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className="hover:text-blue-400 transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect with us</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/redemptionacademyschools/profilecard/?igsh=OTdvMmw3cXJ0NWpy" 
                  className="hover:text-blue-400 transition-colors"
                  aria-label="Instagram"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="https://www.facebook.com/share/15RCBDgroV/?mibextid=wwXIfr" 
                  className="hover:text-blue-400 transition-colors"
                  aria-label="Facebook"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Facebook size={24} />
                </a>
              </div>
              <div className="space-y-2">
                <a 
                  href="mailto:redemptionacademyschools@gmail.com" 
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Mail size={20} />
                  <span>redemptionacademyschools@gmail.com</span>
                </a>
                <a 
                  href="tel:+2347066688763" 
                  className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Phone size={20} />
                  <span>07066688763</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="bg-[#2D1B6F] text-center text-sm py-4 text-white">
        <p>&copy; {new Date().getFullYear()} Redemption Academy Schools. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;