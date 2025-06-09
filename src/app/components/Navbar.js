/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar-container">
      <div className="nav-logo">
        <img src="/images/billia-logo.png" className="logo" alt="Billia Logo" />
      </div>

      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </div>

      <ul className={`nav-link-list ${menuOpen ? 'mobile-open' : ''}`}>
        <li className="nav-list-item">
          <Link href="/" className="nav-list-item" onClick={closeMenu}>Home</Link>
        </li>
        <li className="nav-list-item">
          <Link href="/about" className="nav-list-item" onClick={closeMenu}>About us</Link>
        </li>
        <li className="nav-list-item" onClick={closeMenu}>Features</li>
        <li className="nav-list-item" onClick={closeMenu}>Testimonials</li>
        <li className="nav-list-item" onClick={closeMenu}>FAQ</li>
        <li className="nav-list-item" onClick={closeMenu}>Contact Us</li>
      </ul>
    </nav>
  );
}


