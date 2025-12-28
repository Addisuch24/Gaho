import React, { useEffect, useState } from 'react';
import api from '../services/api';
import '../styles/events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.events.getAll();
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="events-page">
      <div className="container">
        <div className="events-header">
          <h1>Cultural Events & Programs</h1>
          <p>
            Join us for upcoming cultural celebrations, educational workshops, and community gatherings
          </p>
        </div>

        {events.length === 0 ? (
          <div className="no-events">
            <h3>No upcoming events</h3>
            <p>Check back soon for new cultural programs and activities!</p>
          </div>
        ) : (
          <div className="events-list">
            {events.map(event => (
              <div key={event.id} className="event-card">
                <img 
                  src={event.imageUrl} 
                  alt={event.title}
                  className="event-card-image"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/800x250?text=${encodeURIComponent(event.title)}`;
                  }}
                />
                <div className="event-card-content">
                  <h2 className="event-card-title">{event.title}</h2>
                  <div className="event-card-meta">
                    <div className="event-card-meta-item">
                      <span>📅</span>
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="event-card-meta-item">
                      <span>🕐</span>
                      <span>{formatTime(event.date)}</span>
                    </div>
                    <div className="event-card-meta-item">
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="event-card-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
