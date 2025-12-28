import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3>GAHO Cultural Club</h3>
            <p>Preserving Oromo culture and promoting regional unity</p>
          </div>
          
          <div style={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul style={styles.footerLinks}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/regions">Regions</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/register">Join Us</Link></li>
            </ul>
          </div>
          
          <div style={styles.footerSection}>
            <h4>Contact</h4>
            <p>Email: info@gaho.com</p>
            <p>Phone: +251-XXX-XXXX</p>
          </div>
          
          <div style={styles.footerSection}>
            <h4>Follow Us</h4>
            <div style={styles.socialLinks}>
              <a href="#facebook">Facebook</a>
              <a href="#twitter">Twitter</a>
              <a href="#instagram">Instagram</a>
            </div>
          </div>
        </div>
        
        <div style={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} GAHO Cultural Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '3rem 0 1rem',
    marginTop: '4rem'
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem'
  },
  footerSection: {
    marginBottom: '1rem'
  },
  footerLinks: {
    listStyle: 'none',
    padding: 0
  },
  socialLinks: {
    display: 'flex',
    gap: '1rem',
    flexDirection: 'column'
  },
  footerBottom: {
    borderTop: '1px solid #555',
    paddingTop: '1rem',
    textAlign: 'center'
  }
};

export default Footer;
