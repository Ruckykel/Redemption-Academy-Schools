import React from 'react';

const SchoolAbout = () => {
  return (
    <section className='bg-[#f1eaff]'>
        <div className="container mx-auto px-11 py-12 max-w-7xl">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
        <div className="w-full lg:w-1/2 relative">
          <div className="relative  overflow-hidden  p-2">
            <img 
              src="/SchoolOne.png"
              alt="School gathering"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold text-black">Our Vision and Commitment</h2>
          <p className=" text-gray-700 leading-relaxed">
             At Redemption Academy, our vision is to foster a generation of critical thinkers,
             creative problem-solvers, and empathetic leaders. We believe that education is the foundation for transformation,
             and we are dedicated to equipping our students with the skills, values,
             and resilience needed to thrive in a rapidly evolving global landscape.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold text-black">A Holistic Educational Experience</h2>
          <p className=" text-gray-700 leading-relaxed">
            We blend academic rigor with innovative teaching methods to create a well-rounded educational experience.
            Our curriculum inspires curiosity and encourages lifelong learning, while our vibrant extracurricular programs—spanning sports,
            arts, STEM, and leadership initiatives—help every student discover and nurture their unique talents.
          </p>
          <p>
            As a trailblazer in education in Kaduna, we take pride in our state-of-the-art facilities, dedicated faculty,
            and inclusive environment where diversity is celebrated. Beyond traditional academics, we instill integrity,
            compassion, and a sense of responsibility in every student, ensuring they graduate not just as scholars,
            but as future leaders committed to positive societal change.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <div className="relative overflow-hidden  p-2">
            <img 
              src="/SchoolTwo.png"
              alt="School gathering"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default SchoolAbout;