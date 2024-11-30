import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../Components/LoginButton";
import LogoutButton from "../Components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../Logo.png";

function Header() {
  const { isAuthenticated } = useAuth0();
  
  const logoStyle = {
    height: '50px',
    objectFit: 'contain',
    marginLeft: '20px',
    transform: 'perspective(1000px) rotateY(10deg)',
    transition: 'transform 0.3s ease'
  };

  const navItemStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    padding: '10px 15px',
    borderRadius: '8px',
    background: 'linear-gradient(145deg, #2a2e35, #323741)',
    boxShadow: '5px 5px 15px #1e2127, -5px -5px 15px #363b46'
  };

  return (
    <ul className="nav-list">
      <li className="nav-item">
        <img 
          src={Logo} 
          alt="Ride2Vote Logo" 
          style={logoStyle} 
          onMouseOver={(e) => e.target.style.transform = 'perspective(1000px) rotateY(-10deg)'}
          onMouseOut={(e) => e.target.style.transform = 'perspective(1000px) rotateY(10deg)'}
        />
      </li>
      <li className="nav-item">
        <Link to="/quiz">Quizzes</Link>
      </li>
      <li className="nav-item">
        <Link to="/leaderboard">Leaderboard</Link>
      </li>
      <li className="nav-item">
        <Link to="/Volunteering">Become a Driver</Link>
      </li>
      <li className="nav-item">
        <Link to="/ride-request">Request a Ride</Link>
      </li>
      {isAuthenticated ? (
        <>
          <li className="nav-item">
            <Link to="/profile" className="nav-item">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <LogoutButton />
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <Link to="/signup">Sign up</Link>
          </li>
          <li className="nav-item">
            <LoginButton />
          </li>
        </>
      )}
    </ul>
  );
}

export default Header;
