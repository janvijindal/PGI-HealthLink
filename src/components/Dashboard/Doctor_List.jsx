import React, { useState, useEffect } from 'react';
import { BASE_URL } from "@/Base_url";

const Doctor_List = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(`${BASE_URL}/doctors`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Failed to fetch doctors");
        const data = await response.json();
       
        setDoctors(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className='p-4 max-w-[1150px]'>
      <h2 className="text-2xl font-semibold text-black mb-6">All Doctors</h2>

      {/* Responsive grid layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto max-h-[500px]'>
        {doctors.map((doctor, i) => (
          <div 
            key={i} 
            className="bg-white border p-4 rounded-lg shadow-md transition transform hover:scale-105 flex flex-col items-start"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full h-48 rounded-md mb-4 object-cover"
            />
            <div className="">
              <h3 className="text-xl font-bold mb-2">{doctor.name}</h3>
              <p className="text-blue-600 text-left mb-2">{doctor.specialty}</p>
              <p className="text-gray-600 mb-2">{doctor.experience} years of experience</p>
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-500"
                  id={`available-${i}`}
                />
                <label htmlFor={`available-${i}`} className="ml-2 text-gray-700">
                  Available
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctor_List;
