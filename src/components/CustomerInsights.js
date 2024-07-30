// src/components/CustomerInsights.js
import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Box, Container, Grid, Paper, Typography, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import NavigationPanel from './NavigationPanel';
import '../styling/CustomerInsights.css'; // Ensure the path is correct

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

// Initial data for the charts
const initialCustomerDemographicsData = {
  labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
  datasets: [
    {
      label: 'Customer Age Distribution',
      data: [15, 25, 30, 20, 5, 5],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const initialPurchasingBehaviorData = {
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

const initialCustomerEngagementData = {
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

const initialLoyaltyProgramData = {
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
  const [customerProfile, setCustomerProfile] = useState({ name: '', interests: '', age: '', purchase: '', engagement: '', loyalty: '' });
  const [profiles, setProfiles] = useState([]);
  const [customerDemographicsData, setCustomerDemographicsData] = useState({ ...initialCustomerDemographicsData });
  const [purchasingBehaviorData, setPurchasingBehaviorData] = useState({ ...initialPurchasingBehaviorData });
  const [customerEngagementData, setCustomerEngagementData] = useState({ ...initialCustomerEngagementData });
  const [loyaltyProgramData, setLoyaltyProgramData] = useState({ ...initialLoyaltyProgramData });
  const [aiRecommendations, setAIRecommendations] = useState([
    "Consider offering discounts on sports equipment as interest in this category is growing.",
    "Increase marketing efforts on social media to engage with younger demographics.",
    "Enhance mobile app features to boost customer engagement and retention."
  ]);
  const [metrics, setMetrics] = useState({
    totalCustomers: 24532,
    activeUsers: 15423,
    newSignups: 3814,
    churnRate: 2.3
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setCustomerProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProfile = () => {
    if (customerProfile.age) {
      const ageGroup = determineAgeGroup(customerProfile.age);
      updateAgeDistribution(ageGroup);
    }
    if (customerProfile.purchase) {
      updatePurchasingBehavior(customerProfile.purchase);
    }
    if (customerProfile.engagement) {
      updateCustomerEngagement(customerProfile.engagement);
    }
    if (customerProfile.loyalty) {
      updateLoyaltyProgram(customerProfile.loyalty);
    }
    setProfiles((prev) => [...prev, customerProfile]);
    setCustomerProfile({ name: '', interests: '', age: '', purchase: '', engagement: '', loyalty: '' });

    // Increment metrics
    setMetrics(prev => ({
      ...prev,
      totalCustomers: prev.totalCustomers + 1,
      activeUsers: prev.activeUsers + 1,
      newSignups: prev.newSignups + 1,
    }));
  };

  const determineAgeGroup = (age) => {
    if (age >= 18 && age <= 24) return '18-24';
    if (age >= 25 && age <= 34) return '25-34';
    if (age >= 35 && age <= 44) return '35-44';
    if (age >= 45 && age <= 54) return '45-54';
    if (age >= 55 && age <= 64) return '55-64';
    return '65+';
  };

  const updateAgeDistribution = (ageGroup) => {
    setCustomerDemographicsData((prev) => {
      const newData = { ...prev };
      const index = newData.labels.indexOf(ageGroup);
      if (index !== -1) {
        newData.datasets[0].data[index] += 1;
      }
      return { ...newData }; // Ensure new object reference
    });
  };

  const updatePurchasingBehavior = (category) => {
    setPurchasingBehaviorData((prev) => {
      const newData = { ...prev };
      const index = newData.labels.indexOf(category);
      if (index !== -1) {
        newData.datasets[0].data[index] += 1;
      }
      return { ...newData }; // Ensure new object reference
    });
  };

  const updateCustomerEngagement = (channel) => {
    setCustomerEngagementData((prev) => {
      const newData = { ...prev };
      const index = newData.labels.indexOf(channel);
      if (index !== -1) {
        newData.datasets[0].data[index] += 1;
      }
      return { ...newData }; // Ensure new object reference
    });
  };

  const updateLoyaltyProgram = (status) => {
    setLoyaltyProgramData((prev) => {
      const newData = { ...prev };
      const index = newData.labels.indexOf(status);
      if (index !== -1) {
        newData.datasets[0].data[index] += 1;
      }
      return { ...newData }; // Ensure new object reference
    });
  };

  const generateAIRecommendations = () => {
    const highestInterest = getHighestInterest();
    const mostEngagedChannel = getMostEngagedChannel();
    const newRecommendations = [
      `Based on recent inputs, increase marketing efforts on ${mostEngagedChannel} to engage more customers.`,
      `Consider offering promotions on ${highestInterest} as it shows high interest.`,
      "Consider offering discounts on sports equipment as interest in this category is growing.",
      "Increase marketing efforts on social media to engage with younger demographics.",
      "Enhance mobile app features to boost customer engagement and retention."
    ];
    setAIRecommendations(newRecommendations);
  };

  const getHighestInterest = () => {
    const maxValue = Math.max(...purchasingBehaviorData.datasets[0].data);
    const maxIndex = purchasingBehaviorData.datasets[0].data.indexOf(maxValue);
    return purchasingBehaviorData.labels[maxIndex];
  };

  const getMostEngagedChannel = () => {
    const maxValue = Math.max(...customerEngagementData.datasets[0].data);
    const maxIndex = customerEngagementData.datasets[0].data.indexOf(maxValue);
    return customerEngagementData.labels[maxIndex];
  };

  useEffect(() => {
    generateAIRecommendations();
  }, [customerDemographicsData, purchasingBehaviorData, customerEngagementData, loyaltyProgramData]);

  return (
    <Box display="flex" flexGrow={1} className="customer-background">
      <NavigationPanel />
      <Box flexGrow={1} marginLeft="250px">
        <Container maxWidth="lg" className="customer-insights-container">
          <Typography variant="h4" gutterBottom style={{ color: '#E0FFFF', fontFamily: 'Source Code Pro' }}>
            Customer Insights Powered by Datavision
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box" style={{ backgroundColor: '#0096FF', color: '#FFFFFF' }}>
                <Typography variant="h6">Total Customers</Typography>
                <Typography variant="h4">{metrics.totalCustomers}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box" style={{ backgroundColor: '#0096FF', color: '#FFFFFF' }}>
                <Typography variant="h6">Active Users</Typography>
                <Typography variant="h4">{metrics.activeUsers}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box" style={{ backgroundColor: '#0096FF', color: '#FFFFFF' }}>
                <Typography variant="h6">New Signups</Typography>
                <Typography variant="h4">{metrics.newSignups}</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box" style={{ backgroundColor: '#0096FF', color: '#FFFFFF' }}>
                <Typography variant="h6">Churn Rate</Typography>
                <Typography variant="h4">{metrics.churnRate}%</Typography>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className="chart-box" style={{ backgroundColor: '#FFFFFF' }}>
                <Typography variant="h6">Customer Age Distribution</Typography>
                <Bar data={customerDemographicsData} options={chartOptions} />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Paper className="chart-box small-chart-box" style={{ backgroundColor: '#FFFFFF' }}>
                <Typography variant="h6">Purchasing Behavior</Typography>
                <Line data={purchasingBehaviorData} options={chartOptions} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="chart-box small-chart-box" style={{ backgroundColor: '#FFFFFF' }}>
                <Typography variant="h6">Customer Engagement Channels</Typography>
                <Pie data={customerEngagementData} options={chartOptions} />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper className="chart-box small-chart-box" style={{ backgroundColor: '#FFFFFF' }}>
                <Typography variant="h6">Loyalty Program Status</Typography>
                <Bar data={loyaltyProgramData} options={chartOptions} />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className="chart-box" style={{ backgroundColor: '#FFFFFF', minHeight: '700px' }}>
                <Typography variant="h6">Add/Update Customer Profile</Typography>
                <TextField
                  label="Name"
                  name="name"
                  value={customerProfile.name}
                  onChange={handleProfileChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Interests"
                  name="interests"
                  value={customerProfile.interests}
                  onChange={handleProfileChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Age"
                  name="age"
                  type="number"
                  value={customerProfile.age}
                  onChange={handleProfileChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Purchase Category"
                  name="purchase"
                  value={customerProfile.purchase}
                  onChange={handleProfileChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Engagement Channel"
                  name="engagement"
                  value={customerProfile.engagement}
                  onChange={handleProfileChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Loyalty Status"
                  name="loyalty"
                  value={customerProfile.loyalty}
                  onChange={handleProfileChange}
                  fullWidth
                  margin="normal"
                />
                <Button variant="contained" color="primary" onClick={handleAddProfile}>
                  Add Profile
                </Button>
                <List>
                  {profiles.map((profile, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={profile.name} secondary={`Interests: ${profile.interests}, Age: ${profile.age}, Purchase: ${profile.purchase}, Engagement: ${profile.engagement}, Loyalty: ${profile.loyalty}`} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="chart-box" style={{ backgroundColor: '#E0FFFF', padding: '16px' }}>
                <Typography variant="h6" style={{ fontFamily: 'Source Code Pro' }}>AI Recommendations</Typography>
                <Box 
                  display="flex" 
                  flexWrap="wrap" 
                  gap="24px" 
                  justifyContent="center" 
                  mt={2} 
                  padding={2} 
                  bgcolor="#E0FFFF" 
                  borderRadius="12px"
                >
                  {aiRecommendations.map((recommendation, index) => (
                    <Paper 
                      key={`mini-${index}`} 
                      elevation={6} 
                      style={{ 
                        padding: '16px', 
                        width: '150px', 
                        textAlign: 'center', 
                        backgroundColor: '#ffffff', 
                        borderRadius: '12px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                        },
                      }}
                    >
                      <Typography variant="body2">{recommendation}</Typography>
                    </Paper>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default CustomerInsights;
