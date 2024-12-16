import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCar, FaHandsHelping } from 'react-icons/fa';
import Logo from "../assets/Logo.png";

function LandingPage() {
  const navigate = useNavigate();

  const handleRequestRide = () => navigate("/ride-request");
  const handleVolunteerRide = () => navigate("/Volunteering");

  const pageStyle = {
    position: 'relative',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, var(--primary-blue), var(--dark-navy))',
    overflow: 'hidden'
  };

  const backgroundStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: 'auto',
    opacity: '0.05',
    pointerEvents: 'none',
    zIndex: 0
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    padding: '40px 20px'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '60px',
    color: 'var(--pure-white)'
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    padding: '40px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: 'var(--shadow-lg)',
    maxWidth: '400px',
    width: '100%',
    transition: 'all 0.3s ease'
  };

  const iconStyle = {
    fontSize: '48px',
    marginBottom: '20px',
    color: 'var(--primary-blue)'
  };

  const buttonStyle = {
    background: 'var(--gradient-primary)',
    color: 'var(--pure-white)',
    padding: '15px 30px',
    borderRadius: '30px',
    border: 'none',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'center',
    width: '100%'
  };

  return (
    <div style={pageStyle}>
      <img 
        src={Logo} 
        alt="" 
        style={backgroundStyle} 
        className="background-logo"
      />
      
      <div style={contentStyle}>
        <motion.div
          style={headerStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>
            Welcome to Ride2Vote
          </h1>
          <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>
            Engage in protecting election integrity by participating in our
            Ride2Vote initiative.
          </p>
        </motion.div>

        <div style={cardContainerStyle}>
          <motion.div
            style={cardStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ transform: 'translateY(-10px)' }}
          >
            <FaCar style={iconStyle} />
            <h2 style={{ color: 'var(--primary-blue)', marginBottom: '20px' }}>
              Need a Ride to Vote?
            </h2>
            <p style={{ marginBottom: '30px', color: 'var(--gray-500)' }}>
              We'll connect you with volunteer drivers in your area to ensure you can exercise your right to vote
            </p>
            <motion.button
              onClick={handleRequestRide}
              style={buttonStyle}
              whileHover={{ transform: 'translateY(-2px)' }}
              whileTap={{ transform: 'translateY(0)' }}
            >
              <FaCar /> Request a Ride
            </motion.button>
          </motion.div>

          <motion.div
            style={cardStyle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ transform: 'translateY(-10px)' }}
          >
            <FaHandsHelping style={iconStyle} />
            <h2 style={{ color: 'var(--primary-blue)', marginBottom: '20px' }}>
              Want to Help?
            </h2>
            <p style={{ marginBottom: '30px', color: 'var(--gray-500)' }}>
              Make a difference in your community by volunteering as a driver and helping others access their voting rights
            </p>
            <motion.button
              onClick={handleVolunteerRide}
              style={buttonStyle}
              whileHover={{ transform: 'translateY(-2px)' }}
              whileTap={{ transform: 'translateY(0)' }}
            >
              <FaHandsHelping /> Become a Driver
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
