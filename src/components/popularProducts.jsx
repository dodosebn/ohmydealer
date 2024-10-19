import React from 'react';
import { Link } from 'react-router-dom';

const popularProductData = [ 
    {
        id: "1234",
        product_name: "Headset",
        product_thumbnell: "https://plus.unsplash.com/premium_photo-1677838847721-2bf14b48c256?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        product_price: '$1333',
        product_stack: 34
    },
    {
        id: "5678",
        product_name: "Gaming Mouse",
        product_thumbnell: "https://images.unsplash.com/photo-1588440573874-54185a266452?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        product_price: '$2255',
        product_stack: 120
    },
    {
        id: "9101",
        product_name: "Mechanical Keyboard",
        product_thumbnell: "https://media.istockphoto.com/id/1356366044/photo/black-mechanical-keyboard-on-white-background-blue-neon-light.jpg?s=1024x1024&w=is&k=20&c=2_d7kAfRReNAoccwntbZxDb89gFxTtPJdUZ2IWrWp2M=",
        product_price: '$3389',
        product_stack: 50
    },
    {
        id: "1121",
        product_name: "4K Monitor",
        product_thumbnell: "https://images.unsplash.com/photo-1666249245780-6584c2a8a3a5?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        product_price: '$2499',
        product_stack: 20
    },
    {
        id: "5161",
        product_name: "Smartphone",
        product_thumbnell: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        product_price: '$9919',
        product_stack: 10
    }
];
const PopularProducts = () => {
  return (
    <div className="md:w-[20rem] w-full h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className='text-gray-700 font-medium'>Popular Products</strong>
      <div className='mt-4 flex flex-col gap-3 '>
        {popularProductData.map((product) => (
          <Link key={product.id} className="flex hover:no-underline" to={`/product/${product.id}`}>
            <div className='w-10 h-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden'>
              <img className='w-full h-full object-cover' src={product.product_thumbnell} alt={product.product_name} />
            </div>
            <div className='ml-4 flex-1'>
              <p className={`text-sm text-gray-800 ${product.product_stack === 0 ? "text-orange-500" : "text-green-500"}`}>
                {product.product_name}
              </p>
              <span className='text-sm font-md'>
                {product.product_stack === 0 ? "Out of stock" : `${product.product_stack} in stock`}
              </span>
            </div>
            <div className='text-sm text-gray-400 pl-2'>
              {product.product_price}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
