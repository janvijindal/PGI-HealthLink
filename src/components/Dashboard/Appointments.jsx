import { BASE_URL } from "@/Base_url";
import React, { useState, useEffect } from "react";

const Appointments = () => {
  const [appointmentData, setAppointmentData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div className="p-4">Loading appointments...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="p-4 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-black mb-4">
        All Appointments
      </h2>
      {/* Table */}
      <div className="overflow-y-auto" style={{ maxHeight: "500px" }}>
        <table className="min-w-full table-fixed bg-gray-100 shadow-md rounded-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Patient</th>
              <th className="p-3 text-left">Date & Time</th>
              <th className="p-3 text-left">Doctor</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointmentData.map((appointment, index) => (
              <tr
                key={index} // Use index as the key since no unique ID is available
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
                  {appointment.date}, {appointment.time}
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
                  <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                    Completed
                  </span>
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
