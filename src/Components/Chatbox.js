import React from "react";

function Chatbox({ onClose }) {
  const chatboxStyle = {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    width: '300px',
    backgroundColor: 'var(--pure-white)',
    borderRadius: '12px',
    boxShadow: 'var(--shadow-lg)',
    zIndex: 1000,
    overflow: 'hidden'
  };

  const headerStyle = {
    background: 'var(--gradient-primary)',
    color: 'var(--pure-white)',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const closeButtonStyle = {
    background: 'none',
    border: 'none',
    color: 'var(--pure-white)',
    cursor: 'pointer',
    fontSize: '18px'
  };

  const chatBodyStyle = {
    padding: '15px',
    maxHeight: '300px',
    overflowY: 'auto'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid var(--gray-300)',
    borderRadius: '4px',
    marginBottom: '10px'
  };

  const sendButtonStyle = {
    width: '100%',
    padding: '10px',
    background: 'var(--gradient-primary)',
    color: 'var(--pure-white)',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={chatboxStyle}>
      <div style={headerStyle}>
        <span>Chat with us!</span>
        <button onClick={onClose} style={closeButtonStyle}>×</button>
      </div>
      <div style={chatBodyStyle}>
        <div className="chat-message">
          <p>How can we help you today?</p>
        </div>
        <input 
          type="text" 
          placeholder="Type your message..." 
          style={inputStyle}
        />
        <button style={sendButtonStyle} className="modern-button">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbox;
