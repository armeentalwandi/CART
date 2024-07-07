// src/components/CustomerInsights.js
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import NavigationPanel from './NavigationPanel';
import '../styling/CustomerInsights.css'; // Ensure the path is correct

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

// Sample data for the charts
const customerDemographicsData = {
  labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
  datasets: [
    {
      label: 'Customer Age Distribution',
      data: [15, 25, 30, 20, 5, 5],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const purchasingBehaviorData = {
  labels: ['Electronics', 'Clothing', 'Home & Kitchen', 'Sports', 'Books'],
  datasets: [
    {
      label: 'Purchasing Behavior',
      data: [200, 150, 100, 80, 60],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
    },
  ],
};

const customerEngagementData = {
  labels: ['Email', 'Social Media', 'In-store', 'Website', 'Mobile App'],
  datasets: [
    {
      label: 'Customer Engagement Channels',
      data: [40, 30, 20, 50, 60],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
      ],
    },
  ],
};

const loyaltyProgramData = {
  labels: ['Active', 'Inactive', 'Expired'],
  datasets: [
    {
      label: 'Loyalty Program Status',
      data: [2463, 1642, 4106],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

// Chart options with custom background color
const chartOptions = {
  plugins: {
    legend: {
      display: true,
      labels: {
        color: '#000', // Label color
      },
    },
  },
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#000', // X-axis label color
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        color: '#000', // Y-axis label color
      },
      grid: {
        display: false,
      },
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  backgroundColor: '#eae8e4', // Chart background color
};

const CustomerInsights = () => {
  return (
    <Box display="flex" flexGrow={1}>
      <NavigationPanel />
      <Box flexGrow={1} marginLeft="250px">
        <Container maxWidth="lg" className="customer-insights-container">
          <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
            Customer Insights Dashboard
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box">
                <Typography variant="h6">Total Customers</Typography>
                <Typography variant="h4">24,532</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box">
                <Typography variant="h6">Active Users</Typography>
                <Typography variant="h4">15,423</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box">
                <Typography variant="h6">New Signups</Typography>
                <Typography variant="h4">3,814</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box">
                <Typography variant="h6">Churn Rate</Typography>
                <Typography variant="h4">2.3%</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className="chart-box" style={{ backgroundColor: '#eae8e4' }}>
                <Typography variant="h6">Customer Age Distribution</Typography>
                <Bar data={customerDemographicsData} options={chartOptions} />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper className="chart-box small-chart-box" style={{ backgroundColor: '#eae8e4' }}>
                <Typography variant="h6">Purchasing Behavior</Typography>
                <Line data={purchasingBehaviorData} options={chartOptions} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="chart-box small-chart-box" style={{ backgroundColor: '#eae8e4' }}>
                <Typography variant="h6">Customer Engagement Channels</Typography>
                <Pie data={customerEngagementData} options={chartOptions} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="chart-box small-chart-box" style={{ backgroundColor: '#eae8e4' }}>
                <Typography variant="h6">Loyalty Program Status</Typography>
                <Bar data={loyaltyProgramData} options={chartOptions} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CustomerInsights;
