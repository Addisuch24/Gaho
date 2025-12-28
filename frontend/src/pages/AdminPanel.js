import React, { useState, useEffect } from 'react';
import api from '../services/api';
import '../styles/admin.css';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [regions, setRegions] = useState([]);
  const [events, setEvents] = useState([]);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Form states
  const [eventForm, setEventForm] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    imageUrl: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const [regionsRes, eventsRes, membersRes] = await Promise.all([
        api.regions.getAll(),
        api.events.getAll(),
        api.members.getAll(token)
      ]);
      
      setRegions(regionsRes.data);
      setEvents(eventsRes.data);
      setMembers(membersRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  const handleEventFormChange = (e) => {
    setEventForm({
      ...eventForm,
      [e.target.name]: e.target.value
    });
  };

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await api.events.create(eventForm, token);
      alert('Event created successfully!');
      setEventForm({
        title: '',
        description: '',
        date: '',
        location: '',
        imageUrl: ''
      });
      fetchData();
    } catch (error) {
      alert('Error creating event: ' + error.message);
    }
  };

  const handleDeleteEvent = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        const token = localStorage.getItem('token');
        await api.events.delete(id, token);
        alert('Event deleted successfully!');
        fetchData();
      } catch (error) {
        alert('Error deleting event: ' + error.message);
      }
    }
  };

  const renderDashboard = () => (
    <div>
      <div className="admin-dashboard">
        <div className="admin-card">
          <h3>Total Regions</h3>
          <div className="admin-card-number">{regions.length}</div>
          <p>Cultural regions</p>
        </div>
        <div className="admin-card">
          <h3>Total Events</h3>
          <div className="admin-card-number">{events.length}</div>
          <p>Upcoming events</p>
        </div>
        <div className="admin-card">
          <h3>Total Members</h3>
          <div className="admin-card-number">{members.length}</div>
          <p>Registered users</p>
        </div>
      </div>

      <div className="admin-section">
        <h2>Quick Actions</h2>
        <p>Use the tabs above to manage regions, events, media, and members.</p>
      </div>
    </div>
  );

  const renderRegions = () => (
    <div className="admin-section">
      <h2>Manage Regions</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Slug</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {regions.map(region => (
            <tr key={region.id}>
              <td>{region.name}</td>
              <td>{region.slug}</td>
              <td>{region.description.substring(0, 50)}...</td>
              <td className="admin-actions">
                <button className="btn-edit">Edit</button>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderEvents = () => (
    <div className="admin-section">
      <h2>Manage Events</h2>
      
      <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Create New Event</h3>
      <form onSubmit={handleCreateEvent} className="admin-form">
        <div className="form-group">
          <label>Event Title</label>
          <input
            type="text"
            name="title"
            value={eventForm.title}
            onChange={handleEventFormChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={eventForm.description}
            onChange={handleEventFormChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date and Time</label>
          <input
            type="datetime-local"
            name="date"
            value={eventForm.date}
            onChange={handleEventFormChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={eventForm.location}
            onChange={handleEventFormChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={eventForm.imageUrl}
            onChange={handleEventFormChange}
            placeholder="/assets/images/event.jpg"
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Event</button>
      </form>

      <h3 style={{ marginTop: '3rem', marginBottom: '1rem' }}>Existing Events</h3>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{new Date(event.date).toLocaleDateString()}</td>
              <td>{event.location}</td>
              <td className="admin-actions">
                <button className="btn-edit">Edit</button>
                <button 
                  className="btn-delete"
                  onClick={() => handleDeleteEvent(event.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderGallery = () => (
    <div className="admin-section">
      <h2>Manage Gallery</h2>
      <p>Upload and manage photos and videos for regional galleries.</p>
      
      <div className="form-group" style={{ marginTop: '2rem' }}>
        <label>Upload Media</label>
        <input type="file" accept="image/*,video/*" />
      </div>
      <button className="btn btn-primary">Upload</button>
      
      <p style={{ marginTop: '2rem', color: '#666' }}>
        Gallery management functionality will be fully implemented when backend is connected.
      </p>
    </div>
  );

  const renderMembers = () => (
    <div className="admin-section">
      <h2>Manage Members</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map(member => (
            <tr key={member.id}>
              <td>{member.username}</td>
              <td>{member.email}</td>
              <td>{member.role}</td>
              <td className="admin-actions">
                <button className="btn-edit">Change Role</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-header">
          <h1>Admin Panel</h1>
          <p>Manage content, events, and members</p>
        </div>

        <div className="admin-tabs">
          <button
            className={`admin-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`admin-tab ${activeTab === 'regions' ? 'active' : ''}`}
            onClick={() => setActiveTab('regions')}
          >
            Regions
          </button>
          <button
            className={`admin-tab ${activeTab === 'events' ? 'active' : ''}`}
            onClick={() => setActiveTab('events')}
          >
            Events
          </button>
          <button
            className={`admin-tab ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            Gallery
          </button>
          <button
            className={`admin-tab ${activeTab === 'members' ? 'active' : ''}`}
            onClick={() => setActiveTab('members')}
          >
            Members
          </button>
        </div>

        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'regions' && renderRegions()}
        {activeTab === 'events' && renderEvents()}
        {activeTab === 'gallery' && renderGallery()}
        {activeTab === 'members' && renderMembers()}
      </div>
    </div>
  );
};

export default AdminPanel;
