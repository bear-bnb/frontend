import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useLoggedInUser } from '../hooks/useLoggedInUser';

export default function EmergencyContactEdit({ 
    toggleEditMenu,
    onSave,
    initialEmergencyContact,
}) {

    // Destructure assignment from custom hook
    const { loggedInUser } = useLoggedInUser();

    //Initialize state and modifier function for emergency contact input
    const [emergencyContact, setEmergencyContact] = useState(initialEmergencyContact || "");

    //Initialize state for error message
    const [error, setError] = useState("");

    //Initialize loading state
    const [isLoading, setIsLoading] = useState("")

    // Handle input changes for each field
    const handleInputChange = (key, value) => {
        setEmergencyContact((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    //handleSave: process save action when user clicks save button
    const handleSave = async () => {
        // Start loading phase
        setIsLoading(true);

        try {
            const res = await axios.put(`http://localhost:5004/api/users/${loggedInUser.user_id}`, {
                user_econtact_name: emergencyContact.name,
                user_econtact_relationship: emergencyContact.relationship,
                user_econtact_email: emergencyContact.email,
                user_econtact_phone: emergencyContact.phone
            });

            onSave(
                emergencyContact.name &&
                emergencyContact.relationship &&
                emergencyContact.email &&
                emergencyContact.phone
            );

            toggleEditMenu();
            console.log(res);

        } catch (error) {
            setError(error.response?.data?.message || "Failed to update emergency contact");
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="info-section">
            <div className='left-aligned'> 
                <h3>Emergency Contact</h3>
                <p>A trusted contact we can alert in an urgent situation.</p>
                <Box className="text-fields vertical">
                    <TextField
                        label="Name"
                        id="outlined-required"
                        value={emergencyContact.name}
                        onChange={(e) => {
                            handleInputChange('name', e.target.value);
                        }}
                        variant="outlined"
                        sx={{
                            margin: '5px',
                            width: '50ch'
                        }}
                    ></TextField>
                    <TextField
                        label="Relationship"
                        id="outlined-required"
                        value={emergencyContact.relationship}
                        onChange={(e) => {
                            handleInputChange('relationship', e.target.value);
                        }}
                        variant="outlined"
                        sx={{
                            margin: '5px',
                            width: '50ch'
                        }}
                    ></TextField>
                    <TextField
                        label="Email"
                        id="outlined-required"
                        value={emergencyContact.email}
                        onChange={(e) => {
                            handleInputChange('email', e.target.value);
                        }}
                        variant="outlined"
                        sx={{
                            margin: '5px',
                            width: '50ch'
                        }}
                    ></TextField>
                        <TextField
                        label="Phone number"
                        id="outlined-required"
                        value={emergencyContact.phone}
                        onChange={(e) => {
                            handleInputChange('phone', e.target.value);
                        }}
                        variant="outlined"
                        sx={{
                            margin: '5px',
                            width: '50ch'
                        }}
                    ></TextField>
                </Box>

                <button className='save-btn' onClick={handleSave}>
                    Save
                </button>
            </div>
            <button onClick={toggleEditMenu}>Cancel</button>
        </div>

    )
}