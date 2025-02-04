import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useLoggedInUser } from '../hooks/useLoggedInUser';

export default function LegalNameEdit({ 
    toggleEditMenu,
    onSave,
    initialFirstName,
    initialLastName,
}) {

    // Destructure assignment from custom hook
    const { loggedInUser } = useLoggedInUser();

    //Initialize state and modifier function for legal name input
    const [firstName, setFirstName] = useState(initialFirstName || "");
    const [lastName, setLastName] = useState(initialLastName || "");

    //Initialize state for error message
    const [error, setError] = useState("");

    //Initialize loading state
    const [isLoading, setIsLoading] = useState("")

    //handleSave: processes save action when user clicks save button
    const handleSave = async () => {
        //Start loading phase
        setIsLoading(true);

        try {
            // PUT request
            const res = await axios.put(`http://localhost:5004/api/users/${loggedInUser.user_id}`, {
                user_first_name: firstName,
                user_last_name: lastName
            });

            onSave(firstName && lastName);

            toggleEditMenu();
            console.log(res);
        
        } catch (error) {
            setError(error.response?.data?.message || "Failed to update Legal Name")
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="info-section">
            <div className='left-aligned'> 
                <h3>Legal Name</h3>
                <p>We’ll need to verify your new legal name before you can book your next trip.</p>
                <Box className="text-fields">
                    <TextField 
                        required
                        id="outlined-required"
                        label="First name on ID"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                        variant="outlined"
                        sx={{
                            margin: '5px'
                        }}
                    ></TextField>
                    <TextField 
                        required
                        id="outlined-required"
                        label="Last name on ID"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                        variant="outlined"
                        sx={{
                            margin: '5px'
                        }}
                    ></TextField>
                </Box>

                <button className='save-btn' onClick={handleSave}>
                    Save and continue
                </button>
            </div>
            <button onClick={toggleEditMenu}>Cancel</button>
        </div>

    )
}