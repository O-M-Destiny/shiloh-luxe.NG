import React, { useState, useEffect } from 'react';
import "../index.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMobileMenuOpen]);

  return (
    <header className="header">
      <nav className="nav">
        <div className="container nav-content">
          <div className="logo">
            <h1 className="logo-text">SHILOHLUXE.NG</h1>
            <span className="logo-subtitle">Microblading Studio</span>
          </div>

          <div className={`nav-links ${isMobileMenuOpen ? 'show-mobile-menu' : ''}`}>
            <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
            <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
            <a href="#portfolio" className="nav-link" onClick={closeMenu}>Portfolio</a>
            <a href="#booking" className="nav-link" onClick={closeMenu}>Book</a>
            <a href="#faq" className="nav-link" onClick={closeMenu}>FAQ</a>
            <a href="#location" className="nav-link" onClick={closeMenu}>Location</a>
          </div>

          <div className="mobile-menu-icon" onClick={toggleMenu}>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
