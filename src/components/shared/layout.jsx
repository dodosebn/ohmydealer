import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Header from './header';

const Layout = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-x-hidden'>
      <Sidebar className="h-full" />
      
      <div className='flex flex-col flex-grow'>
        <Header className="z-10" />
        <div className='flex-grow overflow-y-auto z-0'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;