import React, { useState }from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useLoggedInUser } from '../hooks/useLoggedInUser';

export default function EmailAddressEdit({ 
    toggleEditMenu,
    onSave,
    initialEmailAddress
}) {

    // Destructure assignment from custom hook
    const { loggedInUser } = useLoggedInUser();

    // Initialize state and modifier for email address
    const [emailAddress, setEmailAddress] = useState(initialEmailAddress || "");

    // Initialize state for error message
    const [error, setError] = useState("");

    // Initialize loading state
    const [isLoading, setIsLoading] = useState("");

    // handleSave function processes save action when user clicks button
    const handleSave = async () => {
        setIsLoading(true); //start loading phase

        try {
            // PUT request
            const res = await axios.put(`http://localhost:5004/api/users/${loggedInUser.user_id}`, {
                user_email: emailAddress
            });

            onSave(emailAddress);

            toggleEditMenu();
            console.log(res);

        } catch (error) {
            setError(error.response?.data?.message || "Failed to update email address");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="info-section">
            <div className='left-aligned'> 
                <h3>Email Address</h3>
                <p>Use an address you’ll always have access to.</p>
                <Box className="text-fields">
                    <TextField required
                        id="outlined-required"
                        label="email address"
                        value={emailAddress}
                        onChange={(e) => {
                            setEmailAddress(e.target.value)
                        }}
                        variant="outlined"
                        sx={{
                            margin: '5px'
                        }}
                    ></TextField>
                </Box>

                <button className='save-btn' onClick={handleSave}>Save and continue</button>
            </div>
            <button onClick={toggleEditMenu}>Cancel</button>
        </div>

    )
}