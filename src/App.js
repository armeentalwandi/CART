import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Inventory from './components/Inventory';
import CustomerInsights from './components/CustomerInsights';
import Plugin from './components/Plugin';
import SocialMedia from './components/SocialMedia';
import Profile from './components/Profile';
import SchedulePage from './components/Schedule';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/customer-insights" element={<CustomerInsights />} />
          <Route path="/plugins" element={<Plugin />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
