"use client";
import Image from 'next/image';
import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 80 , fill:'#4b49ac'},
  { name: 'Group B', value: 20, fill:'#f3797e' },
];


const Performance = () => {
  return (
    <div className='bg-white p-4 rounded-md h-80 relative'>
        {/* top */}
        <div className='flex justify-between items-center'>
            <h1 className='text-xl semi-extrabold'>Performance</h1>
            <Image src="/moreDark.png" alt="" width={16} height={16} />
        </div>
        {/* chart */}
       <ResponsiveContainer width="100%" height="100%">
            <PieChart>
            <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                fill="#8884d8"
              
            />
            </PieChart>
      </ResponsiveContainer>
       {/* text below and at the center of the chart */}
       <div className='absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2'>
         <h1 className='text-3xl font-bold text-gray-700'>8.0</h1>
       </div>
        <h2 className="font-medium absolute bottom-16 left-0 right-0 m-auto text-center">1st Semester - 2nd Semester</h2>
    </div>
  )
}

export default Performance