import React from 'react';
import { Phone, MessageSquare, Zap, ShieldCheck, IndianRupee, Users } from 'lucide-react';

export default function HeroSection({ onOpenBooking }) {
  const handleCall = () => {
    window.location.href = 'tel:+917200211032';
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Homlix Care, I need repair service for my washing machine.");
    window.open(`https://wa.me/917200211032?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-glow"></div>
      
      <div className="container hero-grid">
        {/* Left Content */}
        <div className="hero-left">
          <span className="hero-badge-tag">PROFESSIONAL WASHING MACHINE SERVICE</span>
          
          <h1 className="hero-title">
            Washing Machine Repair at
            <span className="blue-text">Your Doorstep</span>
          </h1>

          <p className="hero-desc">
            Fast, reliable and professional washing machine repair, installation and support services. We service all major brands at your home.
          </p>

          {/* 4 Feature Badges Bar */}
          <div className="hero-features-bar">
            <div className="hero-feat-item">
              <Zap className="hero-feat-icon" size={20} />
              <span className="hero-feat-text">Quick<br/>Response</span>
            </div>
            <div className="hero-feat-divider"></div>
            
            <div className="hero-feat-item">
              <ShieldCheck className="hero-feat-icon" size={20} />
              <span className="hero-feat-text">Trusted<br/>Service</span>
            </div>
            <div className="hero-feat-divider"></div>
            
            <div className="hero-feat-item">
              <div className="hero-feat-icon" style={{ fontWeight: 800, fontSize: '1.25rem', lineHeight: 1 }}>₹</div>
              <span className="hero-feat-text">Affordable<br/>Pricing</span>
            </div>
            <div className="hero-feat-divider"></div>
            
            <div className="hero-feat-item">
              <Users className="hero-feat-icon" size={20} />
              <span className="hero-feat-text">Expert<br/>Technicians</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <button 
              id="hero-call-btn"
              className="btn-primary"
              onClick={handleCall}
            >
              <Phone size={18} fill="currentColor" />
              <span>Call Now</span>
            </button>

            <button 
              id="hero-whatsapp-btn"
              className="btn-outline-dark"
              onClick={handleWhatsApp}
            >
              <MessageSquare size={18} />
              <span>WhatsApp</span>
            </button>
          </div>

          <p className="hero-tagline-sub">
            Same Care. Any Brand. Any Problem.
          </p>
        </div>

        {/* Right Visual Area */}
        <div className="hero-right">
          <div className="hero-image-wrap">
            {/* Handwritten Script Accent */}
            <div className="script-annotation-hero script-text">
              Care That<br/>Matters
            </div>

            {/* Technician Image */}
            <img 
              src="/images/hero-technician.jpg" 
              alt="Homlix Care Technician Repairing Washing Machine" 
              className="hero-technician-img"
            />

            {/* Social Proof Pill Badge */}
            <div className="social-proof-pill">
              <div className="avatar-stack">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Customer 1" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Customer 2" />
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="Customer 3" />
              </div>
              <div className="social-proof-content">
                <div className="social-count">
                  500+ <span className="social-stars">★★★★★</span>
                </div>
                <span className="social-label">Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
