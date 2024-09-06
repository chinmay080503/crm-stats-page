import React, { useState } from 'react';
import Dashboard from './components/Dashboard';

function App() {
  const [selectedFilter, setSelectedFilter] = useState('1 Day');

  return (
    <div className="App bg-gradient-to-b from-teal-500 to-blue-900 min-h-screen text-gray-100">
      <Dashboard selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
    </div>
  );
}

export default App;

