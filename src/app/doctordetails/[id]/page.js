import About from '@/components/DoctorDetail/About';
import DetailCard from '@/components/DoctorDetail/DetailCard';
import Suggestion from '@/components/DoctorDetail/Suggestion';
import Navbar from '@/components/Home/Navbar';
import React from 'react';

const Page = () => {
  return (
     <>
       <Navbar/>
       <div className="container  my-10 mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 flex flex-col gap-8">
        <h2 className='text-3xl font-bold'>Details</h2>
          <DetailCard />
          <About />
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          < Suggestion/>
        </aside>
      </div>
    </div>
     </>
  );
};

export default Page;
