// components/PropertyGrid.js
import Image from 'next/image';
import styles from './PropertyGrid.module.css';

const PropertyGrid = ({ properties }) => {
  return (
    <div className={styles.propertyGrid}>
      {properties.map((property) => (
        <div key={property.id} className={styles.propertyCard}>
          {/* This block contains the corrected Image component */}
          {property.image && (
            <div className={styles.propertyImage}>
              <Image
                src={property.image}
                alt={property.title}
                width={500}
                height={300}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
          
          <div className={styles.propertyInfo}>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <div className={styles.details}>
              <span>{property.bedrooms} Beds, {property.bathrooms} Baths</span>
            </div>
            <p className={styles.price}>
              Start From <span>PKR {property.price.toLocaleString()}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyGrid;