import React from 'react';

const AboutHero = () => {
  return (
    <div className="w-full ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row w-full">
          {/* Image Section - Appears first on mobile */}
          <div className="w-full md:w-1/2 min-h-[400px] md:min-h-full order-1 md:order-2">
            <div className="h-full w-full relative">
              <img
                src="/AboutPic.png"
                alt="Students at school"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section - Appears second on mobile */}
          <div className="w-full md:w-1/2 bg-blue-50 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
            <div className="md:px-11 lg:px-11">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                About
                <span className="block">Our School</span>
              </h1>
              <p className="text-black leading-relaxed ">
                 Welcome to Redemption Academy, a premier educational institution in Kaduna,
                 Nigeria, where we are redefining the standards of academic excellence and holistic development.
                 Guided by our mission to nurture compassionate, confident, and competent individuals,
                 we provide a dynamic learning environment that empowers students to achieve their fullest potential
                 and make meaningful contributions to the world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;