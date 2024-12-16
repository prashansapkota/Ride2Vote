import React, { useState } from "react";
import Chatbox from "../Components/Chatbox";
import { FaComments } from 'react-icons/fa';

function Footer() {
  const [isChatboxVisible, setChatboxVisible] = useState(false);

  const footerStyle = {
    backgroundColor: 'var(--primary-blue)',
    color: 'var(--pure-white)',
    padding: '1rem',
    position: 'fixed',
    bottom: 0,
    right: 0,
    zIndex: 999
  };

  const chatButtonStyle = {
    background: 'var(--gradient-primary)',
    border: 'none',
    color: 'var(--pure-white)',
    fontSize: '1.2rem',
    fontWeight: '600',
    cursor: 'pointer',
    padding: '12px 24px',
    borderRadius: '50px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: 'var(--shadow-md)',
    margin: '20px'
  };

  const toggleChatbox = () => {
    setChatboxVisible(!isChatboxVisible);
  };

  return (
    <div className="footer" style={footerStyle}>
      <button 
        onClick={toggleChatbox}
        style={chatButtonStyle}
        className="modern-button"
      >
        <FaComments />
        Chat with us
      </button>
      {isChatboxVisible && <Chatbox onClose={() => setChatboxVisible(false)} />}
    </div>
  );
}

export default Footer;
