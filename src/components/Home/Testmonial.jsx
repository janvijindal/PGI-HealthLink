"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../Data/TestomialData.json';
import TestCard from './TestCard';

const Testmonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay:true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10 md:py-20">
      <div className="container mx-auto ">
        <h2 className='text-xl md:text-5xl text-black font-bold md:ml-0 ml-5 md:mb-10'>Our Satisfied <span className='text-blue-600'>Patients</span></h2>
        <Slider {...settings}>
          {data.map((item, i) => (
            <TestCard key={i} data={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testmonial;
