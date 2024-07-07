// src/components/dashboard/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleButtonClickInventory = (s) => {
    navigate('/inventory');
  };

  const handleButtonClickCI = (s) => {
    navigate('/customer-insights');
  };

  return (
    <div>
      <h2 style={{ color: 'white' }}>Dashboard</h2>
      <button onClick={handleButtonClickInventory}>Go to Inventory Management Dashboard</button>
      <button onClick={handleButtonClickCI}>Go to Customer Insights Dashboard</button>
    </div>
  );
};

export default Dashboard;
