import React from 'react';
import { Home, HardHat, Settings, Shield, Zap, Clock, IndianRupee, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUsSection() {
  const pillars = [
    {
      icon: <Home size={24} />,
      title: 'Doorstep Service',
      desc: 'We come to your location.'
    },
    {
      icon: <HardHat size={24} />,
      title: 'Experienced Technicians',
      desc: 'Skilled & verified professionals.'
    },
    {
      icon: <Settings size={24} />,
      title: 'Multi-Brand Support',
      desc: 'We service all major washing machine brands.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Customer Focused',
      desc: 'Clear communication and genuine support.'
    }
  ];

  const glassPoints = [
    { icon: <Zap size={18} />, label: 'Genuine Solutions' },
    { icon: <Clock size={18} />, label: 'On-Time Service' },
    { icon: <IndianRupee size={18} />, label: 'Transparent Pricing' },
    { icon: <CheckCircle2 size={18} />, label: 'Customer Satisfaction' }
  ];

  return (
    <section id="why-us" className="why-us-section">
      {/* Dark Washing Machine Drum Background on Right */}
      <div 
        className="why-us-bg-drum"
        style={{ backgroundImage: 'url(/images/drum-dark-bg.jpg)' }}
      ></div>

      <div className="container why-us-grid">
        {/* Left Content */}
        <div className="why-left">
          <div className="why-header">
            <span className="hero-badge-tag">WHY CHOOSE HOMLIX CARE</span>
            <h2 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '12px' }}>
              Trusted Service. Hassle-Free Experience.
            </h2>
            <p className="hero-desc" style={{ marginBottom: 0 }}>
              We focus on your convenience, quality and complete satisfaction.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="why-pillars-grid">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="why-pillar-item">
                <div className="pillar-icon-box">
                  {pillar.icon}
                </div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Floating Glassmorphism Badge Card */}
        <div className="why-right">
          <div className="glass-check-card">
            {glassPoints.map((point, idx) => (
              <div key={idx} className="glass-item">
                <div className="glass-icon-circle">
                  {point.icon}
                </div>
                <span className="glass-item-text">{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
