// src/pages/Contact.js
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Our Location</h3>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaPhone className="icon" />
            <div>
              <h3>Phone</h3>
              <p>+251 911 123 456</p>
              <p>Mon - Fri, 9:00 AM - 5:00 PM</p>
            </div>
          </div>
          
          <div className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>info@gaho.org</p>
              <p>We'll respond within 24 hours</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn">
            <FaPaperPlane className="btn-icon" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;