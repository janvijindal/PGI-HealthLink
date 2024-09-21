import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import React from "react";

const ContactUs = () => {
  return (
    <>
   
     <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
       
        <div className="flex flex-col md:flex-row md:space-x-10">
          <div className="flex-1  mb-10 md:mb-0">
            <div className="mt-6 mb-10">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-2">
                Address: PGI Chandigarh, Sector 12, Chandigarh, India
              </p>
              <p className="text-gray-600 mb-2">Phone: +91-172-2756565</p>
              <p className="text-gray-600 mb-2">Email: info@pgichandigarh.edu.in</p>
              <p className="text-gray-600">
                We aim to respond to all queries within 24 hours.
              </p>
            </div>
            <img
              src="/img_2.jpg"
              alt="contact_img"
              className="w-full  object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
            <form>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your contact number"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ContactUs;
