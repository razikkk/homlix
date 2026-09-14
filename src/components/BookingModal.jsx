import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle, MessageSquare, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, preselectedService, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: preselectedService || 'Top Load Washing Machine Repair',
    brand: 'Samsung',
    issue: 'Spinning / Water Draining Issue',
    preferredDate: new Date().toISOString().split('T')[0],
    preferredTime: 'Morning (9:00 AM - 12:00 PM)',
    address: 'Vellore, Tamil Nadu'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Trigger confetti animation
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    onShowToast(`🎉 Booking confirmed for ${formData.name}! Our technician will visit on ${formData.preferredDate}.`);
    
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `*New Washing Machine Service Request - Homlix Care*\n` +
      `👤 *Name:* ${formData.name || 'Customer'}\n` +
      `📞 *Phone:* ${formData.phone || 'Not provided'}\n` +
      `🧺 *Service:* ${formData.serviceType}\n` +
      `🏷️ *Brand:* ${formData.brand}\n` +
      `⚠️ *Issue:* ${formData.issue}\n` +
      `📅 *Date:* ${formData.preferredDate}\n` +
      `⏰ *Time Slot:* ${formData.preferredTime}\n` +
      `📍 *Location:* ${formData.address}`
    );
    window.open(`https://wa.me/917200211032?text=${text}`, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#ecfdf5',
              color: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto'
            }}>
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Service Scheduled!
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '20px' }}>
              Thank you, <strong>{formData.name}</strong>. Our certified technician is assigned and will contact you at <strong>{formData.phone}</strong> before arrival.
            </p>
            <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0', fontSize: '0.88rem', color: '#334155' }}>
              📅 <strong>Date:</strong> {formData.preferredDate} | ⏰ <strong>Slot:</strong> {formData.preferredTime}
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '22px' }}>
              <span className="section-subtitle-tag" style={{ color: '#0076f7' }}>HOMLIX CARE DOORSTEP SERVICE</span>
              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginTop: '4px' }}>
                Book a Technician Visit
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                Fill out the details below for quick priority scheduling in Vellore.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label htmlFor="serviceType">Service Type</label>
                  <select 
                    id="serviceType"
                    name="serviceType" 
                    className="form-select"
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    <option value="Top Load Washing Machine Repair">Top Load Washing Machine</option>
                    <option value="Front Load Washing Machine Repair">Front Load Washing Machine</option>
                    <option value="Semi Automatic Washing Machine Repair">Semi Automatic Washing Machine</option>
                    <option value="Installation & Uninstallation">Installation & Uninstallation</option>
                    <option value="General Inspection / Not Working">General Inspection / Not Working</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="brand">Brand</label>
                  <select 
                    id="brand"
                    name="brand" 
                    className="form-select"
                    value={formData.brand}
                    onChange={handleChange}
                  >
                    <option value="Samsung">Samsung</option>
                    <option value="LG">LG</option>
                    <option value="Whirlpool">Whirlpool</option>
                    <option value="Bosch">Bosch</option>
                    <option value="IFB">IFB</option>
                    <option value="Godrej">Godrej</option>
                    <option value="Haier">Haier</option>
                    <option value="Panasonic">Panasonic</option>
                    <option value="Siemens">Siemens</option>
                    <option value="Other Brand">Other Brand</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="issue">Common Issue</label>
                <select 
                  id="issue"
                  name="issue" 
                  className="form-select"
                  value={formData.issue}
                  onChange={handleChange}
                >
                  <option value="Spinning / Water Draining Issue">Spinning / Water Draining Issue</option>
                  <option value="Water Leakage / Inlet Pipe Issue">Water Leakage / Inlet Pipe Issue</option>
                  <option value="Machine Not Starting / Power Issue">Machine Not Starting / Power Issue</option>
                  <option value="Excessive Vibration & Loud Noise">Excessive Vibration & Loud Noise</option>
                  <option value="Error Code Displayed on Screen">Error Code Displayed on Screen</option>
                  <option value="Drum Not Rotating / Motor Issue">Drum Not Rotating / Motor Issue</option>
                  <option value="New Machine Installation / Relocation">New Machine Installation / Relocation</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    id="name"
                    type="text" 
                    name="name" 
                    className="form-input" 
                    placeholder="e.g. Ramesh Kumar"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    id="phone"
                    type="tel" 
                    name="phone" 
                    className="form-input" 
                    placeholder="e.g. +91 98765 43210"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="form-group">
                  <label htmlFor="preferredDate">Preferred Date</label>
                  <input 
                    id="preferredDate"
                    type="date" 
                    name="preferredDate" 
                    className="form-input"
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="preferredTime">Preferred Time Slot</label>
                  <select 
                    id="preferredTime"
                    name="preferredTime" 
                    className="form-select"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  >
                    <option value="Morning (9:00 AM - 12:00 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4:00 PM - 8:00 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Service Address (Vellore Area)</label>
                <input 
                  id="address"
                  type="text" 
                  name="address" 
                  className="form-input" 
                  placeholder="e.g. Katpadi / Gandhinagar / Bagayam, Vellore"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '22px' }}>
                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ flex: 1, padding: '14px', borderRadius: '12px' }}
                >
                  <CheckCircle size={18} />
                  <span>Confirm Booking</span>
                </button>

                <button 
                  type="button" 
                  className="btn-whatsapp" 
                  style={{ padding: '14px 18px', borderRadius: '12px' }}
                  onClick={handleSendToWhatsApp}
                  title="Send to WhatsApp directly"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
