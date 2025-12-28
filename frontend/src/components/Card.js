import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, description, imageUrl, link, onClick }) => {
  const cardContent = (
    <div style={styles.card}>
      {imageUrl && (
        <div style={styles.imageContainer}>
          <img 
            src={imageUrl} 
            alt={title} 
            style={styles.image}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x250?text=' + encodeURIComponent(title);
            }}
          />
        </div>
      )}
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        {description && <p style={styles.description}>{description}</p>}
      </div>
    </div>
  );

  if (link) {
    return (
      <Link to={link} style={styles.link}>
        {cardContent}
      </Link>
    );
  }

  if (onClick) {
    return (
      <div onClick={onClick} style={{ ...styles.link, cursor: 'pointer' }}>
        {cardContent}
      </div>
    );
  }

  return cardContent;
};

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
    height: '100%'
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    backgroundColor: '#f0f0f0'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  content: {
    padding: '1.5rem',
    flex: 1
  },
  title: {
    marginBottom: '0.5rem',
    color: '#333',
    fontSize: '1.25rem'
  },
  description: {
    color: '#666',
    lineHeight: '1.6',
    fontSize: '0.95rem'
  }
};

export default Card;
