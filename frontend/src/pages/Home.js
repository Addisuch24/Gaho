import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="container">
          <h1>Welcome to GAHO Cultural Club</h1>
          <p>
            Preserving Oromo culture and promoting regional unity through education, 
            celebration, and community engagement
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="home-mission">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="mission-content">
            <p>
              GAHO Cultural Club is dedicated to preserving and celebrating the rich cultural 
              heritage of the Oromo people. We bring together diverse regional traditions from 
              Borana, Hararghe, Jimma, Guji, Arsi, and Shewa to foster unity while honoring 
              our unique identities.
            </p>
            <p>
              Through cultural events, educational programs, and community initiatives, we 
              ensure that our traditions, values, and wisdom are passed down to future 
              generations while adapting to the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="home-regions">
        <div className="container">
          <h2>Explore Our Regions</h2>
          <p className="text-center mb-2">
            Discover the unique cultural heritage of six Oromo regions
          </p>
          <div className="regions-grid">
            {regions.map(region => (
              <Card
                key={region.id}
                title={region.name}
                description={region.description}
                imageUrl={region.gallery[0]}
                link={`/regions/${region.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="home-events">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="regions-grid">
            {events.map(event => (
              <Card
                key={event.id}
                title={event.title}
                description={event.description}
                imageUrl={event.imageUrl}
              />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/events" className="btn btn-primary">
              View All Events
            </Link>
          </div>
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
