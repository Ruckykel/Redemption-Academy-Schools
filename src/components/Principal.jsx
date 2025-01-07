import React from 'react';

const Principal = () => {
  return (
    <section className='bg-gray-100'>
      <div className="max-w-4xl mx-auto p-6 ">
      <h2 className="text-4xl font-bold mb-6 text-black">Principal's Message</h2>
      <div className="w-20 h-1 bg-[#2D1B6F] mb-10"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex-1 flex flex-col">
          {/* Image shown between title and message on small screens */}
          <div className="relative md:hidden mb-6">
            <div className="w-full h-80 relative">
              <img
                src="/PrincipalTwo.png"
                alt="Principal portrait"
                className="rounded object-cover w-full h-full"
              />
              <div className="absolute -bottom-2 -right-2 w-full h-full border-8 border-[#2D1B6F] -z-10"></div>
            </div>
          </div>

          <div className="text-black leading-relaxed space-y-4">
            <p>
              Dear Students, Parents, and Community Members,
            </p>
            <p>
              Welcome to our school—a place where dreams are nurtured, minds are inspired, and futures are built. Every day, I am honored to witness the incredible energy, creativity, and determination that define our students and staff.
            </p>
            <p>
              At the heart of our school is a commitment to providing a learning environment where every individual feels valued and supported. We encourage our students to embrace challenges, celebrate successes, and view failures as opportunities for growth. Education here is not just about academic achievement but also about building character, empathy, and resilience.
            </p>
            <p>
              Our talented team of educators works tirelessly to deliver a holistic curriculum that blends rigorous academics with enriching extracurricular activities. We believe in fostering curiosity, collaboration, and a love for lifelong learning in every student.
            </p>
            <p>
              Together, as a community, we have the power to shape a brighter future. Let us continue to support our children as they embark on this incredible journey of discovery and transformation.
            </p>
            <p>
              With gratitude and inspiration,<br />
              <span className='font-semibold uppercase'>Redemption Academy Schools</span>
            </p>
          </div>
        </div>

        {/* Image shown on medium and larger screens */}
        <div className="relative hidden md:block">
          <div className="w-100 h-100 relative">
            <img
              src="/Principal.png"
              alt="Principal portrait"
              className="rounded object-cover w-full h-full"
            />
            <div className="absolute -bottom-2 -right-2 w-full h-full border-8 border-[#2D1B6F] -z-10"></div>
          </div>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default Principal;