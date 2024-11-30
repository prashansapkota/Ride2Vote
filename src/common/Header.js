import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../Logo.png";
import { 
  FaQuestionCircle, 
  FaTrophy, 
  FaCar, 
  FaUserCircle,
  FaSignInAlt,
  FaUserPlus,
  FaHandsHelping
} from 'react-icons/fa';

function Header() {
  const { isAuthenticated } = useAuth0();
  
  const logoStyle = {
    height: '50px',
    objectFit: 'contain',
    marginLeft: '20px',
    transition: 'transform 0.3s ease'
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

  return (
    <nav style={{
      background: 'linear-gradient(to right, #1a1a1a, #2c2c2c)',
      padding: '1rem',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
    }}>
      <ul className="nav-list" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        listStyle: 'none',
        margin: 0,
        padding: 0
      }}>
        <li className="nav-item">
          <img 
            src={Logo} 
            alt="Ride2Vote Logo" 
            style={logoStyle}
          />
        </li>
        <li className="nav-item">
          <Link to="/quiz" style={navItemStyle}>
            <FaQuestionCircle style={iconStyle} />
            Quizzes
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/leaderboard" style={navItemStyle}>
            <FaTrophy style={iconStyle} />
            Leaderboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Volunteering" style={navItemStyle}>
            <FaCar style={iconStyle} />
            Become a Driver
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ride-request" style={navItemStyle}>
            <FaHandsHelping style={iconStyle} />
            Request a Ride
          </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li className="nav-item">
              <Link to="/profile" style={navItemStyle}>
                <FaUserCircle style={iconStyle} />
                Profile
              </Link>
            </li>
            <li className="nav-item" style={{ marginLeft: 'auto' }}>
              <LogoutButton />
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/signup" style={navItemStyle}>
                <FaUserPlus style={iconStyle} />
                Sign up
              </Link>
            </li>
            <li className="nav-item" style={{ marginLeft: 'auto' }}>
              <div style={navItemStyle}>
                <FaSignInAlt style={iconStyle} />
                <LoginButton />
              </div>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Header;
