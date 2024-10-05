import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Header from './header';

const Layout = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
      <Sidebar />
      
      {/* Main content area */}
      <div className='flex flex-col flex-grow text-white'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
