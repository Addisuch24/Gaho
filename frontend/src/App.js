import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Regions from './pages/Regions';
import RegionDetails from './pages/RegionDetails';
import Events from './pages/Events';
import Members from './pages/Members';
import AdminPanel from './pages/AdminPanel';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import api from './services/api';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (token && storedUser) {
      try {
        // Verify token is still valid
        const response = await api.auth.getCurrentUser(token);
        setUser(response.data);
        setIsAuthenticated(true);
      } catch (error) {
        // Token is invalid, clear storage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = async () => {
    try {
      await api.auth.logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
    
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Navbar 
          isAuthenticated={isAuthenticated} 
          userRole={user?.role}
          onLogout={handleLogout}
        />
        
        <main style={{ minHeight: 'calc(100vh - 200px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/regions" element={<Regions />} />
            <Route path="/regions/:slug" element={<RegionDetails />} />
            <Route path="/events" element={<Events />} />
            <Route 
              path="/login" 
              element={
                isAuthenticated ? 
                  <Navigate to="/members" replace /> : 
                  <Login onLogin={handleLogin} />
              } 
            />
            <Route 
              path="/register" 
              element={
                isAuthenticated ? 
                  <Navigate to="/members" replace /> : 
                  <Register />
              } 
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/members" 
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Members user={user} />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute 
                  isAuthenticated={isAuthenticated}
                  requiredRole="admin"
                  userRole={user?.role}
                >
                  <AdminPanel />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
