// API Service Layer - Placeholder for future Node.js API calls
// Currently returns mock data, will be updated to make real API calls when backend is ready

import { regionsData } from '../data/regionsData';

// Configuration
//const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Mock users for authentication testing
const mockUsers = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@gaho.com',
    password: 'admin123', // In real app, this would be hashed
    role: 'admin'
  },
  {
    id: 2,
    username: 'user',
    email: 'user@gaho.com',
    password: 'user123',
    role: 'user'
  }
];

// Mock events data
const mockEvents = [
  {
    id: 1,
    title: 'Oromo Cultural Festival 2024',
    description: 'Annual celebration of Oromo culture featuring music, dance, and traditional food from all regions.',
    date: '2024-03-15T10:00:00',
    location: 'GAHO Cultural Center',
    imageUrl: '/assets/images/event-1.jpg',
    createdBy: 1
  },
  {
    id: 2,
    title: 'Gada System Workshop',
    description: 'Educational workshop on the traditional Gada governance system and its relevance today.',
    date: '2024-04-20T14:00:00',
    location: 'Community Hall',
    imageUrl: '/assets/images/event-2.jpg',
    createdBy: 1
  },
  {
    id: 3,
    title: 'Traditional Coffee Ceremony',
    description: 'Experience the authentic Ethiopian coffee ceremony with cultural storytelling.',
    date: '2024-05-10T16:00:00',
    location: 'GAHO Cultural Center',
    imageUrl: '/assets/images/event-3.jpg',
    createdBy: 1
  },
  {
    id: 4,
    title: 'Irreecha Festival 2024',
    description: 'Annual Oromo Thanksgiving festival celebrating the end of the rainy season and the beginning of the harvest. Join us for traditional songs, dances, and prayers at Hora Finfinnee (Entoto Park).',
    date: '2024-10-06T08:00:00',
    endDate: '2024-10-06T18:00:00',
    location: 'Hora Finfinnee (Entoto Park), Addis Ababa',
    imageUrl: '/irreecha.jpg',
    createdBy: 1,
    isFeatured: true,
    details: {
      schedule: [
        '08:00 - Gathering and traditional songs',
        '10:00 - Traditional prayers and blessings',
        '12:00 - Cultural performances and dances',
        '14:00 - Traditional lunch (Buffet style)',
        '15:30 - Speeches and cultural presentations',
        '17:00 - Closing ceremony and group photo'
      ],
      whatToBring: [
        'Traditional Oromo clothing (if available)',
        'Flowers and green grass (for the ceremony)',
        'Water bottle',
        'Sun protection (hat, sunscreen)'
      ],
      additionalInfo: [
        'Free entry for all',
        'Parking available at designated areas',
        'Food and drinks will be available for purchase',
        'Family-friendly event',
        'Please respect cultural traditions and customs'
      ]
    }
  }
];

// Helper function to simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Authentication API
export const authAPI = {
  // Register new user
  register: async (userData) => {
    await delay(500);
    
    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === userData.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    
    const newUser = {
      id: mockUsers.length + 1,
      username: userData.username,
      email: userData.email,
      password: userData.password,
      role: 'user'
    };
    
    mockUsers.push(newUser);
    
    return {
      success: true,
      message: 'Registration successful',
      data: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role
      }
    };
  },
  
  // Login user
  login: async (credentials) => {
    await delay(500);
    
    const user = mockUsers.find(
      u => u.email === credentials.email && u.password === credentials.password
    );
    
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    // In real app, backend would generate JWT token
    const token = `mock-jwt-token-${user.id}`;
    
    return {
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        },
        token: token
      }
    };
  },
  
  // Logout user
  logout: async () => {
    await delay(300);
    return {
      success: true,
      message: 'Logout successful'
    };
  },
  
  // Get current user
  getCurrentUser: async (token) => {
    await delay(300);
    
    if (!token) {
      throw new Error('No token provided');
    }
    
    // Extract user ID from mock token
    const userId = parseInt(token.split('-').pop());
    const user = mockUsers.find(u => u.id === userId);
    
    if (!user) {
      throw new Error('Invalid token');
    }
    
    return {
      success: true,
      data: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    };
  }
};

// Regions API
export const regionsAPI = {
  // Get all regions
  getAll: async () => {
    await delay(500);
    return {
      success: true,
      data: regionsData
    };
  },
  
  // Get region by slug
  getBySlug: async (slug) => {
    await delay(500);
    const region = regionsData.find(r => r.slug === slug);
    
    if (!region) {
      throw new Error('Region not found');
    }
    
    return {
      success: true,
      data: region
    };
  },
  
  // Create region (admin only)
  create: async (regionData, token) => {
    await delay(500);
    
    const newRegion = {
      id: regionsData.length + 1,
      ...regionData,
      createdAt: new Date().toISOString()
    };
    
    return {
      success: true,
      message: 'Region created successfully',
      data: newRegion
    };
  },
  
  // Update region (admin only)
  update: async (id, regionData, token) => {
    await delay(500);
    
    return {
      success: true,
      message: 'Region updated successfully',
      data: { id, ...regionData }
    };
  },
  
  // Delete region (admin only)
  delete: async (id, token) => {
    await delay(500);
    
    return {
      success: true,
      message: 'Region deleted successfully'
    };
  }
};

// Events API
export const eventsAPI = {
  // Get all events
  getAll: async () => {
    await delay(500);
    return {
      success: true,
      data: mockEvents.sort((a, b) => new Date(a.date) - new Date(b.date))
    };
  },
  
  // Get event by ID
  getById: async (id) => {
    await delay(500);
    const event = mockEvents.find(e => e.id === parseInt(id));
    
    if (!event) {
      throw new Error('Event not found');
    }
    
    return {
      success: true,
      data: event
    };
  },
  
  // Create event (admin only)
  create: async (eventData, token) => {
    await delay(500);
    
    const newEvent = {
      id: mockEvents.length + 1,
      ...eventData,
      createdAt: new Date().toISOString()
    };
    
    mockEvents.push(newEvent);
    
    return {
      success: true,
      message: 'Event created successfully',
      data: newEvent
    };
  },
  
  // Update event (admin only)
  update: async (id, eventData, token) => {
    await delay(500);
    
    return {
      success: true,
      message: 'Event updated successfully',
      data: { id, ...eventData }
    };
  },
  
  // Delete event (admin only)
  delete: async (id, token) => {
    await delay(500);
    
    return {
      success: true,
      message: 'Event deleted successfully'
    };
  }
};

// Gallery API
export const galleryAPI = {
  // Get gallery by region
  getByRegion: async (regionId) => {
    await delay(500);
    
    const region = regionsData.find(r => r.id === parseInt(regionId));
    
    if (!region) {
      throw new Error('Region not found');
    }
    
    return {
      success: true,
      data: region.gallery.map((url, index) => ({
        id: index + 1,
        regionId: region.id,
        mediaUrl: url,
        mediaType: url.includes('.mp4') ? 'video' : 'image',
        caption: `${region.name} cultural media ${index + 1}`
      }))
    };
  },
  
  // Upload media (admin only)
  uploadMedia: async (formData, token) => {
    await delay(1000);
    
    return {
      success: true,
      message: 'Media uploaded successfully',
      data: {
        id: Date.now(),
        mediaUrl: '/assets/images/uploaded-image.jpg',
        mediaType: 'image'
      }
    };
  },
  
  // Delete media (admin only)
  delete: async (id, token) => {
    await delay(500);
    
    return {
      success: true,
      message: 'Media deleted successfully'
    };
  }
};

// Members API
export const membersAPI = {
  // Get all members (admin only)
  getAll: async (token) => {
    await delay(500);
    
    return {
      success: true,
      data: mockUsers.map(u => ({
        id: u.id,
        username: u.username,
        email: u.email,
        role: u.role
      }))
    };
  },
  
  // Update member role (admin only)
  updateRole: async (id, role, token) => {
    await delay(500);
    
    return {
      success: true,
      message: 'Member role updated successfully',
      data: { id, role }
    };
  }
};

// Export all APIs
const api = {
  auth: authAPI,
  regions: regionsAPI,
  events: eventsAPI,
  gallery: galleryAPI,
  members: membersAPI
};

export default api;
