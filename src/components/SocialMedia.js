import { useState, React } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Box, Container, Grid, Paper, Typography, Button } from '@mui/material';
import NavigationPanel from './NavigationPanel'; // Import the NavigationPanel component
import '../styling/SocialMedia.css'; // Import CSS for styling

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

// Sample data for the charts
const adClicksData = {
  labels: ['February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Ad Clicks',
      data: [300, 225, 382, 420, 255, 425],
      backgroundColor: 'rgba(205, 32, 31, 0.6)',
    },
  ],
};

/*
const adCostsData = {
  labels: ['Facebook', 'Instagram', 'YouTube', 'Linkedin', 'Twitter'],
  datasets: [
    {
      label: 'Followers Distribution',
      data: [1000, 2000, 2032, 2000, 1000],
      backgroundColor: [
        'rgba(24, 119, 242, 0.6)',
        'rgba(228, 64, 95, 0.6)',
        'rgba(205, 32, 31, 0.6)',
        'rgba(10, 102, 194, 0.6)',
        'rgba(29, 161, 242, 0.6)',
      ],
    },
  ],
};
*/

const costPerConversionData = {
  labels: ['March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Cost Per Conversion',
      data: [80, 120, 100, 140, 160],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
    },
  ],
};

const followersDistributionData = {
  labels: ['Facebook', 'Instagram', 'YouTube', 'Linkedin', 'Twitter'],
  datasets: [
    {
      label: 'Followers Distribution',
      type: 'doughnut',
      data: [4493, 30000, 8000, 17000, 6000],
      backgroundColor: [
        'rgba(24, 119, 242, 0.6)',
        'rgba(228, 64, 95, 0.6)',
        'rgba(205, 32, 31, 0.6)',
        'rgba(10, 102, 194, 0.6)',
        'rgba(29, 161, 242, 0.6)',
      ],
    },
  ],
};

const socialTrafficData = {
  labels: ['March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Instagram',
      type: 'line',
      data: [800, 1200, 1000, 1400, 1600],
      fill: false,
      borderColor: 'rgba(228, 64, 95, 1)',
    },
    {
      label: 'Linkedin',
      type: 'line', 
      data: [400, 520, 430, 460, 580],
      fill: false,
      borderColor: 'rgba(10, 102, 194, 1)',
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
  /*
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
  */
  maintainAspectRatio: false,
  responsive: true,
  backgroundColor: '#eae8e4', // Chart background color
};

const SocialMedia = () => {
  const [adCostsData, setadCostsData] = useState({
    labels: ['Facebook', 'Instagram', 'YouTube', 'Linkedin', 'Twitter'],
    datasets: [
      {
        label: 'Ad Cost',
        data: [1000, 2000, 2032, 2000, 1000],
        backgroundColor: [
          'rgba(24, 119, 242, 0.6)',
          'rgba(228, 64, 95, 0.6)',
          'rgba(205, 32, 31, 0.6)',
          'rgba(10, 102, 194, 0.6)',
          'rgba(29, 161, 242, 0.6)',
        ],
      },
    ],
  });

  const updateChartData = () => {
    const newData = adCostsData.datasets[0].data.map(() => Math.floor(Math.random() * 500));
    setadCostsData({
      ...adCostsData,
      datasets: [{ ...adCostsData.datasets[0], data: newData }],
    });
  };

  return (
    <Box display="flex" flexGrow={1}>
      <NavigationPanel />
      <Box flexGrow={1} marginLeft="250px">
        <Container maxWidth="lg" className="customer-insights-container">
          <Typography variant="h4" gutterBottom style={{ color: 'black' }}>
            Social Media Dashboard
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box">
                <Typography variant="h6">Total Followers</Typography>
                <Typography variant="h4">65,493</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box">
                <Typography variant="h6">Impressions</Typography>
                <Typography variant="h4">49,814</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box">
                <Typography variant="h6">Ad Costs</Typography>
                <Typography variant="h4">$8,032</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box">
                <Typography variant="h6">Conversion Rate</Typography>
                <Typography variant="h4">3%</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Paper className="chart-box" style={{ backgroundColor: '#eae8e4' }}>
                <Typography variant="h6">Ad Clicks</Typography>
                <Bar data={adClicksData} options={chartOptions} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Paper className="chart-box" style={{ backgroundColor: '#eae8e4' }}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={8}>
                  <Typography variant="h6">Ad Costs Breakdown</Typography>
                </Grid>
                <Grid item xs={4} style={{ textAlign: 'right' }}>
                  <Button variant="contained" onClick={updateChartData}>Update Data</Button>
                </Grid>
              </Grid>
                <Pie data={adCostsData} options={chartOptions}/>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper className="chart-box small-chart-box" style={{ backgroundColor: '#eae8e4' }}>
                <Typography variant="h6">Cost Per Conversion</Typography>
                <Line data={costPerConversionData} options={chartOptions} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="chart-box small-chart-box" style={{ backgroundColor: '#eae8e4' }}>
                <Typography variant="h6">Followers Distribution</Typography>
                <Pie data={followersDistributionData} options={chartOptions} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="chart-box small-chart-box" style={{ backgroundColor: '#eae8e4' }}>
                <Typography variant="h6">Social Traffic</Typography>
                <Line data={socialTrafficData} options={chartOptions} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="chart-box" style={{ backgroundColor: '#eae8e4' }}>
                <Typography variant="h6">AI Recommendations</Typography>
                <Typography variant="h6">TEST</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SocialMedia;
