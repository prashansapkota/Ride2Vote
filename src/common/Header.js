import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../Logo.png";
import * as FaIcons from 'react-icons/fa';

function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const logoStyle = {
    height: '50px',
    objectFit: 'contain',
    marginLeft: '20px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  };

  const logoContainerStyle = {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
  };

  const navItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    color: '#FFFFFF',
    textDecoration: 'none',
    background: 'rgba(255, 255, 255, 0.1)'
  };

  const iconStyle = {
    fontSize: '18px'
  };

  const navStyle = {
    background: 'var(--gradient-primary)',
    padding: '1rem',
    boxShadow: 'var(--shadow-lg)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const enhancedNavItemStyle = {
    ...navItemStyle,
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(8px)',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'var(--pure-white)',
  };

  const navItemHoverStyle = {
    background: 'rgba(255, 255, 255, 0.25)',
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-md)',
  };

  return (
    <nav style={navStyle}>
      <ul className="nav-list" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li className="nav-item">
          <Link 
            to="/" 
            style={logoContainerStyle}
            className="hover-scale"
          >
            <img 
              src={Logo} 
              alt="Ride2Vote Logo" 
              style={logoStyle}
            />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/quiz" style={enhancedNavItemStyle}>
            <FaIcons.FaQuestionCircle style={iconStyle} />
            Quizzes
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/leaderboard" style={enhancedNavItemStyle}>
            <FaIcons.FaTrophy style={iconStyle} />
            Leaderboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Volunteering" style={enhancedNavItemStyle}>
            <FaIcons.FaCar style={iconStyle} />
            Become a Driver
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ride-request" style={enhancedNavItemStyle}>
            <FaIcons.FaHandsHelping style={iconStyle} />
            Request a Ride
          </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li className="nav-item">
              <Link to="/profile" style={enhancedNavItemStyle}>
                <FaIcons.FaUserCircle style={iconStyle} />
                Profile
              </Link>
            </li>
            <li className="nav-item" style={{ marginLeft: 'auto' }}>
              <div style={enhancedNavItemStyle}>
                <FaIcons.FaSignInAlt style={iconStyle} />
                <LogoutButton />
              </div>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/signup" style={enhancedNavItemStyle}>
                <FaIcons.FaUserPlus style={iconStyle} />
                Sign up
              </Link>
            </li>
            <li className="nav-item" style={{ marginLeft: 'auto' }}>
              <Link 
                to="/login" 
                style={enhancedNavItemStyle}
                className="hover-scale"
              >
                <FaIcons.FaSignInAlt style={iconStyle} />
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Header;
