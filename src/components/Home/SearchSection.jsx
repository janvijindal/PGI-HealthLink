"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import {
  FaHeartbeat,
  FaBrain,
  FaStethoscope,
  FaSyringe,
  FaLungs,
  FaBone,
  FaUserMd,
  FaUserNurse,
  FaEye,
  FaRadiation,
  FaChild,
  FaFemale,
  FaMicroscope,
} from "react-icons/fa";
import { GiKidneys, GiBrain, GiHumanEar } from "react-icons/gi";
import { MdPsychology, MdBloodtype, MdEmergency } from "react-icons/md";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const doctorCategories = [
    { name: "Cardiology", icon: <FaHeartbeat /> },
    { name: "Neurology", icon: <FaBrain /> },
    { name: "Gastroenterology", icon: <FaStethoscope /> },
    { name: "Nephrology", icon: <GiKidneys /> },
    { name: "Endocrinology", icon: <FaSyringe /> },
    { name: "Oncology", icon: <FaRadiation /> },
    { name: "Pulmonology", icon: <FaLungs /> },
    { name: "Rheumatology", icon: <FaBone /> },
    { name: "Dermatology", icon: <FaUserMd /> },
    { name: "Pediatrics", icon: <FaChild /> },
    { name: "Obstetrics & Gynecology", icon: <FaFemale /> },
    { name: "Orthopedics", icon: <FaBone /> },
    { name: "General Surgery", icon: <FaUserMd /> },
    { name: "Ophthalmology", icon: <FaEye /> },
    { name: "ENT (Ear, Nose, and Throat)", icon: <GiHumanEar /> },
    { name: "Psychiatry", icon: <MdPsychology /> },
    { name: "Urology", icon: <GiKidneys /> },
    { name: "Plastic Surgery", icon: <FaUserMd /> },
    { name: "Anesthesiology", icon: <FaUserNurse /> },
    { name: "Radiology", icon: <FaMicroscope /> },
    { name: "Hematology", icon: <MdBloodtype /> },
    { name: "Pathology", icon: <FaMicroscope /> },
    { name: "Immunology", icon: <AiOutlineMedicineBox /> },
    { name: "Transfusion Medicine", icon: <MdBloodtype /> },
    { name: "Nuclear Medicine", icon: <FaRadiation /> },
    { name: "Internal Medicine", icon: <FaStethoscope /> },
    { name: "Geriatrics", icon: <FaUserMd /> },
    { name: "Neurosurgery", icon: <GiBrain /> },
    { name: "Pediatric Surgery", icon: <FaChild /> },
    { name: "Trauma and Emergency Medicine", icon: <MdEmergency /> },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      router.push(`/doctors?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleCategoryClick = (categoryName) => {
    router.push(`/doctors?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="w-full py-10 md:py-15 bg-gray-50">
      <div className="container mx-auto">
        <Link href="/doctors">
          <p className="text-blue-600  text-end mr-5 font-medium text-xl ">
            See more
          </p>
        </Link>
        <div className="flex flex-col items-center justify-between px-4 md:px-0">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Search <span className="text-blue-600">Doctors</span>
          </h2>
          <p className="text-sm md:text-xl font-medium text-gray-600 mb-8 text-center">
            Search your Doctor and Book Appointment in one click
          </p>
          <div className="flex items-center justify-center gap-4 mb-10 w-full max-w-lg">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="outline-none flex-grow text-sm text-gray-800 focus:border-blue-600 px-4 py-3 border-2 rounded-md md:w-auto"
            />
            <button
              onClick={handleSearch}
              className="flex justify-center items-center gap-2 text-white bg-blue-600 py-3 px-6 rounded-md hover:bg-blue-700 transition"
            >
              <IoIosSearch size={20} /> Search
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 px-3">
        {doctorCategories.slice(0, 6).map((item, i) => (
          <div
            key={i}
            onClick={() => handleCategoryClick(item.name)}
            className="flex flex-col items-center p-3 justify-center gap-3 rounded-md bg-white shadow-md hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer"
          >
            <div className="text-blue-600 text-4xl">{item.icon}</div>
            <p className="text-lg font-medium text-blue-700 text-center">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
