import React from 'react';

const HomeHero = () => {
  return (
    <section className="relative h-[70vh] sm:h-[83vh]  bg-cover bg-center" style={{ backgroundImage: 'url(/RasStudents.png)' }}>
      <div className="absolute inset-0 bg-black opacity-15"></div>
      <div className="relative z-10 px-6 py-16 mx-auto max-w-7xl">
        <div className="flex flex-col  justify-start mt-28">
          {/* Header */}
          <div>
            <p className="text-white text-xl sm:text-2xl mb-2">REDEMPTION ACADEMY SCHOOLS</p>
            <h1 className="text-white text-6xl sm:text-7xl font-serif">
              Shaping<br />Future Leaders
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;