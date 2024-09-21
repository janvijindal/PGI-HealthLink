"use client"
import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';
import { BASE_URL } from '@/Base_url';

const PopularDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
       
        const response = await fetch(`${BASE_URL}/doctors`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            
          },
        });
        if (!response.ok) throw new Error('Failed to fetch doctors');
        const data = await response.json();

        // Filter doctors with 10 or more years of experience
        const filteredDoctors = data.filter(doctor => doctor.experience >= 10);
        setDoctors(filteredDoctors);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className='w-full py-10 md:py-20'>
      <div className='container mx-auto px-4'>
        <h2 className='text-xl md:text-5xl text-black font-bold mb-3 md:mb-10'>
          Popular <span className='text-blue-600'>Doctors</span> of PGIMER
        </h2>
        <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {doctors.slice(0, 6).map((doctor, i) => (
            <Doctor key={i} data={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDoctors;

