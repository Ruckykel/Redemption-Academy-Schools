import React from 'react';

const Cta = () => {
  return (
    <div className="px-11 pb-0 pt-11">
      <div className="flex flex-row items-center justify-center gap-4 max-w-5xl mx-auto">
        {/* Image container */}
        <div className="w-1/2 max-w-xs">
          <img 
            src="/Ctapic.png" 
            alt="Student" 
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        
        {/* Text content container */}
        <div className="w-1/2 max-w-xs flex flex-col items-start space-y-3">
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
             Join us at Redemption Academy. Together, we are shaping the future—one mind at a time.
          </p>
          
          <a href="/Contact Us">
              <button className="px-4 sm:px-6 py-2 bg-[#160C3B] text-white text-sm sm:text-base font-semibold hover:bg-indigo-800 transition-colors">
                 Contact
              </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;