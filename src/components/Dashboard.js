// src/components/dashboard/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/inventory');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleButtonClick}>Go to Inventory Management Dashboard</button>
    </div>
  );
};

export default Dashboard;
