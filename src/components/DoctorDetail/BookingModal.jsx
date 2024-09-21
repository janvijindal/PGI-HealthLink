"use client";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaTimes } from "react-icons/fa";
import { toast } from 'react-toastify'; // Import toast for notifications
import { BASE_URL } from "@/Base_url";

const BookingModal = ({ doctor, appointment, onClose, isUpdating }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState("");
  const [note, setNote] = useState("");

  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
  ];

  useEffect(() => {
    if (isUpdating && appointment) {
      setSelectedDate(new Date(appointment.time));
      setSelectedSlot(appointment.slot);
      setNote(appointment.note);
    }
  }, [isUpdating, appointment]);

  const handleBookingOrUpdate = async () => {
    const endpoint = isUpdating 
      ? `${BASE_URL}/api/appointments/update/${appointment.id}` 
      : `${BASE_URL}/api/appointments/create/${doctor.id}`;
      
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(endpoint, {
        method: isUpdating ? 'POST' : 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          note: note || "I want an immediate appointment",
          time: selectedDate.toDateString(),
          slot: selectedSlot,
        }),
      });

      if (!response.ok) throw new Error(isUpdating ? 'Failed to update appointment' : 'Failed to book appointment');
      
      toast.success(`${isUpdating ? 'Appointment updated' : 'Appointment booked'} with ${doctor.name} on ${selectedDate.toDateString()} at ${selectedSlot}`);
      onClose();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8 w-full max-w-lg md:max-w-3xl lg:max-w-4xl relative my-auto mx-4 md:mx-6 lg:mx-8 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-900 transition-all">
          <FaTimes size={24} />
        </button>
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-center text-gray-700 mb-4 mt-8 md:mb-6">
          {isUpdating ? `Update Appointment with ${doctor.name}` : `Book an Appointment with ${doctor.name}`}
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-4 md:gap-6 lg:gap-8">
          <div className="w-full md:w-1/2 flex flex-col">
            <h3 className="text-md md:text-lg font-semibold text-gray-700 mb-2">Select Date</h3>
            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-2 md:p-4">
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                className="w-full h-full"
                tileClassName={() => "h-[48px] flex items-center justify-center text-center hover:bg-blue-100 focus:bg-blue-200 transition-all"}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <h3 className="text-md md:text-lg font-semibold text-gray-700 mb-2">Select Time Slot</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4 h-auto overflow-auto p-2 border border-gray-200 rounded-lg shadow-sm">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-2 px-4 rounded-lg text-center transition-all ${
                    selectedSlot === slot
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
        <textarea
          placeholder="Add a note (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="mt-4 w-full border px-4 py-2 border-gray-300 rounded-lg shadow-sm"
        />
        <div className="flex flex-col md:flex-row gap-5 w-full mt-6">
          <button
            onClick={onClose}
            className="w-full md:w-1/2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleBookingOrUpdate}
            className="w-full md:w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            {isUpdating ? 'Update Appointment' : 'Confirm Booking'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
