import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';

// Sample Data
const data = [
  { name: 'Page A', uv: 700, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 350, pv: 2210, amt: 2290 },
  { name: 'Page C', uv: 300, pv: 2290, amt: 2000 },
  { name: 'Page D', uv: 450, pv: 2000, amt: 2181 },
];

// Triangle Shape Function
const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

// Custom Shape Component
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Main Chart Component
const PagesToRead = () => {
  return (
    <div className='flex justify-center py-10 items-center mx-auto'>
    <Helmet>
      <title>
        page to read
      </title>
    </Helmet>
      
      <BarChart width={600} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#00C29C" shape={<TriangleBar />} />
      </BarChart>
    </div>
  );
};

export default PagesToRead;
