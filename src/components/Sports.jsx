import React from 'react';

const Sports = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-black">Sports and Activities</h2>
          <div className="w-20 h-1 bg-[#2D1B6F] mb-10"></div>
          
          <p className="text-black leading-relaxed">
          At our school, sports and extracurricular activities play a vital role in fostering teamwork,
          resilience, and leadership. From competitive sports like basketball and soccer to recreational
          activities such as yoga and dance, we offer something for every student.
          Our programs emphasize discipline, sportsmanship, and personal growth, with dedicated coaches
          guiding students to unlock their full potential. Through tournaments, competitions, and friendly matches,
          students build confidence, friendships, and life skills that extend beyond the field.
          We don’t just aim for victories; we aim to build character, nurture talent, and inspire every
          student to strive for greatness—both individually and as a team.
          “Great players are not born; they are made through passion, practice, and perseverance.”
 
          </p>
          
        </div>

        {/* Right Column - Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Video Thumbnail */}
          <div className="col-span-2 relative">
            <img 
              src="/SportOne.png" 
              alt="Education video thumbnail" 
              className="w-full h-64 object-cover "
            />
          </div>
          
          {/* Bottom Images */}
          <div className="h-48">
            <img 
              src="/SportTwo.png" 
              alt="Students outdoors" 
              className="w-full h-full object-cover g"
            />
          </div>
          <div className="h-48">
            <img 
              src="/SportThree.png" 
              alt="Student learning" 
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;