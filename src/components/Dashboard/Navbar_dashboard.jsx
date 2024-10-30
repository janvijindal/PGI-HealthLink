import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Navbar_dashboard = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin');
  };


  return (
    <nav className="w-full bg-white h-[13vh] border-[1px] border-bottom border-gray-200  ">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.jpeg"
              alt="Company Logo"
              className="w-[70px] h-[70px] object-contain"
            />
            <span className="px-4 py-2  text-gray-800 border border-gray-500 font-bold rounded-full">ADMIN</span>
          </div>
        </Link>

        
          <button onClick={handleLogout} className="bg-blue-600 text-white px-9 py-2 hidden md:flex items-center justify-center rounded-[20px]">
            Logout
          </button>
       
      </div>
    </nav>
  );
};

export default Navbar_dashboard;
