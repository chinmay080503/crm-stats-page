import React from 'react';

const StatsOverview = ({ data }) => {
  // Example stats calculation
  const totalItems = data.length;
  const exampleStat = totalItems * 2; // Replace with actual calculation

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Statistics Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-indigo-700">Total Items</h4>
          <p className="text-2xl font-bold text-gray-800">{totalItems}</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold text-green-700">Example Stat</h4>
          <p className="text-2xl font-bold text-gray-800">{exampleStat}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;
