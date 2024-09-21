"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const DoctorCard = ({ doctor }) => {
  const router = useRouter();

  const handleBookNow = () => {
    router.push(`/doctordetails/${doctor.id}`);
  };

  return (
    <div className="bg-white border p-8  transition hover:scale-90 rounded-lg shadow-md flex flex-col items-center max-w-xs mx-auto">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full h-48 rounded-md mb-4 object-cover "
      />
      <div className="text-center h-80">
        <h3 className="text-xl font-bold mb-1">{doctor.name}</h3>
        <p className=" text-blue-600  mb-1">{doctor.specialty}</p>
        <p className="text-gray-600 mb-1">{doctor.experience} years of experience</p>
        <p className="text-gray-600 font-semibold text-[15px] mb-1">{doctor.location}</p>
        <p className="text-gray-900 mb-1">{doctor.contact}</p>
        <p className="text-gray-900 mb-1">{doctor.email}</p>
      </div>
      <button
        onClick={handleBookNow}
        className="mt-4 rounded-full border-2 border-blue-600 text-blue-700 w-full py-3 text-center hover:bg-blue-600 hover:text-white transition-all"
      >
        Book Now
      </button>
    </div>
  );
};

export default DoctorCard;
