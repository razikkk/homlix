import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingActions({ onOpenBooking }) {
  const handleCall = () => {
    window.location.href = 'tel:+917200211032';
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hi Homlix Care, I need repair service for my washing machine.");
    window.open(`https://wa.me/917200211032?text=${text}`, '_blank');
  };

  return (
    <div className="floating-action-bar">
      <button 
        id="floating-call-btn"
        className="btn-primary" 
        style={{ padding: '8px 18px', fontSize: '0.85rem' }}
        onClick={handleCall}
        title="Call Homlix Care"
      >
        <Phone size={15} fill="currentColor" />
        <span>Call Now</span>
      </button>

      <button 
        id="floating-whatsapp-btn"
        className="btn-whatsapp" 
        style={{ padding: '8px 18px', fontSize: '0.85rem' }}
        onClick={handleWhatsApp}
        title="Chat on WhatsApp"
      >
        <MessageSquare size={15} />
        <span>WhatsApp</span>
      </button>
    </div>
  );
}
