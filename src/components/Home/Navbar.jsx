"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { BASE_URL } from '@/Base_url';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${BASE_URL}/api/users/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch user profile');
        return response.json();
      })
      .then(data => setUser(data))
      .catch(error => console.error(error));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-3">
            <img src="/logo.jpeg" alt="Company Logo" className="w-[70px] h-[70px] object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li className="text-gray-700 text-xl font-semibold hover:text-blue-600 transition-colors duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="text-gray-700 text-xl font-semibold hover:text-blue-600 transition-colors duration-300">
            <Link href="/about">About us</Link>
          </li>
          <li className="text-gray-700 text-xl font-semibold hover:text-blue-600 transition-colors duration-300">
            <Link href="/blog">Blogs</Link>
          </li>
          <li className="text-gray-700 text-xl font-semibold hover:text-blue-600 transition-colors duration-300">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* User Profile or Login Button */}
        {user ? (
          <div className="relative">
            <button 
              className="bg-blue-600 text-white text-2xl px-4 py-2 rounded-full flex items-center"
              onClick={() => {
                setIsUserMenuOpen(!isUserMenuOpen);
                setIsMenuOpen(false); // Close mobile menu if open
              }}
            >
              {user.userName.charAt(0).toUpperCase()}
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md">
                <ul className="flex flex-col">
                  <li className="p-2 hover:bg-gray-200">
                    <Link href="/appointments" onClick={() => setIsUserMenuOpen(false)}>My Appointments</Link>
                  </li>
                  <li className="p-2 hover:bg-gray-200" onClick={handleLogout}>
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <div className="bg-blue-600 text-white px-9 py-2 hidden md:flex items-center justify-center rounded-[20px]">
              Login
            </div>
          </Link>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-blue-600 focus:outline-none"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              setIsUserMenuOpen(false); // Close user menu if open
            }}
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-64 bg-white shadow-md h-full transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
        <div className="flex justify-end mr-3 p-4">
          <button 
            className="text-blue-600"
            onClick={() => {
              setIsMenuOpen(false);
              setIsUserMenuOpen(false); // Close user menu if open
            }}
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
        <ul className="flex mt-10 flex-col space-y-6 p-6">
          <li className="text-gray-700 text-xl font-semibold hover:text-blue-600 transition-colors duration-300">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className="text-gray-700 text-xl font-semibold hover:text-blue-600 transition-colors duration-300">
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>About us</Link>
          </li>
          <li className="text-gray-700 text-xl font-semibold hover:text-blue-600 transition-colors duration-300">
            <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
          </li>
          <li className="text-gray-700 text-xl font-semibold hover:text-blue-600 transition-colors duration-300">
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
          </li>
          <li className="text-gray-700 text-xl font-semibold hover:text-blue-600 transition-colors duration-300">
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>Sign in</Link>
          </li>
          {user && (
            <li className="text-gray-700 text-xl font-semibold hover:text-blue-600 transition-colors duration-300">
              <Link href="/appointments" onClick={() => setIsMenuOpen(false)}>My Appointments</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
