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
    marginLeft: '20px'
  };

  return (
    <ul className="nav-list">
      <li className="nav-item">
        <img src={Logo} alt="Ride2Vote Logo" style={logoStyle} />
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
