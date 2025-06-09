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










// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <nav className="navbar-container">
//         <div className="nav-logo">
//         <img src='/images/billia-logo.png' className='logo'/>
//         </div>
//         <div className="nav-links">
//             <ul className="nav-link-list">
//                 <li className="nav-list-item">
//                   <Link href="/" className='nav-list-item'>Home</Link>
//                 </li>
//                 <li className="nav-list-item">
//                   <Link href="/about" className='nav-list-item'>About us</Link>
//                 </li>
//                 <li className="nav-list-item">Features</li>
//                 <li className="nav-list-item">Testimonials</li>
//                 <li className="nav-list-item">FAQ</li>
//                 <li className="nav-list-item">Contact Us</li>
//             </ul>
//         </div>
//     </nav>
//   )
// }
