import { useState } from "react";
import { Box, Container, Grid, Paper, Typography, Button, List, ListItem, ListItemText, TextField, InputAdornment } from '@mui/material';
import Calendar from 'react-calendar';
import NavigationPanel from './NavigationPanel';
import '../styling/Schedule.css'; // Import CSS for styling
import '../styling/Calendar.css'; // Import CSS for styling

const SchedulePage = () => {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState({});
  const [inputTask, setInputTask] = useState('');
  const [inputTime, setInputTime] = useState('');

  const formatDate = (date) => {
    return date.toISOString().split('T')[0]; // Formats date to YYYY-MM-DD
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleInputTaskChange = (event) => {
    setInputTask(event.target.value);
  };

  const handleInputTimeChange = (event) => {
    setInputTime(event.target.value);
  };

  const handleAddTask = () => {
    if (inputTask.trim() && inputTime.trim()) {
      const dateStr = formatDate(date);
      setTasks(prevTasks => ({
        ...prevTasks,
        [dateStr]: [...(prevTasks[dateStr] || []), { task: inputTask, time: inputTime }]
      }));
      setInputTask('');
      setInputTime('');
    }
  };

  const handleRemoveTask = (taskToRemove) => {
    const dateStr = formatDate(date);
    setTasks(prevTasks => ({
      ...prevTasks,
      [dateStr]: prevTasks[dateStr].filter(task => task !== taskToRemove)
    }));
  };

  const currentTasks = tasks[formatDate(date)] || [];

  const [events, setEvents] = useState([
    `Training Workshop: Technical skills, August 5th`,
    `Networking event: Business card exchange, September 3rd`,
    'Annual town hall meeting: September 22nd',
  ]);

  const [reports, setReports] = useState([
    `1. Task performance highlights: High completion rate of morning tasks involving planning, low completion rate of evening tasks involving analytical work.`,
    `2. Productivity Analysis: Most productive during 10AM - 12PM, least productive during 4PM - 5PM, average task completion rate is 90%.`,
    '3. AI-Generated suggestions for next month: Optimize task performance by moving analytical work to your most productive hours, improve task completion rate by breaking down evening tasks into smaller morning tasks.',
  ]);

  return (
    <Box display="flex" flexDirection="row" minHeight="100vh">
      <NavigationPanel />
      <Box flexGrow={1} marginLeft="250px">
        <Container maxWidth="lg" className="schedule-container">
          <Typography variant="h4" gutterBottom className="page-title">
            Schedule Dashboard Powered by TimeValet
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} className="calendar-container">
                <Typography variant="h6" gutterBottom align="center" className="calendar-title">
                  Calendar
                </Typography>
                <Calendar
                  onChange={handleDateChange}
                  value={date}
                  className="custom-calendar"
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} className="tasks-container">
                <Typography variant="h6" gutterBottom align="center" className="tasks-title">
                  Task List for {formatDate(date)}
                </Typography>
                <TextField
                  label="New Task"
                  variant="outlined"
                  fullWidth
                  value={inputTask}
                  onChange={handleInputTaskChange}
                  className="task-input"
                  margin="normal"
                />
                <TextField
                  label="Time (HH:MM)"
                  variant="outlined"
                  fullWidth
                  value={inputTime}
                  onChange={handleInputTimeChange}
                  className="task-input"
                  margin="normal"
                  InputProps={{
                    startAdornment: <InputAdornment position="start">⏰</InputAdornment>,
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddTask}
                  fullWidth
                  className="add-task-button"
                >
                  Add Task
                </Button>
                <List className="task-list">
                  {currentTasks.map((taskObj, index) => (
                    <ListItem key={index} className="task-list-item">
                      <ListItemText primary={`${taskObj.task} at ${taskObj.time}`} />
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleRemoveTask(taskObj)}
                        className="remove-task-button"
                      >
                        Remove
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className="tasks-container" style={{ backgroundColor: '#eae8e4' }}>
              <Typography variant="h6" gutterBottom align="center" className="tasks-title">
                  Events
                </Typography>
                <List>
                  {events.map((ev, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={ev} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className="tasks-container" style={{ backgroundColor: '#eae8e4' }}>
              <Typography variant="h6" gutterBottom align="center" className="tasks-title">
                  Report
                </Typography>
                <List>
                  {reports.map((rep, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={rep} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default SchedulePage;
