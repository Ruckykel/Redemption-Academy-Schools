import React from 'react';

const Club = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4">
      {/* Main heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Clubs and Activities</h1>
        <div className="w-20 h-1 bg-[#2D1B6F] mx-auto"></div>
      </div>

      {/* First row - 2 columns (2/3 + 1/3) */}
      <div className="flex flex-col md:flex-row mb-4">
        {/* First column with image - takes 2/3 space */}
        <div className="md:w-2/3 relative">
          <img 
            src="/PictureOne.png" 
            alt="Student studying" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-0 left-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Fostering Growth Beyond the Classroom</h2>
            <p className="mb-4">At our school, we believe learning goes beyond the classroom walls. 
              Our vibrant clubs and activities offer students the chance to discover their passions,
              develop new skills, and form lifelong friendships.</p>
          </div>
        </div>
        
        {/* Second column - takes 1/3 space */}
        <div className="md:w-1/3 bg-[#2D1B6F] p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Unlock Creativity and Exploration</h2>
          <p className="mb-4">From the exhilarating world of technology in our STEM Club
            to unleashing creativity in the Art and Craft Society, there's something for everyone.
            Students can sharpen their voices in the Debate Club, explore the beauty of music in the Choir,
            or take the stage in our Drama Club.</p>
        </div>
      </div>

      {/* Second row - 3 equal columns */}
      <div className="flex flex-col md:flex-row">
        {/* First column with image */}
        <div className="md:w-1/3 relative">
          <img 
            src="/PictureTwo.png" 
            alt="Students in classroom" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-0 left-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Sports and Skill Development</h2>
            <p className="mb-4">For sports enthusiasts, we offer a range of options including soccer,
              basketball, and track and field.</p>
          </div>
        </div>

        {/* Middle column with red background */}
        <div className="md:w-1/3 bg-[#2D1B6F] p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">Empowering Students to Lead and Express</h2>
          <p className="mb-4">Our goal is to provide every student with a space to shine, grow, and contribute,
            whether it’s through leadership roles in the Student Council, volunteering in the Community Service Club,
            or expressing themselves in the Creative Writing Club.</p>
        </div>

        {/* Last column with image */}
        <div className="md:w-1/3 relative">
          <img 
            src="/PictureThree.png" 
            alt="Students together" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-0 left-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">Inspiring Collaboration and Excellence</h2>
            <p className="mb-4">Together, we inspire a spirit of collaboration, curiosity, and excellence.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Club;