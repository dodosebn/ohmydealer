import React from 'react';  
import Dashboardstartgrid from './dashboardstartgrid';
import TransactionChart from './transactionChart';
import BuyerProfileChart from './buyerProfileChart';
import RecentOrders from './recentOrders';
import PopularProducts from './popularProducts';

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4 h-screen justify-between'>
      <Dashboardstartgrid />
      
      <div className="flex flex-col md:flex-row gap-4 md:flex-1">
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className='text-gray-700 flex-col md:flex-row flex-1 flex md:gap-4 gap-0 flex-1'>
        <RecentOrders />
        <PopularProducts />
      </div>
    </div>
  );
};

export default Dashboard;