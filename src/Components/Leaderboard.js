import React from "react";
import { motion } from "framer-motion";
import { sharedStyles } from "../styles/SharedStyles";
import { 
  FaTrophy, 
  FaMedal, 
  FaAward, 
  FaStar, 
  FaUserCheck, 
  FaGraduationCap, 
  FaCrown,
  FaCheckCircle 
} from 'react-icons/fa';

const Leaderboard = () => {
  const drivers = [
    {
      id: 1,
      name: "John Smith",
      location: "Boston, MA",
      rides: 25,
      rating: 4.9,
      badges: ["quiz", "participation", "top"],
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: "New York, NY",
      rides: 18,
      rating: 4.8,
      badges: ["participation", "top"],
    },
    {
      id: 3,
      name: "Michael Brown",
      location: "Chicago, IL",
      rides: 15,
      rating: 4.7,
      badges: ["quiz", "participation"],
    },
  ];

  const getRankIcon = (index) => {
    switch(index) {
      case 0:
        return <FaTrophy color="var(--star-gold)" size={24} />;
      case 1:
        return <FaMedal color="#C0C0C0" size={24} />;
      case 2:
        return <FaAward color="#CD7F32" size={24} />;
      default:
        return <FaStar color="var(--primary-blue)" size={24} />;
    }
  };

  const getBadgeContent = (type) => {
    switch(type) {
      case 'participation':
        return {
          icon: <FaUserCheck size={20} color="var(--primary-blue)" />,
          title: "Active Participant"
        };
      case 'quiz':
        return {
          icon: <FaGraduationCap size={20} color="var(--primary-blue)" />,
          title: "Quiz Master"
        };
      case 'top':
        return {
          icon: <FaCrown size={20} color="var(--star-gold)" />,
          title: "Top Contributor"
        };
      default:
        return {
          icon: <FaCheckCircle size={20} color="var(--primary-blue)" />,
          title: "Achievement"
        };
    }
  };

  const driverCardStyle = {
    ...sharedStyles.card,
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    marginBottom: '16px',
    transition: 'all 0.3s ease',
  };

  const statsStyle = {
    display: 'flex',
    gap: '20px',
    color: 'var(--primary-blue)',
    fontSize: '14px',
    fontWeight: '500',
  };

  const badgeContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '8px 16px',
    background: 'var(--gray-100)',
    borderRadius: '8px',
  };

  const badgeItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
    padding: '4px 8px',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    background: 'var(--pure-white)',
    boxShadow: 'var(--shadow-sm)',
  };

  return (
    <div style={sharedStyles.pageContainer}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={sharedStyles.contentCard}
      >
        <h1 style={sharedStyles.pageTitle}>
          <FaTrophy style={{ marginRight: '10px' }} />
          Driver Leaderboard
        </h1>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {drivers.map((driver, index) => (
            <motion.div
              key={driver.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              style={driverCardStyle}
              whileHover={{ transform: 'translateY(-4px)', boxShadow: 'var(--shadow-lg)' }}
            >
              <div style={{ 
                minWidth: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center' 
              }}>
                {getRankIcon(index)}
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--primary-blue)',
                  marginBottom: '8px'
                }}>
                  {driver.name}
                </h3>
                
                <div style={statsStyle}>
                  <span>{driver.location}</span>
                  <span>•</span>
                  <span>{driver.rides} rides</span>
                  <span>•</span>
                  <span>⭐ {driver.rating}</span>
                </div>
              </div>

              <div style={badgeContainerStyle}>
                {driver.badges.map((badge, i) => {
                  const badgeContent = getBadgeContent(badge);
                  return (
                    <motion.div
                      key={i}
                      style={badgeItemStyle}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: 'var(--shadow-md)',
                        background: 'var(--gray-100)'
                      }}
                      title={badgeContent.title}
                    >
                      {badgeContent.icon}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Leaderboard;
