"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'; 
import { BASE_URL } from "@/Base_url";


const SignupPage = () => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); 

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.jwt); // Save token to local storage
      toast.success(data.message); // Show success toast
      
      // Redirect to home page
      router.push("/"); // Redirect to home page after successful signup
    } catch (error) {
      toast.error(error.message || "An error occurred"); // Show error toast
    }
  };

  return (
    <section className="w-full h-screen flex">
      {/* Left Side (Form) */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Sign Up</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-blue-600"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
            <p className="mt-6 text-gray-600 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="w-1/2 hidden md:block h-full relative">
        <img
          src="/signup_page.webp" 
          alt="signup" 
          layout="fill"
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default SignupPage;
