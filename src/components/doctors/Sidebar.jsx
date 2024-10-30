"use client"
import React, { useState } from 'react';
import { FaBars } from "react-icons/fa"; 

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (name) => {
    onSelectCategory(name);
    setIsOpen(false); 
  };

  return (
    <div>
      {/* Mobile menu icon */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <FaBars className="text-3xl cursor-pointer text-blue-600" onClick={handleToggleSidebar} />
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-lg z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform md:translate-x-0 md:w-72 w-64 overflow-y-auto`}
      >
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-5 text-center">Categories</h2>
          <div className="flex flex-col gap-4">
            {categories.map((item) => (
              <div
                key={item.name}
                className={`flex items-center p-3 rounded-md  text-blue-600 cursor-pointer hover:bg-gray-200 transition-colors ${
                  selectedCategory === item.name ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleCategorySelect(item.name)}
              >
                <div className="text-2xl text-blue-600 mr-3">{item.icon}</div>
                <p className="text-xl text-blue-600 font-semibold">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay for small screens when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={handleToggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
