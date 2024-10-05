import React from 'react';  
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../links/contains/navigation';
import { Link } from 'react-router-dom';
import { HiOutlineLogout } from "react-icons/hi";


const SideBarLinks = ({ item }) => {
  return (
    <Link to={item.path} className="flex items-center  gap-2 p-2 hover:bg-neutral-800 rounded text-white">
      <span className='text-xl'>{item.icon}</span>
      {item.label}
    </Link>
  );
};


const Sidebar = () => {
  return (
    <div className='flex flex-col bg-neutral-900 w-60 p-3 text-white'>
      <div className='flex items-center gap-2 px-1 py-3'>
        <FcBullish fontSize={24} />
        <span className='text-neutral-100 text-lg'>OpenShop</span>
      </div>
      <div className='flex-1 py-8 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SideBarLinks key={item.key} item={item} />
        ))}
      </div>
      <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SideBarLinks key={item.key} item={item} />
        ))}
        <div className="flex cursor-pointer text-red-500 items-center  gap-2 p-2 hover:bg-neutral-800 rounded">
      <span className='text-xl'><HiOutlineLogout />
      </span>
     Log out
    </div>
      </div>
    </div>
  );
};

export default Sidebar;
