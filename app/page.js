"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const res = await fetch('/api/properties');
        const data = await res.json();
        setProperties(data.properties);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      }
    }
    fetchProperties();
  }, []);

  return (
    <>
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <main className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Home</h1>
          <div className="search-bar-placeholder">
            <input type="text" placeholder="Enter a location, property type, or keyword" />
            <button type="submit">Search</button>
          </div>
        </div>
      </main>

      <section className="listings-section">
        <h2>Featured Properties</h2>
        <div className="property-grid">
          {properties.map((property) => (
            <div key={property._id} className="property-card">
              <div className="property-image-placeholder">
                Property Image
              </div>
              <div className="property-card-content">
                <h3>{property.title}</h3>
                <p className="property-location">{property.location}</p>
                <div className="property-details">
                  <span>{property.bedrooms} Beds</span>
                  <span>{property.bathrooms} Baths</span>
                </div>
                <p className="property-price">${property.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}