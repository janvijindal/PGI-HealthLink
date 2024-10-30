"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/Base_url"; // Ensure BASE_URL is defined
import { toast } from "react-toastify"; // For notifications
import BookingModal from "@/components/DoctorDetail/BookingModal";
import Navbar from "@/components/Home/Navbar";

const MyAppointments = () => {
  const router = useRouter();
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [updatedNote, setUpdatedNote] = useState("");
  const [updatedTime, setUpdatedTime] = useState("");
  const [updatedSlot, setUpdatedSlot] = useState("");

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("You have to be logged in to check appointments");
        router.push("/"); // Redirect to home page
      }
    };

    const fetchAppointments = async () => {
      const token = localStorage.getItem("token");
      if (!token) return; 

      try {
        const response = await fetch(`${BASE_URL}/api/appointments/user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch appointments");
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    checkAuth();
    fetchAppointments();
  }, [router]);

  const handleCancelAppointment = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${BASE_URL}/api/appointments/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to cancel appointment");
      setAppointments((prev) =>
        prev.filter((appointment) => appointment.id !== id)
      );
      toast.success("Appointment cancelled successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  

  const openUpdateModal = (appointment) => {
    setSelectedAppointment(appointment);
    setUpdatedNote(appointment.note);
    setUpdatedTime(appointment.time);
    setUpdatedSlot(appointment.slot);
    setModalOpen(true);
  };

  return (
    <>
      <Navbar/>
      <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl mt-10 font-bold mb-6">My Appointments</h1>
      {appointments.length === 0 ? (
        <p className="text-center">No appointments found.</p>
      ) : (
        appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="border border-gray-300 hover:scale-105 rounded-md p-4 mb-4 bg-white shadow-md"
          >
            <div className="flex gap-4">
              <img
                src={appointment.doctor.image}
                alt={appointment.doctor.name}
                className="w-45 h-48 object-cover rounded-md"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">
                  {appointment.doctor.name}
                </h2>
                <p className="text-gray-600">{appointment.doctor.specialty}</p>
                <p className="text-gray-600">{appointment.note}</p>
                <p className="text-gray-600">
                  Date: {new Date(appointment.time).toLocaleDateString()}
                </p>
                <p className="text-gray-600">Time: {appointment.slot}</p>
                <p className="text-gray-600">
                  Location: {appointment.doctor.location}
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-5 mt-4">
              <button
                onClick={() => openUpdateModal(appointment)}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Update 
              </button>
              <button
                onClick={() => handleCancelAppointment(appointment.id)}
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
              >
                Cancel 
              </button>
            </div>
          </div>
        ))
      )}

      {modalOpen && (
        <BookingModal
          doctor={selectedAppointment?.doctor}
          appointment={selectedAppointment}
          onClose={() => setModalOpen(false)}
          isUpdating={true} // Set this flag to true for updates
        />
      )}
    </div>
    </>
  );
};

export default MyAppointments;
