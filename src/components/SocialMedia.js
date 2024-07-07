import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import NavigationPanel from './NavigationPanel'; // Import the NavigationPanel component
import '../styling/SocialMedia.css'; // Import CSS for styling

const SocialMedia = () => {
  return (
    <Box className="social-media-page">
      <NavigationPanel /> {/* Include NavigationPanel component */}
      <Box className="content">
        <Typography variant="h4" gutterBottom className="page-title">
          Social Media Analytics
        </Typography>
        <Typography variant="body1" paragraph className="page-description">
          Analyze and track your social media performance across various platforms.
        </Typography>
        <Paper className="analytics-overview">
          <Typography variant="h6">Overview</Typography>
          <Typography variant="body2">
            Here you can see an overview of your social media metrics.
          </Typography>
        </Paper>
        {/* Add more content and components for detailed analytics */}
      </Box>
    </Box>
  );
};

export default SocialMedia;
