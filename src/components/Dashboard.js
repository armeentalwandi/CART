import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationPanel from './NavigationPanel';
import { Box, Paper, Typography } from '@mui/material';
import { Add as AddIcon, BarChart as BarChartIcon } from '@mui/icons-material'; // Import icons
import { auth } from '../firebase'; // Assuming you've set up auth in firebase.js

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null); // State to hold current user data
  const [inventoryCount, setInventoryCount] = useState(10432); // State for inventory count
  const [churnRate, setChurnRate] = useState(2.3); // State for churn rate

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user); // Set current user state
        console.log('Current User:', user);
        // Simulate fetching data from backend
        // Replace with actual logic to fetch data
        setTimeout(() => {
          setInventoryCount(10432); // Example: Set inventory count
          setChurnRate(2.3); // Example: Set churn rate
        }, 1000); // Simulate delay
      } else {
        setCurrentUser(null); // Reset current user state
      }
    });

    return () => unsubscribe(); // Unsubscribe from the listener when component unmounts
  }, []);

  const handleButtonClickCI = () => {
    navigate('/customer-insights');
  };

  const handleAddTileClick = () => {
    // Handle click for adding a new tile
    // You can implement logic to add a new tile or navigate to a page for adding tiles
    console.log('Add Tile clicked');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100vh', paddingTop: '20px' }}>
      <NavigationPanel />
      <Box
        ml={8} // Margin left for spacing
        p={4} // Padding for the dashboard content
        display="flex"
        flexDirection="column"
        alignItems="flex-start" // Left-align content
      >
        <Typography variant="h4" gutterBottom>
          Welcome, Umer!
        </Typography>
        <Typography variant="body1" paragraph>
          Here's a brief overview of your dashboard.
        </Typography>

        <Box
          display="flex"
          flexWrap="wrap"
          gap={4} // Gap between tiles
        >
          {/* Inventory Tile */}
          <Paper
            className="dashboard-tile"
            onClick={() => navigate('/inventory')}
            sx={tileStyle}
          >
            <Typography variant="h3" align="center">
              {inventoryCount}
            </Typography>
            <Typography variant="subtitle1" align="center">
              Sales
            </Typography>
          </Paper>

          {/* Customer Insights Tile */}
          <Paper
            className="dashboard-tile"
            onClick={handleButtonClickCI}
            sx={tileStyle}
          >
            <Typography variant="h3" align="center">
              {churnRate}%
            </Typography>
            <Typography variant="subtitle1" align="center">
              Churn Rate
            </Typography>
          </Paper>

          {/* Add Tile */}
          <Paper
            className="dashboard-tile add-tile"
            onClick={handleAddTileClick}
            sx={{
              ...tileStyle,
              background: '#f0f0f0',
              color: '#666',
              '&:hover': {
                background: 'linear-gradient(45deg, #1e90ff, #00bfff)',
                color: '#ffffff',
              },
            }}
          >
            <AddIcon style={{ fontSize: 60 }} />
            <Typography variant="subtitle1" align="center">
              Add Tile
            </Typography>
          </Paper>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;

const tileStyle = {
  width: 200,
  height: 200,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'background 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(45deg, #1e90ff, #00bfff)',
    color: '#ffffff',
  },
};
