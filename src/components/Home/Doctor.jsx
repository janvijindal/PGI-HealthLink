"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const Doctor = ({ data }) => {
  const router = useRouter();

  const handleBookNow = () => {
    // Ensure data.id is a valid string and exists
    if (data?.id) {
      router.push(`/doctordetails/${data.id}`);
    } else {
      console.error("Invalid data:", data);
    }
  };

  return (
    <div className='flex flex-col p-4 items-start gap-4 rounded-md border border-gray-200 shadow-md transition transform hover:scale-90 bg-white w-full max-w-sm sm:max-w-md'>
      <img
        src={data.image}
        alt="doctor_img"
        className='w-full h-55 object-cover rounded-md sm:h-56 md:h-64'
      />
      <div className='w-full'>
        <p className='text-blue-800 bg-blue-300 rounded-full px-3 py-1 text-sm max-w-max'>
          {data.specialty}
        </p>
        <h2 className='text-black text-xl font-bold mt-2 md:text-2xl'>
          {data.name}
        </h2>
        <p className='text-blue-600 text-[16px] mt-1'>
          {data.experience} years of experience
        </p>
        <p className='text-[18px] font-normal mt-2 h-[90px]'>
          {data.location}
        </p>
        <button
          onClick={handleBookNow}
          className='mt-4 rounded-full border-2 border-blue-600 text-blue-700 w-full py-3 text-center hover:bg-blue-600 hover:text-white transition-all'
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Doctor;
