import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="menu-items">
          <Link href="/buy">Buy</Link>
          <Link href="/rent">Rent</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="logo-container">
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
      </nav>
    </header>
  );
}