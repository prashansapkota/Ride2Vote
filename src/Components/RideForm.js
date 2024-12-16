import React, { useState } from "react";
import { motion } from "framer-motion";
import { sharedStyles } from "../styles/SharedStyles";
import { FaMapMarkerAlt, FaClock, FaUsers, FaAccessibleIcon } from 'react-icons/fa';

const RideForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    destination: "",
    pickupTime: "",
    seatsRequired: "1",
    accommodations: {
      hearingImpairment: false,
      visualImpairment: false,
      physicalImpairment: false,
      wheelchairAccess: false,
    }
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAccommodationChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      accommodations: {
        ...prev.accommodations,
        [name]: checked
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Ride request submitted successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const inputGroupStyle = {
    ...sharedStyles.formGroup,
    position: 'relative'
  };

  const iconStyle = {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--primary-blue)',
    fontSize: '18px'
  };

  const inputStyle = {
    ...sharedStyles.input,
    paddingLeft: '40px'
  };

  return (
    <div style={sharedStyles.pageContainer}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={sharedStyles.contentCard}
      >
        <h1 style={sharedStyles.pageTitle}>Request a Ride</h1>

        <form onSubmit={handleSubmit}>
          <div style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>Ride Details</h2>
            
            <div style={inputGroupStyle}>
              <FaMapMarkerAlt style={iconStyle} />
              <input
                type="text"
                name="pickupLocation"
                placeholder="Pickup Location"
                value={formData.pickupLocation}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={inputGroupStyle}>
              <FaMapMarkerAlt style={iconStyle} />
              <input
                type="text"
                name="destination"
                placeholder="Destination"
                value={formData.destination}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={inputGroupStyle}>
              <FaClock style={iconStyle} />
              <input
                type="datetime-local"
                name="pickupTime"
                value={formData.pickupTime}
                onChange={handleChange}
                style={inputStyle}
                required
              />
            </div>

            <div style={inputGroupStyle}>
              <FaUsers style={iconStyle} />
              <select
                name="seatsRequired"
                value={formData.seatsRequired}
                onChange={handleChange}
                style={inputStyle}
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num} seat{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={sharedStyles.section}>
            <h2 style={sharedStyles.sectionTitle}>
              <FaAccessibleIcon style={{ marginRight: '8px' }} />
              Accessibility Needs
            </h2>
            
            <div style={sharedStyles.card}>
              {Object.entries({
                hearingImpairment: "Hearing Impairment Accommodation",
                visualImpairment: "Visual Impairment Accommodation",
                physicalImpairment: "Physical Impairment Accommodation",
                wheelchairAccess: "Wheelchair Accessible Vehicle"
              }).map(([key, label]) => (
                <div key={key} style={{ marginBottom: '12px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="checkbox"
                      name={key}
                      checked={formData.accommodations[key]}
                      onChange={handleAccommodationChange}
                      style={{ width: '18px', height: '18px' }}
                    />
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {successMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                background: 'var(--gradient-primary)',
                color: 'var(--pure-white)',
                padding: '16px',
                borderRadius: '8px',
                textAlign: 'center',
                marginBottom: '20px'
              }}
            >
              {successMessage}
            </motion.div>
          )}

          <motion.button
            type="submit"
            style={sharedStyles.primaryButton}
            whileHover={{ transform: 'translateY(-2px)' }}
            whileTap={{ transform: 'translateY(0)' }}
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default RideForm;
