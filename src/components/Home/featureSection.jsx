import React from "react";
import { FaStar } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <section className="w-full py-10 md:py-20">
      <div className="container mx-auto flex  flex-col md:flex-row items-center  md:items-start md:gap-10  px-4 md:px-0">
        {/* Photo */}
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <img
            src="/img_2.jpg"
            alt="Doctor"
            className="w-full md:max-w-[600px] h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col md:gap-7 gap-2 ">
          <p className="bg-blue-100 text-blue-600 text-sm md:text-xl md:rounded-[30px] rounded-md  px-3 py-2 flex flex-row items-center justify-center gap-2 mb-4">
            Rated #1 for Hospital Facility with many professional doctors
          </p>
          <p className="text-black mb-6 text-sm md:text-3xl">
            We're revolutionizing healthcare with seamless access to trusted
            professionals, prioritizing your journey to better health.
          </p>
          <div className="flex justify-between items-center space-x-6">
            <div className="flex flex-col items-center">
              <p className="text-5xl text-blue-600 font-semibold">40+</p>
              <p className="text-gray-700 font-normal text-sm text-center">
                Dedicated Doctors
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-5xl text-blue-600 font-semibold">10k+</p>
              <p className="text-gray-700 font-normal text-sm text-center">
                Hours of Patient Consultations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
