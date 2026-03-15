import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaHandsHelping } from 'react-icons/fa';
import { GiElephant, GiDrum, GiClothes, GiMeal } from 'react-icons/gi';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import api from '../services/api';
import '../styles/home.css';

const Home = () => {
  const [regions, setRegions] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [regionsResponse, eventsResponse] = await Promise.all([
          api.regions.getAll(),
          api.events.getAll()
        ]);
        
        setRegions(regionsResponse.data);
        setEvents(eventsResponse.data.slice(0, 3)); // Show only first 3 events
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-image-container">
          <img src="/borana.jpg" alt="Borana Oromo Cultural Heritage" className="hero-background-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>Preserving the Rich Tapestry of Oromo Heritage</h1>
            <p className="hero-subtitle">
              Celebrating Unity in Diversity Across Borana, Hararghe, Jimma, Guji, Arsi, and Shewa
            </p>
            <div className="hero-cta">
              <Link to="/about" className="btn btn-primary">Learn More</Link>
              <Link to="/events" className="btn btn-outline">Upcoming Events</Link>
            </div>
          </motion.div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="row g-4"
          >
            {[
              { icon: <GiElephant />, title: 'Cultural Preservation', text: 'Documenting and celebrating traditional Oromo customs and practices' },
              { icon: <FaUsers />, title: 'Community Building', text: 'Creating spaces for connection and shared experiences' },
              { icon: <GiDrum />, title: 'Art & Music', text: 'Showcasing traditional Oromo music, dance, and art forms' },
              { icon: <FaHandsHelping />, title: 'Youth Programs', text: 'Educating the next generation about their heritage' }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="col-md-3 col-sm-6"
                variants={fadeInUp}
              >
                <div className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="home-mission py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header">
              <span className="section-subtitle">Our Purpose</span>
              <h2>Preserving Heritage, Building Bridges</h2>
              <div className="divider"></div>
            </div>
            <div className="mission-content">
              <p className="lead">
                GAHO Cultural Club stands as a beacon of Oromo cultural preservation, celebrating the 
                rich tapestry of traditions across all regions while fostering unity and understanding.
              </p>
              <div className="row g-4 mt-4">
                <div className="col-md-6">
                  <div className="mission-point">
                    <div className="point-icon"><GiClothes /></div>
                    <div>
                      <h4>Cultural Heritage</h4>
                      <p>Documenting and celebrating the unique traditions, languages, and customs of each Oromo region.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mission-point">
                    <div className="point-icon"><GiMeal /></div>
                    <div>
                      <h4>Community Engagement</h4>
                      <p>Creating meaningful connections through shared cultural experiences and events.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="home-regions py-5 bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header text-center mb-5">
              <span className="section-subtitle">Cultural Diversity</span>
              <h2>Explore Oromo Regions</h2>
              <div className="divider mx-auto"></div>
              <p className="lead">
                Journey through the rich cultural landscapes of Oromia's diverse regions
              </p>
            </div>
            <div className="regions-grid">
              {regions.map((region, index) => (
                <motion.div
                  key={region.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    title={region.name}
                    description={region.description}
                    imageUrl={region.gallery[0]}
                    link={`/regions/${region.slug}`}
                  />
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-5">
              <Link to="/regions" className="btn btn-outline-primary">View All Regions</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="home-events py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-subtitle">Join Us</span>
            <h2>Upcoming Events</h2>
            <div className="divider mx-auto"></div>
            <p className="lead">Experience Oromo culture through our exciting events and activities</p>
          </div>
          <div className="regions-grid">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  title={event.title}
                  description={event.description}
                  imageUrl={event.imageUrl}
                  link={`/events/${event.id}`}
                />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/events" className="btn btn-primary">View All Events</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
     

      {/* Newsletter Section */}
      <section className="newsletter-section py-5">
        <div className="container">
          <div className="section-header text-center mb-5">
            <span className="section-subtitle">Stay Updated</span>
            <h2>Join Our Newsletter</h2>
            <div className="divider mx-auto"></div>
            <p className="lead">Subscribe to receive updates on events, programs, and cultural news</p>
          </div>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Join Our Community</h2>
          <p>
            Become a member of GAHO Cultural Club and help us preserve our heritage
          </p>
          <div className="cta-buttons">
            <Link to="/register" className="btn btn-primary">
              Register Now
            </Link>
            <Link to="/events" className="btn btn-secondary">
              Explore Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
