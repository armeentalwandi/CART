import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import NavLink for routing
import { Box, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StorageIcon from '@mui/icons-material/Storage';
import BarChartIcon from '@mui/icons-material/BarChart';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import ExtensionIcon from '@mui/icons-material/Extension'; // Import ExtensionIcon for Plugins
import AddIcon from '@mui/icons-material/Add'; // Import AddIcon for Add button
import SocialMediaIcon from '@mui/icons-material/TrendingUp'; // Import an icon for Social Media Analytics
import ScheduleIcon from '@mui/icons-material/CalendarMonth'; // Import an icon for Social Media Analytics
import '../styling/NavigationPanel.css'; // Import the CSS file
import logo from '../Pics/logo.png'; // Ensure the path to your logo is correct
import { signOut } from 'firebase/auth'; // Import signOut function from firebase/auth
import { auth } from '../firebase'; // Import the auth instance from your firebase config

const NavigationPanel = () => {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);

  const [draggingIndex, setDraggingIndex] = useState(null);
  const [buttons, setButtons] = useState([
    { id: 'home', label: 'Home', icon: <HomeIcon fontSize="small" /> },
    { id: 'inventory', label: 'Inventory', icon: <StorageIcon fontSize="small" /> },
    { id: 'customerInsights', label: 'Customer Insights', icon: <BarChartIcon fontSize="small" /> },
    { id: 'socialMediaAnalytics', label: 'Social Media Analytics', icon: <SocialMediaIcon fontSize="small" /> },
    { id: 'profile', label: 'Profile', icon: <AccountCircleIcon fontSize="small" /> },
    { id: 'help', label: 'Help', icon: <HelpIcon fontSize="small" /> },
    { id: 'plugins', label: 'Plugins', icon: <ExtensionIcon fontSize="small" /> },
    { id: 'schedule', label: 'Schedule', icon: <ScheduleIcon fontSize="small" /> },
    { id: 'add', label: 'Add', icon: <AddIcon fontSize="small" /> },
  ]);

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDragOver = (index) => {
    if (draggingIndex === null || draggingIndex === index) return;

    const updatedButtons = [...buttons];
    const draggedButton = updatedButtons[draggingIndex];
    updatedButtons.splice(draggingIndex, 1);
    updatedButtons.splice(index, 0, draggedButton);

    setButtons(updatedButtons);
    setDraggingIndex(index);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  const handleButtonClick = (id) => {
    switch (id) {
      case 'home':
        navigate('/dashboard');
        break;
      case 'inventory':
        navigate('/inventory');
        break;
      case 'customerInsights':
        navigate('/customer-insights');
        break;
      case 'socialMediaAnalytics':
        navigate('/social-media');
        break;
      case 'profile':
        navigate('/profile');
        break;
      case 'help':
        navigate('/help');
        break;
      case 'plugins':
        navigate('/plugins');
        break;
      case 'schedule':
        navigate('/schedule');
        break;
      case 'signout':
        handleSignOut();
        break;
      default:
        // handle other cases
        break;
    }
    setSelectedButton(id);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Sign out error:', error);
      });
  };

  return (
    <Paper className="navigation-panel">
      <div className="logo-container">
        <img src={logo} alt="Cart Logo" className="navigation-logo" />
      </div>
      <Box p={2} width="100%" display="flex" flexDirection="column" alignItems="flex-start">
        {buttons.map((button, index) => (
          <div
            key={button.id}
            className={`navigation-button ${selectedButton === button.id ? 'selected' : ''}`}
            onClick={() => handleButtonClick(button.id)}
            draggable={button.id !== 'signout'} // Disable drag for 'Sign Out' button
            onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)}
            onDragEnd={handleDragEnd}
          >
            {button.icon}
            <span style={{ marginLeft: 8 }}>{button.label}</span>
          </div>
        ))}
        <hr className="navigation-divider" /> {/* Horizontal divider */}
        <div
          className={`navigation-button ${selectedButton === 'signout' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('signout')}
        >
          <ExitToAppIcon fontSize="small" />
          <span style={{ marginLeft: 8 }}>Sign Out</span>
        </div>
      </Box>
    </Paper>
  );
};

export default NavigationPanel;
