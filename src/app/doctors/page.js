"use client";
import React, { useState, useEffect, Suspense } from "react";
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
import Sidebar from "@/components/doctors/Sidebar";
import DoctorCard from "@/components/doctors/DoctorCard";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/Base_url";
import Navbar from "@/components/Home/Navbar";

const categories = [
  // Categories remain unchanged
];

const DoctorsPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
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

        setDoctors(data); // Set the fetched doctor data
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    const category = searchParams.get("category");
    const query = searchParams.get("search");

    setSelectedCategory(category || null);
    setSearchTerm(query || "");
  }, [searchParams]);

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesCategory = selectedCategory
      ? doctor.specialty === selectedCategory
      : true;
    const matchesSearch = searchTerm
      ? doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    router.push(`/doctors?category=${categoryName}&search=${searchTerm}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    router.push(`/doctors?category=${selectedCategory}&search=${e.target.value}`);
  };

  const handleSearch = () => {
    router.push(`/doctors?category=${selectedCategory}&search=${searchTerm}`);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryClick}
        />
        <div className="flex-1 p-6 mt-10 md:mt-0 md:ml-72">
          <h1 className="text-3xl font-bold mb-6">Doctors</h1>
          <div className="mb-6 flex items-center gap-4">
            <input
              type="text"
              placeholder="Search doctors..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="border border-gray-600 font-medium rounded-md px-4 py-2 w-full"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Search
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))
            ) : (
              <p className="text-center col-span-full">
                No doctors available for this criteria.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const DoctorsPage = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DoctorsPageContent />
    </Suspense>
  );
};

export default DoctorsPage;
