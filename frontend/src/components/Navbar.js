import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = ({ isAuthenticated, userRole, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          GAHO
        </Link>
        
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
        
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/regions" onClick={closeMenu}>
              Regions
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" onClick={closeMenu}>
              Events
            </NavLink>
          </li>
          
          {isAuthenticated ? (
            <>
              <li>
                <NavLink to="/members" onClick={closeMenu}>
                  Members
                </NavLink>
              </li>
              {userRole === 'admin' && (
                <li>
                  <NavLink to="/admin" onClick={closeMenu}>
                    Admin
                  </NavLink>
                </li>
              )}
              <li>
                <button 
                  className="logout-btn" 
                  onClick={() => {
                    onLogout();
                    closeMenu();
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login" onClick={closeMenu}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" onClick={closeMenu}>
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
