// src/components/Inventory.js
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import '../styling/Inventory.css'; // Ensure the path is correct

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

// Sample data for the charts
const stockLevelsData = {
  labels: ['Item A', 'Item B', 'Item C', 'Item D', 'Item E'],
  datasets: [
    {
      label: 'Stock Levels',
      data: [120, 150, 80, 90, 100],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const salesTrendsData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Sales Trends',
      data: [65, 59, 80, 81, 56],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
    },
  ],
};

const stockDistributionData = {
  labels: ['Item A', 'Item B', 'Item C', 'Item D', 'Item E'],
  datasets: [
    {
      label: 'Stock Distribution',
      data: [120, 150, 80, 90, 100],
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

const stockOnHandByClassData = {
  labels: ['Raw Materials', 'Semi Finished Goods', 'Finished Goods'],
  datasets: [
    {
      label: 'Stock On Hand By Class',
      data: [2463, 1642, 4106],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const Inventory = () => {
  return (
    <Container maxWidth="lg" className="inventory-container">
      <Typography variant="h4" gutterBottom>
        Inventory Management Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="metric-box">
            <Typography variant="h6">Sales</Typography>
            <Typography variant="h4">10,432</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="metric-box">
            <Typography variant="h6">Stock On Hand</Typography>
            <Typography variant="h4">8,211</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="metric-box">
            <Typography variant="h6">Inbound Supply</Typography>
            <Typography variant="h4">6,812</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className="metric-box">
            <Typography variant="h6">Accounts Payable</Typography>
            <Typography variant="h4">8,211</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className="chart-box">
            <Typography variant="h6">Sales / Stock On Hand / Stock Turns</Typography>
            <Line data={salesTrendsData} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Paper className="chart-box small-chart-box">
            <Typography variant="h6">Stock Levels</Typography>
            <Bar data={stockLevelsData} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className="chart-box small-chart-box">
            <Typography variant="h6">Stock Distribution</Typography>
            <Pie data={stockDistributionData} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className="chart-box small-chart-box">
            <Typography variant="h6">Stock On Hand By Class</Typography>
            <Bar data={stockOnHandByClassData} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Inventory;
