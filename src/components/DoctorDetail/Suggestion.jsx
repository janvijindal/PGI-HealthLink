"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BASE_URL } from "@/Base_url";
import Link from "next/link";

const Suggestion = () => {
  const { id } = useParams(); // Selected doctor ID
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null); // Store selected doctor

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        // Fetch all doctors
        const response = await fetch(`${BASE_URL}/doctors`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) throw new Error('Failed to fetch doctor details');
        const allDoctors = await response.json();

        // Find the selected doctor by ID
        const selectedDoctor = allDoctors.find((doc) => doc.id === id);
        setSelectedDoctor(selectedDoctor);

        if (selectedDoctor) {
          // Filter doctors with the same specialty, excluding the selected doctor
          const filteredDoctors = allDoctors.filter(
            (doc) => doc.specialty === selectedDoctor.specialty && doc.id !== id
          );
          setDoctors(filteredDoctors);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctors();
  }, [id]);

  return (
    <div className="p-4">
      <h1 className="text-bold text-2xl mb-4 font-bold">Suggestions</h1>
      <div className="flex flex-col border border-gray-300 rounded-md overflow-hidden">
        {doctors.length > 0 ? (
          doctors.map((doctor) => (
            <Link href={`/doctordetails/${doctor.id}`}>
                 <div
              key={doctor.id} // Use doctor.id for the key
              className="border-b border-gray-300 flex items-center gap-4 p-3 hover:bg-gray-100 transition-colors"
            >
              <img
                src={doctor.image}
                alt="doctor_img"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex flex-col justify-center">
                <p className="text-blue-600 text-[10px] bg-blue-100 rounded-full px-2 py-1 max-w-max">
                  {doctor.specialty}
                </p>
                <h3 className="text-gray-800 text-base font-medium mt-1">{doctor.name}</h3>
                <p className="text-blue-600 text-sm mt-1">{doctor.experience} of experiecne</p>
              </div>
            </div>
             </Link>
          ))
        ) : (
          <p>No suggestions found.</p>
        )}
      </div>
    </div>
  );
};

export default Suggestion;
