// src/components/NavigationPanel.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import '../styling/NavigationPanel.css'; // Import the CSS file
import logo from '../Pics/logo.png'; // Ensure the path to your logo is correct

const NavigationPanel = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <Paper 
      sx={{
        width: '250px',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#000', // Black background color
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
        paddingTop: '20px'
      }}
    >
      <img src={logo} alt="Cart Logo" className="navigation-logo" />
      <Box p={2} width="100%" display="flex" flexDirection="column" alignItems="center">
        <button className="navigation-button" onClick={handleBackClick}>
          Back to Dashboard
        </button>
        {/* Add more buttons here if needed */}
      </Box>
    </Paper>
  );
};

export default NavigationPanel;
