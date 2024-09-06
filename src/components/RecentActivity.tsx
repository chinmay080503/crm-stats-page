import React from 'react';

const RecentActivity = () => {
  const activities = [
    'User X added a new transaction',
    'User Y updated their profile',
    'User Z commented on a post',
    // Add more activities as needed
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg mt-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Activity</h3>
      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li key={index} className="border-b pb-2 text-gray-600">
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
