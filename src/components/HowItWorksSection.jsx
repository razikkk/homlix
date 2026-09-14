import React from 'react';
import { Phone, Calendar, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      icon: <Phone size={18} fill="currentColor" />,
      title: 'Book a Service',
      desc: 'Call or WhatsApp us with your issue.'
    },
    {
      num: '02',
      icon: <Calendar size={18} />,
      title: 'Schedule Visit',
      desc: 'Choose a convenient date and time.'
    },
    {
      num: '03',
      icon: <UserCheck size={18} />,
      title: 'Technician Visit',
      desc: 'Our expert visits your location.'
    },
    {
      num: '04',
      icon: <CheckCircle2 size={18} />,
      title: 'Get It Fixed',
      desc: 'Your machine is serviced and ready to use.'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        {/* Header Row */}
        <div className="how-head-row">
          <div>
            <span className="section-subtitle-tag">HOW IT WORKS</span>
            <h2 className="section-main-title">Book. Relax. We'll Take Care.</h2>
            <p className="section-desc-light">
              Getting your washing machine serviced is simple and quick.
            </p>
          </div>

          {/* Script Annotation on Right */}
          <div className="script-annotation-how script-text">
            A<br/>Cleaner<br/>Tomorrow
          </div>
        </div>

        {/* 4 Steps Flow */}
        <div className="how-steps-flow">
          {steps.map((step, idx) => (
            <React.Fragment key={step.num}>
              <div className="how-step-col">
                <div className="step-number-bubble">
                  {step.num}
                </div>
                <div className="step-details">
                  <div className="step-title-row">
                    <span className="step-icon-small">{step.icon}</span>
                    <h4 className="step-name">{step.title}</h4>
                  </div>
                  <p className="step-instruction">{step.desc}</p>
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="how-arrow-divider">
                  <ArrowRight size={20} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
