import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StorageIcon from '@mui/icons-material/Storage';
import BarChartIcon from '@mui/icons-material/BarChart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import '../styling/NavigationPanel.css'; // Import the CSS file
import logo from '../Pics/logo.png'; // Ensure the path to your logo is correct
import { signOut } from 'firebase/auth'; // Import signOut function from firebase/auth
import { auth } from '../firebase'; // Import the auth instance from your firebase config

const NavigationPanel = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleHomeClick = () => {
    navigate('/dashboard');
    setSelectedButton('home');
  };

  const handleButtonClickInventory = () => {
    navigate('/inventory');
    setSelectedButton('inventory');
  };

  const handleButtonClickCI = () => {
    navigate('/customer-insights');
    setSelectedButton('customerInsights');
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      console.error('Sign out error:', error);
    });
  };

  return (
    <Paper className="navigation-panel">
      <div className="logo-container">
        <img src={logo} alt="Cart Logo" className="navigation-logo" />
      </div>
      <Box p={2} width="100%" display="flex" flexDirection="column" alignItems="flex-start">
        <button
          className={`navigation-button ${selectedButton === 'home' ? 'selected' : ''}`}
          onClick={handleHomeClick}
        >
          <HomeIcon style={{ marginRight: 8 }} fontSize="small" /> Home
        </button>
        <button
          className={`navigation-button ${selectedButton === 'inventory' ? 'selected' : ''}`}
          onClick={handleButtonClickInventory}
        >
          <StorageIcon style={{ marginRight: 8 }} fontSize="small" /> Inventory
        </button>
        <button
          className={`navigation-button ${selectedButton === 'customerInsights' ? 'selected' : ''}`}
          onClick={handleButtonClickCI}
        >
          <BarChartIcon style={{ marginRight: 8 }} fontSize="small" /> Customer Insights
        </button>
        <hr className="navigation-divider" /> {/* Horizontal divider */}
        <button className="navigation-button" onClick={handleSignOut}>
          <ExitToAppIcon style={{ marginRight: 8 }} fontSize="small" /> Sign Out
        </button>
      </Box>
    </Paper>
  );
};

export default NavigationPanel;
