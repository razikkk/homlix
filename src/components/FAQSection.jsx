import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Which washing machine brands do you service?",
      a: "We service all leading washing machine brands in India including Samsung, LG, Whirlpool, Bosch, IFB, Godrej, Haier, Panasonic, Siemens, and Voltas Beko."
    },
    {
      q: "How soon can a technician visit my doorstep?",
      a: "We offer same-day doorstep service across Vellore and surrounding areas. Once you book a slot, our verified technician usually arrives within 60 to 90 minutes or at your scheduled preferred time."
    },
    {
      q: "Do you provide genuine spare parts with warranty?",
      a: "Yes, we only use 100% genuine and compatible replacement spare parts. All parts replaced during service carry an official service warranty."
    },
    {
      q: "What are your inspection and visiting charges?",
      a: "We offer transparent and nominal inspection pricing. If you approve the repair estimate and proceed with the service, the inspection fee is adjusted against your final bill."
    },
    {
      q: "What types of washing machine problems do you fix?",
      a: "We handle drum issues, water drainage & inlet problems, excessive vibration & noise, PCB motherboard faults, motor replacement, door lock errors, and complete uninstallation/installation."
    }
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-header">
          <span className="section-subtitle-tag">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-main-title" style={{ fontSize: '2.1rem' }}>
            Got Questions? We Have Answers.
          </h2>
          <p className="section-desc-light" style={{ margin: '0 auto' }}>
            Everything you need to know about our doorstep washing machine repair and maintenance services.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-card">
                <button 
                  className="faq-question-btn"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen ? '#0076f7' : '#64748b'
                    }} 
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
