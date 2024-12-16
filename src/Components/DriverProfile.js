import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { sharedStyles } from "../styles/SharedStyles";
import '../styles/DriverProfile.css';

function DriverProfile() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        stateOfResidence: '',
        vehicleMake: '',
        vehicleModel: '',
        vehicleColor: '',
        maxPassengers: '',
        accommodations: {
            hearingImpairment: false,
            visualImpairment: false,
            physicalImpairment: false,
            wheelchairAccess: false
        }
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                accommodations: {
                    ...prev.accommodations,
                    [name]: checked
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate('/');
    };

    const states = [
        "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
        "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
        "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
        "New Hampshire", "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
        "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
        "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
        "West Virginia", "Wisconsin", "Wyoming"
    ];

    return (
        <div style={sharedStyles.pageContainer}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    ...sharedStyles.contentCard,
                    maxWidth: '600px',
                    margin: '0 auto',
                    padding: '40px'
                }}
            >
                <form onSubmit={handleSubmit} className="driver-form">
                    <div className="form-group">
                        <label htmlFor="stateOfResidence">State of Residence:</label>
                        <select
                            id="stateOfResidence"
                            name="stateOfResidence"
                            value={formData.stateOfResidence}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">--Select state--</option>
                            {states.map(state => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="vehicleMake">Vehicle Make:</label>
                        <input
                            type="text"
                            id="vehicleMake"
                            name="vehicleMake"
                            value={formData.vehicleMake}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="vehicleModel">Vehicle Model:</label>
                        <input
                            type="text"
                            id="vehicleModel"
                            name="vehicleModel"
                            value={formData.vehicleModel}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="vehicleColor">Vehicle Color:</label>
                        <input
                            type="text"
                            id="vehicleColor"
                            name="vehicleColor"
                            value={formData.vehicleColor}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="maxPassengers">Maximum Number of Passengers:</label>
                        <input
                            type="number"
                            id="maxPassengers"
                            name="maxPassengers"
                            value={formData.maxPassengers}
                            onChange={handleInputChange}
                            min="1"
                            max="8"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Can you accommodate passengers with any of the following disabilities?</label>
                        <div className="checkbox-group">
                            {[
                                { id: 'hearingImpairment', label: 'Hearing Impairment' },
                                { id: 'visualImpairment', label: 'Visual Impairment' },
                                { id: 'physicalImpairment', label: 'Physical Impairment' },
                                { id: 'wheelchairAccess', label: 'Wheelchair Access' }
                            ].map(option => (
                                <div key={option.id} className="checkbox-item">
                                    <input
                                        type="checkbox"
                                        id={option.id}
                                        name={option.id}
                                        checked={formData.accommodations[option.id]}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor={option.id}>{option.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button type="submit" className="submit-button">
                        Submit
                    </button>
                </form>
            </motion.div>
        </div>
    );
}

export default DriverProfile;