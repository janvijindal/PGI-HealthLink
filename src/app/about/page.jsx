import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import React from "react";

const AboutPage = () => {
  const data = [
    {
      title: "Brief History of PGI Chandigarh",
      content:
        "The Postgraduate Institute of Medical Education and Research (PGIMER), located in Chandigarh, India, was established in 1962 as a center of excellence dedicated to providing high-quality medical education, research, and healthcare. The foundation of PGIMER was laid by the visionary efforts of several prominent figures, including Dr. Tulsi Das, the first Director of the institute, along with Dr. Pranthik Mitra and Dr. Santokh Singh Anand. Their goal was to create an institution that would not only cater to the healthcare needs of the region but also produce highly skilled medical professionals and conduct advanced research in various medical fields. PGIMER was designed to provide postgraduate medical education in a comprehensive range of specialties and super specialties, making it one of the premier institutions in the country. The institute was established as an autonomous body under the Ministry of Health and Family Welfare, Government of India. Since its inception, PGIMER has played a crucial role in advancing medical education, clinical care, and research, contributing significantly to the development of healthcare in India. The institute has grown over the years, expanding its infrastructure and facilities to accommodate the increasing number of patients and students. Today, PGIMER is recognized as one of the leading medical institutes in India and is known for its state-of-the-art medical services, cutting-edge research, and commitment to excellence in medical education.",
    },
    {
      title: "Detailed Description",
      content:
        "PGIMER is a multidisciplinary medical and research institute that offers a wide range of educational programs, including MD, MS, DM, MCh, and Ph.D. in various medical specialties and super specialties. The institute is renowned for its high academic standards, rigorous training programs, and a focus on practical, hands-on experience. Students at PGIMER receive comprehensive training that prepares them to excel in their respective fields, both in India and internationally. In addition to its educational programs, PGIMER is also a leading center for medical research. The institute has been at the forefront of several groundbreaking research projects that have had a significant impact on public health and medical science. Researchers at PGIMER work on a wide range of topics, including clinical research, basic medical sciences, and translational research, with the aim of improving patient care and advancing medical knowledge. PGIMER is also a major tertiary care hospital that provides advanced medical services to patients from across the country. The hospital is equipped with state-of-the-art facilities and offers specialized services in various fields, including cardiology, neurology, oncology, nephrology, and more. The institute's focus on patient care is reflected in its motto, 'Service to the Community,' and it continues to play a vital role in meeting the healthcare needs of the region. The institute's commitment to excellence in education, research, and patient care has earned it a reputation as one of the top medical institutions in India. PGIMER continues to evolve and expand its capabilities, staying at the cutting edge of medical science and healthcare delivery. Its contributions to the field of medicine and its dedication to improving public health make PGIMER a cornerstone of medical education and research in India.",
    },
  ];

  return (
    <>
    <Navbar/>
    <section className="w-full py-10 md:py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between space-y-10 md:space-y-0 md:space-x-10 px-6">
        <div className="flex-1 space-y-8 ">
          {data.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="flex-1 space-y-6">
          <img
            src="/about/about_1.jpg"
            alt="PGIMER Campus"
            className="w-full h-72 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src="/about/about_2.jpg"
            alt="PGIMER Infrastructure"
            className="w-full h-72 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src="/about/image_3.jpg"
            alt="PGIMER Research Facilities"
            className="w-full h-72 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
           <img
            src="/about/about_4.avif"
            alt="PGIMER Research Facilities"
            className="w-full h-72 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
           <img
            src="/about/about_5.jpg"
            alt="PGIMER Research Facilities"
            className="w-full h-72 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default AboutPage;

