import React from 'react';
import Dashboardstartgrid from './dashboardstartgrid';
import TransactionChart from './transactionChart';


const Dashboard = () => {
  return (
    <div className='flex gap-4 flex-col'>
      <Dashboardstartgrid />
      <TransactionChart />
     
    </div>
  );
};


export default Dashboard;
