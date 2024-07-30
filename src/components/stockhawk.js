import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@mui/material';
import NavigationPanel from './NavigationPanel';
import html2canvas from 'html2canvas';

// Register required components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend);

// Sample data for the charts
const initialStockLevelsData = {
  labels: ['Item A', 'Item B', 'Item C', 'Item D', 'Item E'],
  datasets: [
    {
      label: 'Stock Levels',
      data: [120, 150, 80, 90, 100],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const initialSalesForecastData = {
  labels: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12'],
  datasets: [
    {
      label: 'Sales Forecast',
      data: [150, 130, 90, 110, 95, 120, 140, 160, 110, 115, 130, 140],
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
    },
  ],
};

const initialStockDistributionData = {
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

const initialStockOnHandByClassData = {
  labels: ['Raw Materials', 'Semi Finished Goods', 'Finished Goods'],
  datasets: [
    {
      label: 'Stock On Hand By Class',
      data: [2463, 1642, 4106],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

const initialTemperatureData = {
  labels: ['Warehouse 1', 'Warehouse 2', 'Warehouse 3', 'Warehouse 4', 'Warehouse 5'],
  datasets: [
    {
      label: 'Temperature (°C)',
      data: [22, 20, 23, 21, 24],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
    },
  ],
};

const initialHumidityData = {
  labels: ['Warehouse 1', 'Warehouse 2', 'Warehouse 3', 'Warehouse 4', 'Warehouse 5'],
  datasets: [
    {
      label: 'Humidity (%)',
      data: [55, 60, 58, 57, 62],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
    },
  ],
};

// AI-generated recommendations
const aiRecommendations = [
  "1. Increase the stock levels of Item C and Item D to meet the rising sales trends observed in April and May.",
  "2. Consider redistributing the stock from Item B to Item A to balance the stock distribution and reduce potential overstock.",
  "3. Monitor the sales trends closely to adjust the stock levels dynamically and prevent stockouts.",
  "4. Enhance the inventory management for Finished Goods as they have the highest stock on hand.",
  "5. Implement a predictive model to forecast sales trends and optimize stock levels accordingly.",
  "6. Monitor temperature and humidity levels in warehouses to ensure optimal storage conditions.",
  "7. Use AWS Lookout for Vision to detect and address potential damages in stored items."
];

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
      title: {
        display: true,
        text: 'Time Period',
        color: '#000',
      },
      ticks: {
        color: '#000', // X-axis label color
      },
      grid: {
        display: false,
      },
    },
    y: {
      title: {
        display: true,
        text: 'Sales',
        color: '#000',
      },
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

// Function to capture chart as an image
const exportChart = (chartRef, chartTitle) => {
  html2canvas(chartRef.current).then((canvas) => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `${chartTitle}.png`;
    link.click();
  });
};

const StockhawkDashboard = () => {
  const [selectedItem, setSelectedItem] = useState('Item A');
  const [salesForecastData, setSalesForecastData] = useState(initialSalesForecastData);
  const salesForecastRef = React.useRef(null); // Ref for Sales Forecast chart
  const stockDistributionRef = React.useRef(null); // Ref for Stock Distribution chart
  const stockOnHandByClassRef = React.useRef(null); // Ref for Stock On Hand By Class chart
  const temperatureRef = React.useRef(null); // Ref for Temperature chart
  const humidityRef = React.useRef(null); // Ref for Humidity chart

  // Effect to update sales forecast data when selected item changes
  useEffect(() => {
    // Update the data based on the selected item
    // Replace this with actual data fetching logic
    setSalesForecastData({
      ...initialSalesForecastData,
      datasets: [
        {
          ...initialSalesForecastData.datasets[0],
          data: [150, 130, 90, 110, 95, 120, 140, 160, 110, 115, 130, 140] // Mock data for demonstration
        },
      ],
    });
  }, [selectedItem]);

  const handleItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <Box display="flex">
      <NavigationPanel />
      <Box className="main-content">
        <Container maxWidth="lg" className="stockhawk-container">
          <Typography variant="h4" gutterBottom style={{ color: 'black' }}>
            Inventory Powered by Stockhawk
          </Typography>
          <Grid container spacing={3}> 
            {/* Reverted to original size for the top 4 tiles */}
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box" style={{ padding: '16px' }}>
                <Typography variant="h6">Total Sales</Typography>
                <Typography variant="h4">10,432</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box" style={{ padding: '16px' }}>
                <Typography variant="h6">Total Stock On Hand</Typography>
                <Typography variant="h4">8,211</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box" style={{ padding: '16px' }}>
                <Typography variant="h6">Incoming Stock</Typography>
                <Typography variant="h4">6,812</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper className="metric-box" style={{ padding: '16px' }}>
                <Typography variant="h6">Total Sales Value</Typography>
                <Typography variant="h4">$ 1,234,567</Typography>
              </Paper>
            </Grid>

            {/* Expanded size for chart tiles */}
            <Grid item xs={12} sm={6} md={6}>
              <Paper className="chart-box" style={{ backgroundColor: '#eae8e4', padding: '16px' }}>
                <Typography variant="h6">Sales Forecast</Typography>
                <FormControl fullWidth>
                  <InputLabel>Select Item</InputLabel>
                  <Select
                    value={selectedItem}
                    onChange={handleItemChange}
                    label="Select Item"
                  >
                    <MenuItem value="Item A">Item A</MenuItem>
                    <MenuItem value="Item B">Item B</MenuItem>
                    <MenuItem value="Item C">Item C</MenuItem>
                    <MenuItem value="Item D">Item D</MenuItem>
                    <MenuItem value="Item E">Item E</MenuItem>
                  </Select>
                </FormControl>
                <div ref={salesForecastRef} style={{ height: '300px' }}>
                  <Line data={salesForecastData} options={chartOptions} />
                </div>
                <Button 
                  onClick={() => exportChart(salesForecastRef, 'Sales Forecast')} 
                  variant="contained" 
                  color="primary"
                  style={{ marginTop: '16px' }}
                >
                  Export
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Paper className="chart-box" style={{ backgroundColor: '#eae8e4', padding: '16px' }}>
                <Typography variant="h6">Stock Distribution</Typography>
                <div ref={stockDistributionRef} style={{ height: '300px' }}>
                  <Pie data={initialStockDistributionData} options={chartOptions} />
                </div>
                <Button 
                  onClick={() => exportChart(stockDistributionRef, 'Stock Distribution')} 
                  variant="contained" 
                  color="primary"
                  style={{ marginTop: '16px' }}
                >
                  Export
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Paper className="chart-box" style={{ backgroundColor: '#eae8e4', padding: '16px' }}>
                <Typography variant="h6">Stock On Hand By Class</Typography>
                <div ref={stockOnHandByClassRef} style={{ height: '300px' }}>
                  <Bar data={initialStockOnHandByClassData} options={chartOptions} />
                </div>
                <Button 
                  onClick={() => exportChart(stockOnHandByClassRef, 'Stock On Hand By Class')} 
                  variant="contained" 
                  color="primary"
                  style={{ marginTop: '16px' }}
                >
                  Export
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Paper className="chart-box" style={{ backgroundColor: '#eae8e4', padding: '16px' }}>
                <Typography variant="h6">Temperature in Warehouses</Typography>
                <div ref={temperatureRef} style={{ height: '300px' }}>
                  <Bar data={initialTemperatureData} options={chartOptions} />
                </div>
                <Button 
                  onClick={() => exportChart(temperatureRef, 'Temperature in Warehouses')} 
                  variant="contained" 
                  color="primary"
                  style={{ marginTop: '16px' }}
                >
                  Export
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Paper className="chart-box" style={{ backgroundColor: '#eae8e4', padding: '16px' }}>
                <Typography variant="h6">Humidity in Warehouses</Typography>
                <div ref={humidityRef} style={{ height: '300px' }}>
                  <Bar data={initialHumidityData} options={chartOptions} />
                </div>
                <Button 
                  onClick={() => exportChart(humidityRef, 'Humidity in Warehouses')} 
                  variant="contained" 
                  color="primary"
                  style={{ marginTop: '16px' }}
                >
                  Export
                </Button>
              </Paper>
            </Grid>
          </Grid>
          <Box marginTop={4}>
            <Typography variant="h6">AI-Generated Recommendations:</Typography>
            <List>
              {aiRecommendations.map((recommendation, index) => (
                <ListItem key={index}>
                  <ListItemText primary={recommendation} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default StockhawkDashboard;
