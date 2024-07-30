import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Grid, Snackbar } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material'; // Import icons
import NavigationPanel from './NavigationPanel'; // Import NavigationPanel component
import AWSIcon from '../Pics/aws.png'; // Import your AWS icon
import GoogleAnalyticsIcon from '../Pics/google-analytics.svg'; // Import your Google Analytics icon
import FacebookAnalyticsIcon from '../Pics/facebook-analytics.png'; // Import your Facebook Analytics icon
import SalesforceIcon from '../Pics/salesforce.svg'; // Import your Salesforce icon
import '../styling/Plugin.css'; // Import CSS for styling

const Plugin = () => {
  const navigate = useNavigate();
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', suggestion: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [stockhawkEnabled, setStockhawkEnabled] = useState(false);

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
    setFormData({ name: '', email: '', suggestion: '' }); // Clear form data on close
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    handleCloseForm();
  };

  const handleStockhawkToggle = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleToggleStockhawk = (toggle) => {
    setSnackbarOpen(false);
    if (toggle === 'yes') {
      setStockhawkEnabled(true);
    } else {
      setStockhawkEnabled(false);
    }
  };

  return (
    <div className="plugin-page">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <NavigationPanel stockhawkEnabled={stockhawkEnabled} /> {/* Pass the stockhawkEnabled state */}
        </Grid>
        <Grid item xs={9}>
          <div className="plugin-content">
            <Typography variant="h4" gutterBottom style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 'bold', color: '#333' }}>
              Plugins
            </Typography>
            <Typography variant="body1" paragraph style={{ fontFamily: 'Arial, sans-serif', color: '#666' }}>
              Explore and manage your plugins.
            </Typography>

            <div className="plugin-tiles">
              {/* AWS Plugin Tile */}
              <Paper
                className="plugin-tile"
                onClick={() => navigate('/plugins/aws')}
                sx={tileStyle}
              >
                <img src={AWSIcon} alt="AWS" className="plugin-icon" />
                <Typography variant="subtitle1" align="center" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#333' }}>
                  AWS
                </Typography>
              </Paper>

              {/* Google Analytics Plugin Tile */}
              <Paper
                className="plugin-tile"
                onClick={() => navigate('/plugins/google-analytics')}
                sx={tileStyle}
              >
                <img src={GoogleAnalyticsIcon} alt="Google Analytics" className="plugin-icon" />
                <Typography variant="subtitle1" align="center" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#333' }}>
                  Google Analytics
                </Typography>
              </Paper>

              {/* Facebook Analytics Plugin Tile */}
              <Paper
                className="plugin-tile"
                onClick={() => navigate('/plugins/facebook-analytics')}
                sx={tileStyle}
              >
                <img src={FacebookAnalyticsIcon} alt="Facebook Analytics" className="plugin-icon" />
                <Typography variant="subtitle1" align="center" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#333' }}>
                  Facebook Analytics
                </Typography>
              </Paper>

              {/* Salesforce Plugin Tile */}
              <Paper
                className="plugin-tile"
                onClick={() => navigate('/plugins/salesforce')}
                sx={tileStyle}
              >
                <img src={SalesforceIcon} alt="Salesforce" className="plugin-icon" />
                <Typography variant="subtitle1" align="center" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#333' }}>
                  Salesforce
                </Typography>
              </Paper>

              {/* Stockhawk Plugin Tile */}
              <Paper
                className="plugin-tile"
                onClick={handleStockhawkToggle}
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
                <AddIcon style={{ fontSize: 60, color: '#1e90ff' }} />
                <Typography variant="subtitle1" align="center" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#1e90ff' }}>
                  Stockhawk
                </Typography>
              </Paper>

              {/* Add Plugin Tile */}
              <Paper
                className="plugin-tile add-tile"
                onClick={handleOpenForm}
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
                <AddIcon style={{ fontSize: 60, color: '#1e90ff' }} />
                <Typography variant="subtitle1" align="center" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#1e90ff' }}>
                  Add Plugin
                </Typography>
              </Paper>
            </div>

            {/* Dialog for Add Plugin Form */}
            <Dialog open={openForm} onClose={handleCloseForm}>
              <DialogTitle>Add Plugin Suggestion</DialogTitle>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      InputProps={{
                        style: { fontFamily: 'Arial, sans-serif' }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      InputProps={{
                        style: { fontFamily: 'Arial, sans-serif' }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Suggestion"
                      name="suggestion"
                      value={formData.suggestion}
                      onChange={handleChange}
                      InputProps={{
                        style: { fontFamily: 'Arial, sans-serif' }
                      }}
                    />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseForm} style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', color: '#1e90ff' }}>Cancel</Button>
                <Button onClick={handleFormSubmit} variant="contained" color="primary" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
                  Submit
                </Button>
              </DialogActions>
            </Dialog>

            {/* Snackbar for Stockhawk Toggle */}
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
              message="Do you want to toggle Stockhawk application?"
              action={
                <>
                  <Button color="inherit" onClick={() => handleToggleStockhawk('yes')}>Yes</Button>
                  <Button color="inherit" onClick={() => handleToggleStockhawk('no')}>No</Button>
                </>
              }
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Plugin;

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
