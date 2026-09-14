import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        {/* Brand Logo */}
        <a href="#home" className="brand-logo">
          <div className="logo-main">
            homlix <span className="care">care</span>
          </div>
          <span className="logo-tagline">WE SUPPORT. WE REPAIR.</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#home" className="active" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>
                Services
              </a>
            </li>
            <li>
              <a href="#why-us" onClick={(e) => { e.preventDefault(); handleNavClick('why-us'); }}>
                Why Us
              </a>
            </li>
            <li>
              <a href="#faq" onClick={(e) => { e.preventDefault(); handleNavClick('faq'); }}>
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right CTA Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button 
            id="nav-call-btn"
            className="btn-primary"
            onClick={() => onOpenBooking('General Inquiry / Call Request')}
          >
            <Phone size={16} fill="currentColor" />
            <span>Call Now</span>
          </button>
        </div>
      </div>
    </header>
  );
}
