// components/Header.js
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css'; // Import the new CSS module

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Logo on the left */}
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image 
            src="/logo.png"
            alt="BizVibez Properties Logo"
            width={180}
            height={60}
            priority
          />
        </Link>
      </div>

      {/* Navigation on the right */}
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <div className={styles.dropdown}>
          <Link href="/about" className={styles.dropbtn}>About</Link>
          <div className={styles.dropdownContent}>
            <Link href="/about/about-us">About Us</Link>
            <Link href="/about/team">Our Team</Link>
            <Link href="/about/services">Our Services</Link>
          </div>
        </div>
        <Link href="/buy">Buy</Link>
        <Link href="/rent">Rent</Link>
        <Link href="/off-plan">Off Plan</Link>
        <Link href="/sell">Sell</Link>
        <Link href="/land-for-sale">Land for sale</Link>
        <Link href="/area-guides">Area Guides</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}