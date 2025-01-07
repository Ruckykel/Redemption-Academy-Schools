import React from 'react';

const Mission = () => {
  return (
    <div className="bg-gray-100 w-full">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision Section */}
          <div className="text-left md:text-center">
            <h2 className="text-4xl font-bold mb-2 relative">
              <span className="relative inline-block pb-4 ">
                Our Mission
                <span className="absolute bottom-0 left-0 md:right-0 w-16 h-1 bg-[#2D1B6F]"></span>
              </span>
            </h2>
            <p className="text-black mt-6 leading-relaxed">
            Our mission is to nurture young minds into compassionate,
            confident, and competent individuals. We strive to provide
            a safe and inclusive environment where students are empowered
            to explore their potential, cultivate lifelong learning, and
            contribute meaningfully to the global community. Through innovation,
            integrity, and a commitment to excellence, we aim to inspire every
            student to lead with purpose and make a positive impact on the world.
            </p>
          </div>

          {/* Mission Section */}
          <div className="text-left md:text-center">
            <h2 className="text-4xl font-bold mb-2 relative">
              <span className="relative inline-block pb-4 ">
                Our Vision
                <span className="absolute bottom-0 left-0 md:right-0 w-16 h-1 bg-[#2D1B6F]"></span>
              </span>
            </h2>
            <p className="text-black mt-6 leading-relaxed">
            To be a beacon of educational excellence, fostering a generation
            of critical thinkers, creative problem-solvers, and empathetic leaders.
            We envision a future where every student is equipped with the skills, values,
            and resilience needed to thrive in a rapidly changing world, while embracing
            diversity and driving positive societal change.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;