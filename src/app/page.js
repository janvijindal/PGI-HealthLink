import BlogSection from '@/components/Home/BlogSection'
import Footer from '@/components/Home/Footer'
import HeroSection from '@/components/Home/HeroSection'
import Navbar from '@/components/Home/Navbar'
import PopularDoctors from '@/components/Home/PopularDoctors'
import SearchSection from '@/components/Home/SearchSection'
import Testmonial from '@/components/Home/Testmonial'

import FeatureSection from '@/components/Home/featureSection'
import React from 'react'

const page = () => {
  return (
      <>
       {/* <Navbar/> */}
        <HeroSection/>
        <SearchSection/>
        <PopularDoctors/>
        <FeatureSection/>
         <Testmonial/>
         <BlogSection/>
         <Footer/>
      </>
  )
}

export default page