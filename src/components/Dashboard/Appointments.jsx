"use client";
import { BASE_URL } from "@/Base_url";
import React, { useState, useEffect } from "react";

const Appointments = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatingStatus, setUpdatingStatus] = useState(null); // For tracking which status is being updated

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
          method: "GET",
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        });

        const data = await response.json();
        setAppointmentData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message || "Failed to fetch appointments.");
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const updateAppointmentStatus = async (id, newStatus) => {
    try {
      setUpdatingStatus(id); // Mark the current status update in progress
      const adminToken = localStorage.getItem("admin_token");

      // Check if admin token is available
      if (!adminToken) {
        throw new Error("Admin token is missing. Please login again.");
      }

      // Update status on the server
      const response = await fetch(
        `${BASE_URL}/api/appointments/update-status/${id}?status=${newStatus}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json", // Ensure the body is sent as JSON
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update appointment status.");
      }

      // Update status locally
      setAppointmentData((prevData) =>
        prevData.map((appointment) =>
          appointment.id === id
            ? { ...appointment, status: newStatus }
            : appointment
        )
      );
    } catch (error) {
      setError(error.message || "Failed to update status.");
    } finally {
      setUpdatingStatus(null); // Reset after the update attempt
    }
  };

  if (loading) {
    return <div className="p-4">Loading appointments...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  console.log(appointmentData);
  return (
    <div className="p-4 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-black mb-4">
        All Appointments
      </h2>
      {/* Table */}
      <div className="overflow-x-auto max-h-[500px]">
        <table className="min-w-full table-auto bg-gray-100 shadow-md rounded-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Patient</th>
              <th className="p-3 text-left">Date & Time</th>
              <th className="p-3 text-left">Doctor</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointmentData.map((appointment, i) => (
              <tr
                key={i}
                className="border-b last:border-b-0 hover:bg-gray-100"
              >
                <td className="p-3 flex items-center gap-3">
                  <img
                    src="/users/image_1.avif"
                    alt={appointment.userName}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <span className="text-black">{appointment.userName}</span>
                </td>
                <td className="p-3 text-gray-600">
                  {/* Combine date and time into a human-readable format */}
                  {new Date(
                    `${appointment.date} ${appointment.time}`
                  ).toLocaleString()}
                </td>
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={appointment.doctorImage || "/popular/doc_5.jpg"}
                    alt={appointment.doctorName}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <span className="text-black">{appointment.doctorName}</span>
                </td>
                <td className="p-3">
                  <select
                    value={appointment.status}
                    onChange={
                      (e) =>
                        updateAppointmentStatus(appointment.id, e.target.value) // Use timestamp as ID
                    }
                    className="px-3 py-1 bg-gray-200 text-black text-sm rounded-full"
                    disabled={updatingStatus === appointment.id} // Disable while updating
                  >
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                  </select>
                  {updatingStatus === appointment.timestamp && (
                    <span className="text-sm text-gray-600 ml-2">
                      Updating...
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
