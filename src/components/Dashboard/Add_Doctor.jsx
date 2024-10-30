import React, { useState } from 'react';
import { BASE_URL } from '@/Base_url';

const Add_Doctor = () => {
  const [doctor, setDoctor] = useState({
    image: '',
    name: '',
    specialty: '',
    experience: '',
    location: '',
    contact: '',
    email: ''
  });

  const handleChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const response = await fetch(`${BASE_URL}/doctors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doctor)
      });

      if (!response.ok) {
        throw new Error('Failed to add doctor');
      }

      const data = await response.json();
      console.log('Doctor added successfully:', data);
      
      
      setDoctor({
        image: '',
        name: '',
        specialty: '',
        experience: '',
        location: '',
        contact: '',
        email: ''
      });

    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  return (
    <div className="p-4 max-w-[1150px]">
      <h2 className="text-2xl font-semibold text-black mb-4">Add Doctor</h2>

      {/* Form for adding a doctor */}
      <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto max-h-[500px]">
        <div>
          <label className="block text-gray-700">Image URL:</label>
          <input
            type="text"
            name="image"
            value={doctor.image}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter image URL"
          />
        </div>

        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={doctor.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter name"
          />
        </div>

        <div>
          <label className="block text-gray-700">Specialty:</label>
          <input
            type="text"
            name="specialty"
            value={doctor.specialty}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter specialty"
          />
        </div>

        <div>
          <label className="block text-gray-700">Experience:</label>
          <input
            type="text"
            name="experience"
            value={doctor.experience}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter experience (e.g., 5 years)"
          />
        </div>

        <div>
          <label className="block text-gray-700">Location:</label>
          <input
            type="text"
            name="location"
            value={doctor.location}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter location"
          />
        </div>

        <div>
          <label className="block text-gray-700">Contact:</label>
          <input
            type="text"
            name="contact"
            value={doctor.contact}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter contact number"
          />
        </div>

        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={doctor.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter email"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default Add_Doctor;
