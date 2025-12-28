import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import '../styles/regions.css';

const RegionDetails = () => {
  const { slug } = useParams();
  const [region, setRegion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegion = async () => {
      try {
        const response = await api.regions.getBySlug(slug);
        setRegion(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching region:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRegion();
  }, [slug]);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error || !region) {
    return (
      <div className="container" style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h2>Region Not Found</h2>
        <p>{error || 'The requested region could not be found.'}</p>
        <Link to="/regions" className="btn btn-primary">
          Back to Regions
        </Link>
      </div>
    );
  }

  return (
    <div className="region-details">
      <div className="region-header">
        <div className="container">
          <h1>{region.name}</h1>
          <p>{region.description}</p>
        </div>
      </div>

      <div className="container">
        <Link to="/regions" className="back-link">
          ← Back to Regions
        </Link>

        <div className="region-content">
          {/* History Section */}
          <div className="region-section">
            <h2>History</h2>
            <p>{region.history}</p>
          </div>

          {/* Cultural Practices Section */}
          <div className="region-section">
            <h2>Cultural Practices</h2>
            <ul>
              {region.practices.map((practice, index) => (
                <li key={index}>{practice}</li>
              ))}
            </ul>
          </div>

          {/* Traditional Clothing Section */}
          <div className="region-section">
            <h2>Traditional Clothing</h2>
            <h3>Men's Attire</h3>
            <p>{region.clothing.men}</p>
            <h3>Women's Attire</h3>
            <p>{region.clothing.women}</p>
          </div>

          {/* Food Section */}
          <div className="region-section">
            <h2>Traditional Food</h2>
            <ul>
              {region.food.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Music Section */}
          <div className="region-section">
            <h2>Music and Dance</h2>
            <h3>Traditional Instruments</h3>
            <ul>
              {region.music.instruments.map((instrument, index) => (
                <li key={index}>{instrument}</li>
              ))}
            </ul>
            <h3>Traditional Dances</h3>
            <ul>
              {region.music.dances.map((dance, index) => (
                <li key={index}>{dance}</li>
              ))}
            </ul>
            <h3>Occasions</h3>
            <p>{region.music.occasions}</p>
          </div>

          {/* Values Section */}
          <div className="region-section">
            <h2>Cultural Values</h2>
            <ul>
              {region.values.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>

          {/* Gallery Section */}
          <div className="region-section">
            <h2>Gallery</h2>
            <div className="region-gallery">
              {region.gallery.map((media, index) => (
                <div key={index} className="gallery-item">
                  {media.includes('.mp4') ? (
                    <video controls>
                      <source src={media} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                      src={media} 
                      alt={`${region.name} ${index + 1}`}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/400x300?text=${region.name}`;
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionDetails;
