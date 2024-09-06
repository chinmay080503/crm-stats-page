import React, { useState, useEffect } from 'react';
import MyPieChart from './PieChart';
import MyLineChart from './LineChart';
import StatsOverview from './StatsOverview';
import RecentActivity from './RecentActivity';
import Filters from './Filters'; // This acts as the navbar

const Dashboard = ({ selectedFilter, setSelectedFilter }) => {
  const [data, setData] = useState([]); // State for storing data

  useEffect(() => {
    // Fetching data from dummy API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        if (selectedFilter === '1 Day') {
          setData(data.slice(0, 5));
        } else if (selectedFilter === '1 Week') {
          setData(data.slice(0, 10));
        } else {
          setData(data.slice(0, 20));
        }
      });
  }, [selectedFilter]);

  return (
    <div className="p-6 md:p-12 bg-gray-100 min-h-screen">
      <Filters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Data Overview for{' '}
          <span className="text-indigo-600">{selectedFilter}</span>
        </h2>
        <p className="text-gray-600 text-lg">Here is the data based on your selected filter.</p>
      </div>

      <StatsOverview data={data} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg p-6 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Line Chart</h3>
          <MyLineChart data={data} />
        </div>

        <div className="bg-white rounded-lg p-6 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Pie Chart</h3>
          <MyPieChart data={data} />
        </div>
      </div>

      <RecentActivity />
    </div>
  );
};

export default Dashboard;
