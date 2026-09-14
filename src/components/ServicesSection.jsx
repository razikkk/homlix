import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection({ onOpenBooking }) {
  const services = [
    {
      id: 'top-load',
      title: 'Top Load\nWashing Machine',
      image: '/images/topload-washer.jpg',
      alt: 'Top Load Washing Machine',
      desc: 'Repair, service & installation for all top load washing machines.',
      categoryName: 'Top Load Washing Machine Repair'
    },
    {
      id: 'front-load',
      title: 'Front Load\nWashing Machine',
      image: '/images/frontload-washer.jpg',
      alt: 'Front Load Washing Machine',
      desc: 'Expert repair & service for all front load washing machines.',
      categoryName: 'Front Load Washing Machine Repair'
    },
    {
      id: 'semi-automatic',
      title: 'Semi Automatic\nWashing Machine',
      image: '/images/semiauto-washer.jpg',
      alt: 'Semi Automatic Washing Machine',
      desc: 'Reliable service for semi automatic washing machines.',
      categoryName: 'Semi Automatic Washing Machine Repair'
    },
    {
      id: 'installation',
      title: 'Installation &\nUninstallation',
      image: '/images/install-tools.jpg',
      alt: 'Washing Machine Installation & Uninstallation',
      desc: 'Professional installation and uninstallation service at your doorstep.',
      categoryName: 'Installation & Uninstallation'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-row">
          <div>
            <span className="section-subtitle-tag">OUR SERVICES</span>
            <h2 className="section-main-title">Complete Washing Machine Care</h2>
            <p className="section-desc-light">
              Repair, installation and support for all types of washing machines. Professional service at your doorstep.
            </p>
          </div>
          <a 
            href="#services" 
            className="link-all-services"
            onClick={(e) => {
              e.preventDefault();
              onOpenBooking('All Services Consultation');
            }}
          >
            <span>View All Services</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="services-grid">
          {services.map((srv) => (
            <div key={srv.id} className="service-card">
              <div className="service-img-wrap">
                <img 
                  src={srv.image} 
                  alt={srv.alt} 
                  className="service-img" 
                />
              </div>

              <h3 className="service-card-title" style={{ whiteSpace: 'pre-line' }}>
                {srv.title}
              </h3>

              <p className="service-card-desc">
                {srv.desc}
              </p>

              <button 
                id={`book-${srv.id}`}
                className="btn-card"
                onClick={() => onOpenBooking(srv.categoryName)}
              >
                <span>Book Service</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
