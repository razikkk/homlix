import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BrandsMarquee from './components/BrandsMarquee';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import HowItWorksSection from './components/HowItWorksSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Top Load Washing Machine Repair');
  const [toastMessage, setToastMessage] = useState(null);

  const handleOpenBooking = (serviceName = 'Top Load Washing Machine Repair') => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <div className="homlix-care-app">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="toast-notice">
          <CheckCircle2 size={20} color="#22c55e" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Header & Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* 1. Hero Section */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* Brand Partners Marquee */}
        <BrandsMarquee />

        {/* 2. Services Section */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 3. Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* 4. How It Works Section */}
        <HowItWorksSection />

        {/* Interactive FAQ Section */}
        <FAQSection />
      </main>

      {/* 5. Footer & Contact Bar */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating CTA Buttons */}
      <FloatingActions onOpenBooking={handleOpenBooking} />

      {/* Interactive Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
        onShowToast={showToast}
      />
    </div>
  );
}
