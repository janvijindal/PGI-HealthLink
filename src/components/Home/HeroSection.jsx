import React from 'react';
import Link from 'next/link';
const HeroSection = () => {
  return (
    <section className="w-full  py-10 md:py-20 ">
      <div className="container   mx-auto  flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
        {/* Content */}
        <div className="flex-1 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Find & Book <span className="text-blue-600">Appointments</span> with your Fav <span className="text-blue-600">Doctors</span>
          </h2>
          <p className="text-gray-600 mt-4 mb-6 text-lg md:text-xl">
            We're here to link you directly to improved health outcomes, effortlessly connecting you with the care you need.
          </p>
          <Link href="/about">
          <button className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
            Explore Now
          </button>
           </Link>
        </div>

        {/* Photo */}
        <div className="flex-1 flex  justify-center ">
          <img src="/img_1.webp" alt="Doctor" className="w-full object-fit md:h-[480px]  rounded-lg  object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
