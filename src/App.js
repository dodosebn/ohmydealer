import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/shared/layout';
import Dashboard from './components/dashboard';
import Products from './components/products';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/products' element={<Products />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
      {/* <Route path='login' element={<>this is a login page</>} /> */}
    </Routes>
  );
}

export default App;