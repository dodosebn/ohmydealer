import React from 'react';
import { PieChart, Pie } from 'recharts';

const data = [
{ name: 'male', value: 531 },
{ name: "female", value: 532 },
{ name: "other", value: 533 }
];

const BuyerProfileChart = () => {
return (
<div className="md:w-[20rem] w-full h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
<strong className="text-gray-700 font-medium text-align-left">Buyer Profile</strong>
<div className="w-full  mt-3 flex-1 text-xs">
<PieChart width={200} height={200}>
<Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label />
</PieChart>
</div>
</div>
);
}

export default BuyerProfileChart;
