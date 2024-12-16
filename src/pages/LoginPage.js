import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaUserSecret } from 'react-icons/fa';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation - no actual authentication
    if (formData.email && formData.password) {
      navigate('/');
    } else {
      setError('Please fill in all fields');
    }
  };

  const handleGuestAccess = () => {
    navigate('/');
  };

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'var(--gradient-primary)',
    padding: '20px'
  };

  const formStyle = {
    background: 'var(--pure-white)',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: 'var(--shadow-lg)',
    width: '100%',
    maxWidth: '400px'
  };

  const inputGroupStyle = {
    position: 'relative',
    marginBottom: '20px'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 40px',
    border: '2px solid var(--gray-200)',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    outline: 'none',
    background: 'var(--gray-100)'
  };

  const iconStyle = {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'var(--primary-blue)',
    fontSize: '18px'
  };

  const loginButtonStyle = {
    width: '100%',
    padding: '12px',
    background: 'var(--primary-blue)',
    color: 'var(--pure-white)',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '20px'
  };

  const guestButtonStyle = {
    width: '100%',
    padding: '12px',
    background: 'transparent',
    color: 'var(--primary-blue)',
    border: '2px solid var(--primary-blue)',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };

  const dividerStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0',
    color: 'var(--gray-500)',
    fontSize: '14px'
  };

  const lineStyle = {
    flex: 1,
    height: '1px',
    background: 'var(--gray-300)'
  };

  const signUpTextStyle = {
    textAlign: 'center',
    marginTop: '20px',
    color: 'var(--gray-500)',
    fontSize: '14px'
  };

  const signUpLinkStyle = {
    color: 'var(--primary-blue)',
    cursor: 'pointer',
    fontWeight: '600',
    textDecoration: 'none'
  };

  return (
    <div style={containerStyle}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={formStyle}
      >
        <h2 style={{ 
          textAlign: 'center', 
          color: 'var(--primary-blue)',
          marginBottom: '30px',
          fontSize: '28px',
          fontWeight: '600'
        }}>
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <FaUser style={iconStyle} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          <div style={inputGroupStyle}>
            <FaLock style={iconStyle} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={inputStyle}
            />
          </div>

          {error && (
            <p style={{ 
              color: 'var(--accent-red)', 
              marginBottom: '15px',
              textAlign: 'center',
              fontSize: '14px'
            }}>
              {error}
            </p>
          )}

          <motion.button
            type="submit"
            style={loginButtonStyle}
            whileHover={{ transform: 'translateY(-2px)' }}
            whileTap={{ transform: 'translateY(0)' }}
          >
            Log In
          </motion.button>

          <div style={dividerStyle}>
            <div style={lineStyle}></div>
            <span style={{ padding: '0 10px' }}>or</span>
            <div style={lineStyle}></div>
          </div>

          <motion.button
            type="button"
            style={guestButtonStyle}
            onClick={handleGuestAccess}
            whileHover={{ transform: 'translateY(-2px)' }}
            whileTap={{ transform: 'translateY(0)' }}
          >
            <FaUserSecret />
            Continue as Guest
          </motion.button>

          <p style={signUpTextStyle}>
            Don't have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              style={signUpLinkStyle}
            >
              Sign Up
            </span>
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default LoginPage; 