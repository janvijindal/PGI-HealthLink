
import { FaUserDoctor, FaUserInjured, FaCalendarDays } from "react-icons/fa6";
import { LuFolderSearch } from "react-icons/lu";
import { BASE_URL } from "@/Base_url";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const CardData = [
    {
      name: "Doctors",
      value: doctors.length,
      icon: <FaUserDoctor size={40} />,
    },
    {
      name: "Appointments",
      value: appointmentData.length,
      icon: <LuFolderSearch size={40} />,
    },
    {
      name: "Patients",
      value: appointmentData.length,
      icon: <FaUserInjured size={40} />,
    },
  ];

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);
        const adminToken = localStorage.getItem("admin_token");

        // Check if admin token is available
        if (!adminToken) {
          throw new Error("Admin token is missing. Please login again.");
        }

        const response = await fetch(`${BASE_URL}/api/appointments`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        });

        // Parse the JSON response
        const data = await response.json();

        // Set the appointment data
        setAppointmentData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message || "Failed to fetch appointments.");
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

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




  if (loading) {
    return <div className="p-4">Loading appointments...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4 max-w-screen-lg ">
      {/* Cards */}
      <div className="flex flex-wrap gap-3">
        {CardData.map((item, id) => (
          <div
            key={id}
            className="bg-gray-100 rounded-md p-3 flex items-center gap-3 shadow-sm flex-1 min-w-[150px]"
          >
            <div className="text-blue-600">{item.icon}</div>
            <div className="flex flex-col">
              <p className="text-lg font-bold text-black">{item.value}</p>
              <p className="text-gray-600 text-sm">{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Bookings */}
      <div className="mt-6 bg-gray-100 rounded-md shadow-sm">
        <div className="flex items-center justify-start  p-3 border-b border-gray-300">
          <FaCalendarDays className="text-xl text-blue-600" />
          <h2 className="text-lg text-black font-semibold ml-2">
            Latest Bookings
          </h2>
        </div>
        <div className="p-3 max-h-[400px] overflow-y-auto">
          {appointmentData.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-2 border-b last:border-b-0"
            >
              <img
                src={item.doctorImage }
                width={50}
                height={50}
                alt={item.name}
                className="rounded-full object-cover"
              />
              <div className="flex-grow">
                <p className="text-md font-bold text-black">{item.doctorName}</p>
                <p className="text-gray-600 text-sm">
                  Booking on {item.date}
                </p>
              </div>
              <span className={`px-3 py-1 ${item.status=="Completed" ? 'bg-green-600' : 'bg-red-500'} text-white text-sm rounded-full`}>
               {item?.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
