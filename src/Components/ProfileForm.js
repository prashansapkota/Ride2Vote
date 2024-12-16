import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { sharedStyles } from "../styles/SharedStyles";
import { FaCar, FaUserFriends } from 'react-icons/fa';

function ProfileForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        agreed: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleDriverSignup = () => {
        navigate('/driverprofile');
    };

    const handleRiderSignup = () => {
        navigate('/riderprofile');
    };

    const roleCardStyle = {
        ...sharedStyles.card,
        textAlign: 'center',
        padding: '40px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    };

    return (
        <div style={sharedStyles.pageContainer}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={sharedStyles.contentCard}
            >
                <h1 style={sharedStyles.pageTitle}>Join Ride2Vote</h1>

                <div style={sharedStyles.section}>
                    <h2 style={sharedStyles.sectionTitle}>Disclaimer</h2>
                    <div style={sharedStyles.card}>
                        <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>
                            By signing up, you acknowledge that this is a volunteer-based service.
                            We do not guarantee rides and are not liable for any incidents that may occur.
                        </p>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <input
                                type="checkbox"
                                name="agreed"
                                checked={formData.agreed}
                                onChange={handleInputChange}
                                style={{ width: '20px', height: '20px' }}
                            />
                            <span>I acknowledge and agree to the disclaimer above</span>
                        </label>
                    </div>
                </div>

                <div style={sharedStyles.section}>
                    <h2 style={sharedStyles.sectionTitle}>Choose Your Role</h2>
                    <div style={sharedStyles.grid}>
                        <motion.div
                            whileHover={{ transform: 'translateY(-8px)' }}
                            style={roleCardStyle}
                            onClick={handleDriverSignup}
                        >
                            <FaCar size={48} color="var(--primary-blue)" style={{ marginBottom: '20px' }} />
                            <h3 style={{ marginBottom: '16px', color: 'var(--primary-blue)' }}>Driver</h3>
                            <p>Help others exercise their right to vote by providing transportation</p>
                        </motion.div>

                        <motion.div
                            whileHover={{ transform: 'translateY(-8px)' }}
                            style={roleCardStyle}
                            onClick={handleRiderSignup}
                        >
                            <FaUserFriends size={48} color="var(--primary-blue)" style={{ marginBottom: '20px' }} />
                            <h3 style={{ marginBottom: '16px', color: 'var(--primary-blue)' }}>Rider</h3>
                            <p>Get connected with volunteer drivers to reach your polling location</p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default ProfileForm;
