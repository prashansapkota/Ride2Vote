import React, { useState } from "react";
import Chatbox from "../Components/Chatbox";

function Footer() {
  const [isChatboxVisible, setChatboxVisible] = useState(false);

  const footerStyle = {
    backgroundColor: 'var(--primary-black)',
    color: 'var(--primary-white)',
    padding: '1rem',
    cursor: 'pointer'
  };

  const toggleChatbox = () => {
    setChatboxVisible(!isChatboxVisible);
  };

  return (
    <div>
      <ul className="footer" style={footerStyle}>
        <h1 onClick={toggleChatbox}>
          Chat
        </h1>
      </ul>
      {isChatboxVisible && <Chatbox />}
    </div>
  );
}

export default Footer;
