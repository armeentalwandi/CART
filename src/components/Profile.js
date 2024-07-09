import React from 'react';
import { Box, Container, Grid, Paper, Typography, IconButton } from '@mui/material';
import NavigationPanel from './NavigationPanel'; // Import the NavigationPanel component
import '../styling/Profile.css'; // Import CSS for styling
import logo from '../Pics/loblaw.png'; // Import the company logo
import AddIcon from '@mui/icons-material/Add'; // Import the Add icon

const Profile = () => {
  return (
    <Box display="flex" flexGrow={1} bgcolor="white">
      <NavigationPanel />
      <Box flexGrow={1} marginLeft="250px">
        <Container maxWidth="lg" className="profile-container">
          <Paper className="logo-box">
            <img src={logo} alt="Company Logo" className="company-logo" />
          </Paper>
          <Typography variant="h4" gutterBottom style={{ color: 'black', textAlign: 'center', marginTop: '20px' }}>
            Organizational Overview
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box">
                <Typography variant="h6">Number of Employees</Typography>
                <Typography variant="h4">1,200</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box">
                <Typography variant="h6">Yearly Sales to Date</Typography>
                <Typography variant="h4">$24,500,000</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box">
                <Typography variant="h6">New Customers</Typography>
                <Typography variant="h4">3,450</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box">
                <Typography variant="h6">Customer Satisfaction</Typography>
                <Typography variant="h4">89%</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box">
                <Typography variant="h6">Revenue Growth</Typography>
                <Typography variant="h4">7%</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box">
                <Typography variant="h6">Market Share</Typography>
                <Typography variant="h4">15%</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box plus-tile">
                <IconButton>
                  <AddIcon fontSize="large" />
                </IconButton>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Profile;
