import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const handleCall = () => {
    window.location.href = 'tel:+917200211032';
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Homlix Care, I would like to book a washing machine repair service.");
    window.open(`https://wa.me/917200211032?text=${text}`, '_blank');
  };

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        {/* Top Row: Brand, Nav Links & Contact Info */}
        <div className="footer-top-row">
          {/* Brand Logo */}
          <a href="#home" className="brand-logo" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            <div className="logo-main">
              homlix <span className="care">care</span>
            </div>
            <span className="logo-tagline">WE SUPPORT. WE REPAIR.</span>
          </a>

          {/* Nav Links */}
          <ul className="footer-nav-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>Home</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Services</a></li>
            <li><a href="#why-us" onClick={(e) => { e.preventDefault(); handleNavClick('why-us'); }}>Why Us</a></li>
            <li><a href="#faq" onClick={(e) => { e.preventDefault(); handleNavClick('faq'); }}>FAQ</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>Contact</a></li>
          </ul>

          {/* Contact Items */}
          <div className="footer-contact-items">
            <a href="tel:+917200211032" className="footer-contact-item">
              <Phone size={16} className="icon" />
              <span>+91 72002 11032</span>
            </a>

            <a href="mailto:homlixcare@gmail.com" className="footer-contact-item">
              <Mail size={16} className="icon" />
              <span>homlixcare@gmail.com</span>
            </a>

            <div className="footer-contact-item">
              <MapPin size={16} className="icon" />
              <span>Vellore, Tamil Nadu</span>
            </div>
          </div>
        </div>

        {/* Bottom Row: Disclaimer, Copyright & Action Buttons */}
        <div className="footer-bottom-row">
          <div className="footer-legal-wrap">
            <p className="footer-disclaimer">
              Disclaimer: Homlix Care is an independent, multi-brand washing machine repair and customer support service provider. We are not affiliated with or authorized by any manufacturer. Brand names are used only for reference.
            </p>
            <p className="footer-copyright">
              © 2026 Homlix Care. All rights reserved.
            </p>
          </div>

          <div className="footer-cta-buttons">
            <button 
              id="footer-call-btn"
              className="btn-primary" 
              onClick={handleCall}
            >
              <Phone size={16} fill="currentColor" />
              <span>Call Now</span>
            </button>

            <button 
              id="footer-whatsapp-btn"
              className="btn-whatsapp" 
              onClick={handleWhatsApp}
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
