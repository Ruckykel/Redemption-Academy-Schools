import React, { useState, useEffect } from 'react';

const StatCard = ({ icon, endNumber, text, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible && !hasStarted) {
          setHasStarted(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const steps = 60;
    const increment = endNumber / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= endNumber) {
        setCount(endNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [endNumber, duration, hasStarted]);

  return (
    <div className="flex flex-col items-center text-center px-4">
      <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
        {count}+
      </div>
      <p className="text-gray-700 max-w-xs">{text}</p>
    </div>
  );
};

const Achievement = () => {
  return (
    <div id="stats-section" className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <StatCard
            icon={
              <div className="w-full h-full rounded-full bg-blue-600 text-white flex items-center justify-center">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 21h8" />
                  <path d="M12 21v-4" />
                  <path d="M12 3v2" />
                  <path d="M6.4 9a4 4 0 1 1 11.2 0" />
                  <path d="M7.5 9h9" />
                  <path d="M9 17l3-4 3 4" />
                </svg>
              </div>
            }
            endNumber={2000}
            text="Scholarships awarded to support higher education."
          />
          <StatCard
            icon={
              <div className="w-full h-full rounded-full bg-red-400 text-white flex items-center justify-center">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
            }
            endNumber={1600}
            text="Students learning in our schools, from transitional kindergarten through 12th grade"
          />
          <StatCard
            icon={
              <div className="w-full h-full rounded-full bg-yellow-400 text-white flex items-center justify-center">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3 6l7 1l-5 5l1 7l-6-3l-6 3l1-7l-5-5l7-1l3-6z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            }
            endNumber={7000}
            text="Our graduates have proudly completed their education with us,
            embarking on successful journeys and creating meaningful impacts in their communities."
          />
        </div>
      </div>
    </div>
  );
};

export default Achievement;