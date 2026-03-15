import React from 'react';
import { motion } from 'framer-motion';
import { GiElephant, GiTeamIdea, GiBookCover, GiEarthSpit } from 'react-icons/gi';
import { FaHandsHelping, FaGlobeAfrica, FaBullseye, FaLightbulb } from 'react-icons/fa';
import '../styles/about.css';

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: 'easeOut'
      } 
    }
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

  const coreValues = [
    {
      icon: <GiElephant className="value-icon" />,
      title: 'Cultural Preservation',
      description: 'Honoring and maintaining the authenticity of Oromo traditions and heritage for future generations.'
    },
    {
      icon: <FaHandsHelping className="value-icon" />,
      title: 'Community',
      description: 'Building strong, inclusive communities that support and uplift one another through shared values.'
    },
    {
      icon: <GiTeamIdea className="value-icon" />,
      title: 'Unity',
      description: 'Celebrating diversity while fostering unity among all Oromo people and beyond.'
    },
    {
      icon: <GiBookCover className="value-icon" />,
      title: 'Education',
      description: 'Promoting knowledge and understanding of Oromo culture, language, and history.'
    },
    {
      icon: <FaGlobeAfrica className="value-icon" />,
      title: 'Sustainability',
      description: 'Ensuring our cultural practices are preserved and sustained for future generations.'
    },
    {
      icon: <FaLightbulb className="value-icon" />,
      title: 'Innovation',
      description: 'Finding creative ways to keep traditions relevant in a modern world.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <h1>About GAHO</h1>
            <p className="lead">
              Preserving the rich cultural heritage of the Oromo people while building bridges between communities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision py-5">
        <div className="container">
          <div className="row g-5">
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="card mission-card h-100">
                <div className="card-body">
                  <div className="icon-wrapper">
                    <FaBullseye className="section-icon" />
                  </div>
                  <h2>Our Mission</h2>
                  <p>
                    GAHO is dedicated to preserving and promoting the rich cultural heritage of the Oromo people 
                    through education, community engagement, and cultural exchange programs. We strive to create 
                    a platform that celebrates Oromo traditions while fostering understanding and appreciation 
                    across diverse communities.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="card vision-card h-100">
                <div className="card-body">
                  <div className="icon-wrapper">
                    <GiEarthSpit className="section-icon" />
                  </div>
                  <h2>Our Vision</h2>
                  <p>
                    To be the leading organization in preserving and promoting Oromo cultural heritage worldwide, 
                    creating a global community that values cultural diversity, mutual respect, and shared 
                    understanding. We envision a future where Oromo traditions thrive and are celebrated by 
                    generations to come.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section py-5 bg-light">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2>Our Core Values</h2>
            <div className="divider mx-auto"></div>
            <p className="lead">Guiding principles that shape our work and community</p>
          </div>
          
          <motion.div 
            className="row g-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                className="col-md-6 col-lg-4"
                variants={fadeInUp}
              >
                <div className="value-card h-100">
                  <div className="value-icon-wrapper">
                    {value.icon}
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;