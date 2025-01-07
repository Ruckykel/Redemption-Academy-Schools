import React from 'react';

const Inspiration = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left half - Image section with darker background */}
      <div className="w-full md:w-1/2 bg-[#D6C9F5] p-8 md:p-16 flex justify-center items-center">
        <div className="max-w-sm w-full">
          <div>
            <img
              src="/TestPicture.png"
              alt="Two children wearing masks doing an elbow bump"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>

      {/* Right half - Text section with lighter background */}
      <div className="w-full md:w-1/2 bg-[#EEE4FF] p-8 md:p-16 flex items-center">
        <div className="max-w-lg">
          <p className=" text-black leading-relaxed font-semibold text-lg">
           "Children are not things to be molded but people to be unfolded.
           Guide them with love, inspire them with values,
           and watch them bloom into their fullest potential."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;