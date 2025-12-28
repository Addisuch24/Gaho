import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import api from '../services/api';
import '../styles/regions.css';

const Regions = () => {
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await api.regions.getAll();
        setRegions(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching regions:', error);
        setLoading(false);
      }
    };

    fetchRegions();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="regions-page">
      <div className="container">
        <div className="regions-header">
          <h1>Oromo Cultural Regions</h1>
          <p>
            Explore the rich cultural diversity of six Oromo regions, each with unique 
            traditions, practices, and heritage that contribute to our collective identity.
          </p>
        </div>

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
    </div>
  );
};

export default Regions;
