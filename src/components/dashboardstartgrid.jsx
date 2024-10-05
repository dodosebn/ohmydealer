import React from 'react';
import { FcBriefcase,  FcConferenceCall, FcElectronics } from "react-icons/fc";
import { GrTrain } from "react-icons/gr";

const BoxWrapper = ({ children }) => {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center justify-center">
      {children}
    </div>
  );
};

const Dashboardstartgrid = () => {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
        <FcBriefcase className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Sales</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold' >$350.00</strong>
            <span className='text-sm text-green-500 pl-2'>+234</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-orange-500'>
        <FcElectronics  className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Enquires</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold' >$350.00</strong>
            <span className='text-sm text-green-500 pl-2'>+234</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500'>
        <FcConferenceCall  className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Customers</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold' >$350.00</strong>
            <span className='text-sm text-green-500 pl-2'>+234</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500'>
        <GrTrain className='text-2xl text-white'/>
        </div>
        <div className='pl-4'>
          <span className='text-sm text-gray-500 font-light'>Total Orders</span>
          <div className='flex items-center'>
            <strong className='text-xl text-gray-700 font-semibold' >$350.00</strong>
            <span className='text-sm text-green-500 pl-2'>+234</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default Dashboardstartgrid;
