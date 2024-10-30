// Sidebar.js
import React from "react";
import { MdNavigateNext, MdDashboard, MdEventNote, MdPersonAdd, MdList } from "react-icons/md";

const Sidebar = ({ setCurrentView, currentView }) => {
  return (
    <div className="h-full flex flex-col   rounded-md justify-between bg-white ">
      {/* Sidebar */}
      <div className="flex flex-col h-full justify-between p-4">
        <nav className="flex-1">
          <ul>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full ${
                  currentView === "dashboard"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setCurrentView("dashboard")}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <MdDashboard
                      size={20}
                      className={`mr-2 ${
                        currentView === "dashboard" ? "text-white" : "text-gray-700"
                      }`}
                    />
                    <span className="flex-grow">Dashboard</span>
                  </div>
                  {currentView === "dashboard" && (
                    <MdNavigateNext size={25} className="text-white" />
                  )}
                </div>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full ${
                  currentView === "appointments"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setCurrentView("appointments")}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <MdEventNote
                      size={20}
                      className={`mr-2 ${
                        currentView === "appointments" ? "text-white" : "text-gray-700"
                      }`}
                    />
                    <span className="flex-grow">Appointments</span>
                  </div>
                  {currentView === "appointments" && (
                    <MdNavigateNext size={25} className="text-white" />
                  )}
                </div>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full ${
                  currentView === "add-doctor"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setCurrentView("add-doctor")}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <MdPersonAdd
                      size={20}
                      className={`mr-2 ${
                        currentView === "add-doctor" ? "text-white" : "text-gray-700"
                      }`}
                    />
                    <span className="flex-grow">Add Doctor</span>
                  </div>
                  {currentView === "add-doctor" && (
                    <MdNavigateNext size={25} className="text-white" />
                  )}
                </div>
              </button>
            </li>
            <li className="mb-2">
              <button
                className={`flex items-center p-3 rounded-lg w-full ${
                  currentView === "doctor-list"
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setCurrentView("doctor-list")}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <MdList
                      size={20}
                      className={`mr-2 ${
                        currentView === "doctor-list" ? "text-white" : "text-gray-700"
                      }`}
                    />
                    <span className="flex-grow">Doctor List</span>
                  </div>
                  {currentView === "doctor-list" && (
                    <MdNavigateNext size={25} className="text-white" />
                  )}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
