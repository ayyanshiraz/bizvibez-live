"use client";

import Image from 'next/image';

export default function PropertyGrid({ properties }) {
  return (
    <section className="listings-section">
      <h2>Featured Properties</h2>
      {properties.length === 0 ? (
        <p>No properties are currently available.</p>
      ) : (
        <div className="property-grid">
          {properties.map((property) => (
            <div key={property._id} className="property-card">
              <div className="property-image-container">
                {property.imageUrl ? (
                  <Image
                    src={property.imageUrl}
                    alt={property.title}
                    fill={true}
                    style={{ objectFit: 'cover' }}
                    className="property-image"
                  />
                ) : (
                  <div className="property-image-placeholder">
                    No Image Available
                  </div>
                )}
              </div>
              <div className="property-card-content">
                <h3 className="property-title">{property.title}</h3>
                <p className="property-location">{property.location}</p>
                <div className="property-info-line">
                  <span>{property.bedrooms} Beds, {property.bathrooms} Baths</span>
                </div>
                <p className="property-price">Start From <span>AED {property.price.toLocaleString()}</span></p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}