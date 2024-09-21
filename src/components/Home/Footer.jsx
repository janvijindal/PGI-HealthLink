import React from 'react';

const Footer = () => {
  return (
    <div className='w-full pt-10 md:pt-20 pb-2 bg-black text-white text-sm '>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 px-5'>
        <div className='flex flex-col items-start'>
          <h3 className='text-blue-600 font-bold mb-3'>ACADEMICS</h3>
          <ul className='space-y-2'>
            <li>Crisis Helpline for PGIMER Students</li>
            <li>Anti-Ragging Committee</li>
            <li>Duty Roster</li>
          </ul>
        </div>

        <div className='flex flex-col items-start'>
          <h3 className='text-blue-600 font-bold mb-3'>Patients</h3>
          <ul className='space-y-2'>
            <li>HelpLine Nos.</li>
            <li>OPD Schedule</li>
            <li>Online Pre-Registration</li>
            <li>Lab Reports</li>
          </ul>
        </div>

        <div className='flex flex-col items-start mb-3'>
          <h3 className='text-blue-600 font-bold'>Employees</h3>
          <ul className='space-y-2'>
            <li>Employee Corner</li>
            <li>House Allotment</li>
            <li>Holidays List</li>
            <li>HIS (on LAN only)</li>
          </ul>
        </div>

        <div className='flex flex-col items-start'>
          <h3 className='text-blue-600 font-bold mb-3'>Quick links</h3>
          <ul className='space-y-2'>
            <li>RTI</li>
            <li>Press/Media Release</li>
            <li>NIRF</li>
            <li>COVID-19 Dashboard</li>
          </ul>
        </div>

        <div className='flex flex-col items-start'>
          <h3 className='text-blue-600 font-bold mb-3'>Website Policies</h3>
          <ul className='space-y-2'>
            <li>Content Archival Policy</li>
            <li>Content Moderation and Approval Policy</li>
            <li>Disclaimer</li>
            <li>Hyperlinking Policy</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>

      <div className='flex justify-center items-center gap-3 mt-10 flex-wrap'>
        <img src="/footer/f4.gif" alt="footer" className='md:w-[200px] w-[100px]  object-cover rounded-md' />
        <img src="/footer/f2.jpg" alt="footer" className='md:w-[200px] w-[80px]] h-8 md:h-auto object-cover rounded-md' />
        <img src="/footer/f3.png" alt="footer" className='md:w-[200px] w-[100px] object-cover rounded-md' />
        <img src="/footer/f4.gif" alt="footer" className='md:w-[200px] w-[100px] object-cover rounded-md' />
        <img src="/footer/f5.jpg" alt="footer" className='md:w-[200px] w-[100px] object-cover rounded-md' />
        <img src="/footer/f6.jpg" alt="footer" className='md:w-[200px] w-[100px] object-cover rounded-md' />
      </div>

      <p className='text-center mt-10'>copyright@janvijindal</p>
    </div>
  );
};

export default Footer;
