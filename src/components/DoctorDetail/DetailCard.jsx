"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import BookingModal from './BookingModal'; 
import { BASE_URL } from "@/Base_url";
import { toast } from 'react-toastify'; // Import toast for notifications

const DetailCard = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`${BASE_URL}/doctors/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
            
          },
        });

        if (!response.ok) throw new Error('Failed to fetch doctor details');
        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctor();
  }, [id]);

  if (!doctor) return <p>Loading...</p>;

  const handleBookAppointmentClick = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error("Please log in to book an appointment.");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="p-4 w-full flex flex-col md:flex-row items-center justify-center gap-5 border border-gray-300 rounded-md bg-white max-w-4xl mx-auto">
      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-full md:w-1/2 h-75 object-cover rounded-md"
      />
      <div className="flex flex-col items-start gap-2 text-center md:text-left w-full md:w-1/2">
        <h1 className="text-2xl md:text-3xl font-bold mt-4">{doctor.name}</h1>
        <p className="text-[12px] rounded-full bg-blue-200 px-2 md:text-sm text-blue-600">
          {doctor.specialty}
        </p>
        <div className="flex gap-3 justify-center md:justify-start">
          {/* Social Media Links */}
          <a href={doctor.youtube} aria-label="YouTube" className="text-red-600 hover:text-red-800">
            <FaYoutube size={24} />
          </a>
          <a href={doctor.facebook} aria-label="Facebook" className="text-blue-600 hover:text-blue-800">
            <FaFacebook size={24} />
          </a>
          <a href={doctor.instagram} aria-label="Instagram" className="text-pink-600 hover:text-pink-800">
            <FaInstagram size={24} />
          </a>
          <a href={doctor.twitter} aria-label="Twitter" className="text-blue-500 hover:text-blue-700">
            <FaTwitter size={24} />
          </a>
        </div>
        <p className="text-sm">{doctor.experience} of experience</p>
        <p className="text-sm">{doctor.location}</p>
        <div className="flex justify-center items-center gap-5">
          <a href={`tel:+${doctor.contact}`}>
            <FaPhone size={32} className="text-blue-600 font-bold" />
          </a>
          <a href={`mailto:${doctor.email}`}>
            <MdEmail size={46} className="text-blue-600 font-bold" />
          </a>
        </div>
        <button
          onClick={handleBookAppointmentClick}
          className="mt-4 rounded-full border-2 border-blue-600 text-blue-700 w-full py-3 text-center hover:bg-blue-600 hover:text-white transition-all"
        >
          Book Appointment
        </button>
      </div>
      {isModalOpen && <BookingModal doctor={doctor} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default DetailCard;
