import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Leaderboard from "../Components/Leaderboard";
import Quiz from "../Components/Quiz";
import participationBadge from '../assets/participate.png';
import quizMaster from '../assets/quiz.png';
import topContributor from '../assets/contributor.png';
import { motion } from "framer-motion";

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

  const handleQuiz = () => {
    setShowSection("quiz");
  };

  const handleLeaderboard = () => {
    setShowSection("leaderboard");
  };

  const handleResources = () => {
    setShowSection("resources");
  };

  const cardStyle = {
    background: 'white',
    padding: '40px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px'
  };

  const buttonStyle = {
    backgroundColor: 'var(--red)',
    color: 'var(--white)',
    padding: '15px 30px',
    borderRadius: '30px',
    border: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '400px',
    margin: '8px 0',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(255, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  };

  const iconStyle = {
    fontSize: '20px',
    marginRight: '8px'
  };

  const headerStyle = {
    background: 'var(--red)',
    padding: '3rem',
    borderRadius: '0 0 30px 30px',
    boxShadow: '0 10px 30px rgba(255, 0, 0, 0.2)',
    marginBottom: '2rem'
  };

  const headerTitleStyle = {
    color: 'var(--black)',
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const headerSubtitleStyle = {
    color: 'var(--black)',
    fontSize: '1.2rem',
    maxWidth: '800px',
    margin: '0 auto',
    opacity: '0.9',
    lineHeight: '1.5'
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const AnimatedText = ({ text }) => {
    return (
      <motion.div
        style={{ display: 'flex', justifyContent: 'center' }}
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            style={{
              display: 'inline-block',
              fontSize: '3.5rem',
              fontWeight: 'bold',
              color: 'var(--black)',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
              margin: '0 2px'
            }}
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.3 }
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="LandingPage">
      <motion.header 
        className="LandingPage-header" 
        style={headerStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatedText text="Welcome to Ride2Vote" />
        <motion.p 
          style={headerSubtitleStyle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Engage in protecting election integrity by participating in our
          Ride2Vote initiative.
        </motion.p>
      </motion.header>

      {showSection === "" && (
        <div className="LandingPage-content">
          <div className="left-column">
            <motion.div 
              style={cardStyle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Need a Ride to Vote?</h2>
              <p>We'll connect you with volunteer drivers in your area</p>
              <motion.button
                onClick={handleRequestRide}
                className="cta-button"
                whileHover={{ scale: 1.05 }}
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
            >
              <h2>Want to Help?</h2>
              <p>Volunteer as a driver and make a difference</p>
              <motion.button
                onClick={handleVolunteerRide}
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Become a Driver
              </motion.button>
            </motion.div>
          </div>

          <div className="right-column">
            <h3 style={{ textAlign: "center" }}>
              Want a cool badge like this?
            </h3>
            <div className="badges">
              <motion.img
                src={participationBadge}
                alt="Participation Badge"
                className="badge-icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <motion.img 
                src={quizMaster} 
                alt="Quiz Master" 
                className="badge-icon"
                whileHover={{ scale: 1.1, rotate: -5 }}
              />
              <motion.img
                src={topContributor}
                alt="Top Contributor"
                className="badge-icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
            </div>

            <p style={{ textAlign: "center" }}>
              You can earn them by sharing rides and taking quizzes!
            </p>

            <div className="badge-links">
              <motion.div 
                className="action-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.button 
                  style={buttonStyle}
                  onClick={handleQuiz}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 6px 20px rgba(255, 0, 0, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span style={iconStyle}>🎯</span>
                  Take the Quiz Challenge!
                </motion.button>

                <motion.button 
                  style={buttonStyle}
                  onClick={handleLeaderboard}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 6px 20px rgba(255, 0, 0, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span style={iconStyle}>🏆</span>
                  Check the Leaderboard
                </motion.button>

                <motion.button 
                  style={buttonStyle}
                  onClick={handleResources}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 6px 20px rgba(255, 0, 0, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span style={iconStyle}>📚</span>
                  Explore Election Resources
                </motion.button>
              </motion.div>

              <motion.div 
                className="impact-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  textAlign: 'center',
                  marginTop: '20px',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <h4 style={{ 
                  color: 'var(--red)',
                  marginBottom: '10px',
                  fontSize: '1.2em'
                }}>
                  Make Your Voice Count!
                </h4>
                <p style={{ 
                  color: 'var(--gray)',
                  fontSize: '0.9em',
                  lineHeight: '1.5'
                }}>
                  Every quiz you take, every ride you share, brings us closer to a stronger democracy. 
                  Join our community of engaged citizens making a real difference!
                </p>
              </motion.div>
            </div>
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

      {showSection === "resources" && (
        <div className="LandingPage-section">
          <button onClick={handleBack}>Back</button>
          <ul>
            <li>
              <a
                href="https://statesuniteddemocracy.org/priorities/election-protection/"
                target="_blank"
                rel="noopener noreferrer"
              >
                States United Democracy Center: Election Protection
              </a>
            </li>
            {/* Keep all existing resource links */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
