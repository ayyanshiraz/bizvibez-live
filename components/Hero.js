// components/Hero.js
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <video autoPlay loop muted className={styles.heroVideo}>
        {/* Corrected video path */}
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className={styles.overlay}>
        <header className={styles.header}>
          <div className={styles.logo}>BIZVIBEZ</div> {/* I've updated the logo to match your project name */}
          <nav className={styles.nav}>
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">BUY</a>
            <a href="#">RENT</a>
            <a href="#">CONTACT</a>
          </nav>
        </header>

        <div className={styles.heroContent}>
          <h1>Search Luxury Homes In UAE</h1> {/* Updated for current location */}
          <p>Truly local, truly expert.</p>
          
          <div className={styles.searchBar}>
            <div className={styles.tabs}>
              <button className={styles.active}>For Rent</button>
              <button>For Sale</button>
              <button>Off Plan</button>
            </div>
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Property Type..." />
              <input type="text" placeholder="Search by Location or Property ID..." />
              <button className={styles.searchButton}>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;