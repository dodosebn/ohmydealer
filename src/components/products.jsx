import React from 'react';
import { Link } from 'react-router-dom';
// import Dashboardstartgrid from './dashboardstartgrid';

const Products = () => {
  return (
    <div className="flex gap-4">
      {/* <Dashboardstartgrid /> */}
      <Link to="/dashboard">Jee dashboard</Link>
    </div>
  );
};

export default Products;
