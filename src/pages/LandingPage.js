import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Leaderboard from "../Components/Leaderboard";
import Quiz from "../Components/Quiz";
import { motion } from "framer-motion";
import { FaCar, FaHandsHelping } from 'react-icons/fa';

function LandingPage() {
  const [showSection, setShowSection] = useState("");
  const navigate = useNavigate();

  const handleBack = () => {
    setShowSection("");
  };

  const handleRequestRide = () => {
    navigate("/ride-request");
  };

  const handleVolunteerRide = () => {
    navigate("/Volunteering");
  };

  const cardStyle = {
    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
    padding: '40px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)'
  };

  const iconStyle = {
    fontSize: '48px',
    marginBottom: '20px',
    color: 'var(--primary-red)'
  };

  const cardTitleStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: 'var(--primary-black)'
  };

  const cardTextStyle = {
    fontSize: '16px',
    color: 'var(--primary-gray)',
    marginBottom: '24px',
    lineHeight: '1.6'
  };

  const buttonStyle = {
    background: 'var(--primary-red)',
    color: 'white',
    padding: '12px 30px',
    borderRadius: '30px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 59, 48, 0.2)'
  };

  const headerStyle = {
    background: 'var(--red)',
    padding: '3rem',
    borderRadius: '0 0 30px 30px',
    boxShadow: '0 10px 30px rgba(255, 0, 0, 0.2)',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const headerTitleStyle = {
    color: 'var(--black)',
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  };

  const headerSubtitleStyle = {
    color: 'var(--black)',
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
    opacity: '0.9',
    lineHeight: '1.5'
  };

  return (
    <div className="LandingPage">
      <header className="LandingPage-header" style={headerStyle}>
        <h1 style={headerTitleStyle}>Welcome to Ride2Vote</h1>
        <p style={headerSubtitleStyle}>
          Engage in protecting election integrity by participating in our
          Ride2Vote initiative.
        </p>
      </header>

      {showSection === "" && (
        <div className="LandingPage-content">
          <div className="main-actions">
            <motion.div 
              style={cardStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
              }}
            >
              <FaCar style={iconStyle} />
              <h2 style={cardTitleStyle}>Need a Ride to Vote?</h2>
              <p style={cardTextStyle}>
                We'll connect you with volunteer drivers in your area to ensure you can exercise your right to vote
              </p>
              <motion.button
                onClick={handleRequestRide}
                style={buttonStyle}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 6px 20px rgba(255, 59, 48, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Request a Ride
              </motion.button>
            </motion.div>

            <motion.div 
              style={cardStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)'
              }}
            >
              <FaHandsHelping style={iconStyle} />
              <h2 style={cardTitleStyle}>Want to Help?</h2>
              <p style={cardTextStyle}>
                Make a difference in your community by volunteering as a driver and helping others access their voting rights
              </p>
              <motion.button
                onClick={handleVolunteerRide}
                style={buttonStyle}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 6px 20px rgba(255, 59, 48, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Driver
              </motion.button>
            </motion.div>
          </div>
        </div>
      )}

      {showSection === "leaderboard" && (
        <div className="LandingPage-section">
          <button onClick={handleBack}>Back</button>
          <Leaderboard />
        </div>
      )}

      {showSection === "quiz" && (
        <div className="LandingPage-section">
          <button onClick={handleBack}>Back</button>
          <Quiz />
        </div>
      )}
    </div>
  );
}

export default LandingPage;
