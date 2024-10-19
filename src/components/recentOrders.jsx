import React from 'react';
import { Link } from 'react-router-dom';

const recentOrderDetails = [
    {
        id: '1',
        product_id: '4324',
        customer_name: 'Scot Marshel',
        order_date: '2022-05-27 18:24:06',
        order_total: '$495.96',
        Current_order_status: 'PLACED',
        shipment_address: 'Cottage Oreve, 84 97424'
    },
    {
        id: '2',
        product_id: '5325',
        customer_name: 'Tony Marshel',
        order_date: '2023-05-27 18:24:07',
        order_total: '$495.99',
        Current_order_status: 'GLACED',
        shipment_address: 'Dottage Oreve, 94 97424'
    },
    {
        id: '3',
        product_id: '6326',
        customer_name: 'Sylva Marshel',
        order_date: '2024-05-27 18:24:09',
        order_total: '$995.96',
        Current_order_status: 'PENDING',
        shipment_address: 'Arizona Oreve, 84 97424'
    },
    {
        id: '4',
        product_id: '7327',
        customer_name: 'Rubana Marshel',
        order_date: '2028-05-27 18:24:06',
        order_total: '$895.96',
        Current_order_status: 'DORMANT',
        shipment_address: 'Lattage Oreve, 84 97424'
    }
];

const getOrderStatus = (status: string) => {
    switch (status) {
        case 'PLACED':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xl text-sky-400 bg-sky-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            );
        case 'GLACED':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xl text-yellow-400 bg-yellow-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            );
        case 'PENDING':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xl text-orange-400 bg-orange-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            );
        case 'DORMANT':
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xl text-gray-400 bg-gray-300">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            );
        default:
            return (
                <span className="capitalize py-1 px-2 rounded-md text-xl text-gray-500 bg-gray-200">
                    {status.replaceAll('_', ' ').toLowerCase()}
                </span>
            );
    }
};

const RecentOrders = () => {
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
      <strong className='text-gray-700 font-medium'>Recent Orders</strong>
      <div className='mt-3'>
        <table className='w-full  text-gray-700 border-x border-gray-200 rounded-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product ID</th>
                    <th>Customer Name</th>
                    <th>Order Date</th>
                    <th>Order Total</th>
                    <th>Shipment Address</th>
                    <th>Order Status</th>
                </tr>
            </thead>
            <tbody>
            {recentOrderDetails.map((order) => (
                <tr key={order.id}>
                    <td>
                      <Link to={`./order/${order.id}`}>#{order.id}</Link>
                    </td>
                    <td>
                      <Link to={`./products/${order.product_id}`}>
                        {order.product_id}
                      </Link>
                    </td>
                    <td>
                      <Link to={`./customer/${order.customer_name}`}>
                        {order.customer_name}
                      </Link>
                    </td>
                    <td>{new Date(order.order_date).toLocaleDateString()}</td>
                    <td>{order.order_total}</td>
                    <td>{order.shipment_address}</td>
                    <td>{getOrderStatus(order.Current_order_status)}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
