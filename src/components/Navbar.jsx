import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/About Us' },
    { name: 'ADMISSIONS', href: '#' },
    { name: 'ALUMNI', href: '#' },
  ];

  const topNavItems = [
    { name: 'NEWS & EVENTS', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'CONTACT US', href: '/Contact Us' },
  ];

  return (
    <div className="w-full">
      <div className="bg-[#2D1B6F] text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-4">
            <div className="flex space-x-9">
              {topNavItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className="text-sm hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow">
        <div className="container">
          <div className="flex justify-between items-center py-3 px-12 sm:px-16">
            <div className="flex items-center">
              <a href="/">
                <img src={Logo} alt="Logo" className="w-64 hover:cursor-pointer" />
              </a>
            </div>

            <div className="hidden lg:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-[#D8110E] font-medium text-sm"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:text-[#D8110E] pl-8"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-black hover:text-[#D8110E] text-sm font-normal"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;