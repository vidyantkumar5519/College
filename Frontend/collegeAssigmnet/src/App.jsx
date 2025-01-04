// src/App.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from './ContextApi/Theme/ThemeContext'; // Import the ThemeProvider
import Home from './Home/Home';
import Login from './Login/Login';

const App = () => {
  return (
    <ThemeProvider> {/* Wrap your entire app with ThemeProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
