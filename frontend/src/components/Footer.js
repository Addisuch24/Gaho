import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.footerTop}>
        <div style={styles.footerContent}>
          <div style={styles.footerSection}>
            <h3 style={styles.logo}>GAHO</h3>
            <p style={styles.aboutText}>
              Preserving and celebrating the rich cultural heritage of the Oromo people through events, education, and community engagement.
            </p>
            <div style={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
                <FaInstagram />
              </a>
            </div>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.sectionTitle}>Quick Links</h4>
            <ul style={styles.footerLinks}>
              <li style={styles.listItem}><Link to="/" style={styles.link}>Home</Link></li>
              <li style={styles.listItem}><Link to="/about" style={styles.link}>About Us</Link></li>
              <li style={styles.listItem}><Link to="/events" style={styles.link}>Events</Link></li>
              <li style={styles.listItem}><Link to="/gallery" style={styles.link}>Gallery</Link></li>
              <li style={styles.listItem}><Link to="/membership" style={styles.link}>Membership</Link></li>
              <li style={styles.listItem}><Link to="/contact" style={styles.link}>Contact</Link></li>
            </ul>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.sectionTitle}>Contact Info</h4>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <FaMapMarkerAlt style={styles.contactIcon} />
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div style={styles.contactItem}>
                <FaEnvelope style={styles.contactIcon} />
                <a href="mailto:info@gahocc.org" style={styles.contactLink}>info@gahocc.org</a>
              </div>
              <div style={styles.contactItem}>
                <FaPhone style={styles.contactIcon} />
                <a href="tel:+251911223344" style={styles.contactLink}>+251 911 223 344</a>
              </div>
              <div style={styles.contactItem}>
                <FaClock style={styles.contactIcon} />
                <span>Mon - Fri: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>

          <div style={styles.footerSection}>
            <h4 style={styles.sectionTitle}>Newsletter</h4>
            <p style={styles.newsletterText}>Subscribe to our newsletter for the latest updates and events.</p>
            <form style={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Your email address" 
                style={styles.newsletterInput}
                required 
              />
              <button type="submit" style={styles.newsletterButton}>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      
      <div style={styles.footerBottom}>
        <div style={styles.container}>
          <p style={styles.copyright}>
            &copy; {currentYear} GAHO Cultural Club. All Rights Reserved.
          </p>
          <div style={styles.legalLinks}>
            <Link to="/privacy-policy" style={styles.legalLink}>Privacy Policy</Link>
            <span style={styles.divider}>|</span>
            <Link to="/terms" style={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    color: '#ffffff',
    lineHeight: 1.6,
    fontFamily: '"Poppins", sans-serif',
    marginTop: '4rem',
  },
  footerTop: {
    padding: '4rem 5%',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    marginBottom: '2rem',
  },
  footerSection: {
    marginBottom: '1.5rem',
  },
  logo: {
    color: '#fff',
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '1rem',
    letterSpacing: '1px',
  },
  aboutText: {
    color: '#b3b3b3',
    marginBottom: '1.5rem',
    fontSize: '0.95rem',
  },
  socialIcons: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  socialIcon: {
    color: '#fff',
    fontSize: '1.5rem',
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#4CAF50',
    },
  },
  sectionTitle: {
    color: '#fff',
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    position: 'relative',
    paddingBottom: '0.5rem',
    '::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '50px',
      height: '2px',
      backgroundColor: '#4CAF50',
    },
  },
  footerLinks: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: '0.8rem',
  },
  link: {
    color: '#b3b3b3',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease, padding-left 0.3s ease',
    display: 'block',
    ':hover': {
      color: '#4CAF50',
      paddingLeft: '5px',
    },
  },
  contactInfo: {
    marginTop: '1rem',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1rem',
    color: '#b3b3b3',
    fontSize: '0.95rem',
  },
  contactIcon: {
    marginRight: '10px',
    color: '#4CAF50',
    marginTop: '4px',
    minWidth: '20px',
  },
  contactLink: {
    color: '#b3b3b3',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#4CAF50',
    },
  },
  newsletterText: {
    color: '#b3b3b3',
    marginBottom: '1.5rem',
    fontSize: '0.95rem',
  },
  newsletterForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  newsletterInput: {
    padding: '12px 15px',
    border: '1px solid #333',
    borderRadius: '4px',
    backgroundColor: '#2a2a2a',
    color: '#fff',
    fontSize: '0.9rem',
    '::placeholder': {
      color: '#888',
    },
    ':focus': {
      outline: 'none',
      borderColor: '#4CAF50',
    },
  },
  newsletterButton: {
    padding: '12px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: '600',
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    letterSpacing: '0.5px',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#3e8e41',
    },
  },
  footerBottom: {
    backgroundColor: '#111',
    padding: '1.5rem 5%',
    borderTop: '1px solid #333',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'left',
    },
  },
  copyright: {
    color: '#888',
    fontSize: '0.9rem',
    margin: '0.5rem 0',
  },
  legalLinks: {
    display: 'flex',
    gap: '1rem',
    marginTop: '0.5rem',
    '@media (min-width: 768px)': {
      marginTop: '0',
    },
  },
  legalLink: {
    color: '#888',
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.3s ease',
    ':hover': {
      color: '#4CAF50',
    },
  },
  divider: {
    color: '#555',
  },
};

export default Footer;
