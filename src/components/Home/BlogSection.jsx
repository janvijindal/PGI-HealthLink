"use client"
import React from 'react';
import Slider from 'react-slick';
import data from '../../Data/BlogData.json';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const BlogSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='w-full py-10 md:py-20'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center md:mb-12 mb-5 px-2'>
          <h2 className='text-sm md:text-5xl text-black font-bold '>
            Doctors <span className='text-blue-600'>Healthy</span> Advice and Updated
          </h2>
          <Link href="/blog"><p className='text-blue-600 text-sm md:text-xl font-medium cursor-pointer'>
            See more
          </p></Link>
        </div>

        <Slider {...settings}>
          {data.slice(4, 9).map((item, i) => (
            <div key={i} className='px-2 md:h-[480px] '>
              <div className='flex flex-col items-start gap-2'>
                <img 
                  src={item.image} 
                  alt="blog_image" 
                  className='rounded-[20px] object-cover w-full h-48 md:h-60 lg:h-72' 
                />
                <div className='flex justify-center items-center gap-5'>
                  <h3 className='font-bold text-sm'>{item.doctor_name}</h3>
                  <p className='text-gray-900 text-[10px]'>{item.date}</p>
                </div>
                <h2 className='text-lg md:text-2xl font-bold'>{item.category}</h2>
                <p className=' text-sm md:text-base lg:text-lg text-gray-600'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default BlogSection;
