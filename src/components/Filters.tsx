import React from 'react';

const Filters = ({ selectedFilter, setSelectedFilter }) => {
  const filters = ['1 Day', '1 Week', '1 Month'];

  return (
    <nav className="bg-white p-4 mb-8 shadow-md rounded-lg">
      <ul className="flex justify-center space-x-4 md:space-x-8">
        {filters.map(filter => (
          <li key={filter} className="cursor-pointer">
            <button
              className={`px-6 py-2 md:px-8 md:py-3 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow-sm md:shadow-md ${
                selectedFilter === filter
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-gray-900'
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Filters;
