import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
{ Month: "Jan", Expenses: 100, Income: 101 },
{ Month: "Feb", Expenses: 200, Income: 202 },
{ Month: "Mar", Expenses: 300, Income: 303 },
{ Month: "Apr", Expenses: 400, Income: 404 },
{ Month: "May", Expenses: 500, Income: 505 },
{ Month: "Jun", Expenses: 600, Income: 606 },
{ Month: "Jul", Expenses: 700, Income: 707 },
{ Month: "Aug", Expenses: 800, Income: 808 },
{ Month: "Sep", Expenses: 900, Income: 909 },
{ Month: "Oct", Expenses: 1000, Income: 1001 },
];

const TransactionChart = () => {
return (
<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col md:flex-1">
<strong className="text-gray-700 font-medium">Transactions</strong>
<div className="md:w-full w-[23rem] mt-3 flex-1 text-xs">
<ResponsiveContainer width="100%" height="100%">
<BarChart
data={data}
margin={{
top: 5,
right: 30,
left: 20,
bottom: 5,
}}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="Month" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="Income" fill="#8884d8" />
<Bar dataKey="Expenses" fill="#82ca9d" />
</BarChart>
</ResponsiveContainer>
</div>
</div>
);
}

export default TransactionChart;