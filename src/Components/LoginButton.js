import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, isLoading, error } = useAuth0();
  
  const loginStyle = {
    background: 'var(--gradient-primary)',
    border: 'none',
    color: 'var(--pure-white)',
    cursor: 'pointer',
    padding: '8px 16px',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    borderRadius: '8px',
  };

  if (error) {
    return <div>Authentication Error: {error.message}</div>;
  }

  if (isLoading) {
    return (
      <button style={loginStyle} disabled className="modern-button">
        <span className="loading-pulse">Loading...</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => loginWithRedirect({
        appState: { returnTo: window.location.pathname }
      })}
      style={loginStyle}
      className="modern-button"
    >
      Log In
    </button>
  );
};

export default LoginButton;
