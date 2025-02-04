import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import axios from 'axios';
import { useLoggedInUser } from '../hooks/useLoggedInUser';


export default function PreferredNameEdit({ 
    toggleEditMenu,
    onSave,
    initialNickName
}) {

    // Destructure assignment from custom hook
    const { loggedInUser } = useLoggedInUser();

    // Initialize state and modifier for email address
    const [nickName, setNickName] = useState("");

    // Initialize state for error message
    const [error, setError] = useState("");

    // Initialize loading state
    const [isLoading, setIsLoading] = useState("");

    // handleSave function processes save action when user clicks button
    const handleSave = async () => {
        setIsLoading(true);

        try {
            const res = await axios.put(`http://localhost:5004/api/users/${loggedInUser.user_id}`, {
                user_nickname: nickName
            });

            onSave(nickName);

            toggleEditMenu();
            console.log(res);

        } catch (error) {
            setError(error.response?.data?.message || "Failed to update preferred name");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="info-section-edit">
            <div className="preferred-edit">
                <div className="preferred-text">
                    <h3>Preferred name</h3>
                    <p>This is how your first name will appear to Host and guests. <a href="google.com">Learn more</a></p>
                </div>
                {/* Grabbed from text field mui */}
                <TextField
                    id="outlined-password-input"
                    fullWidth label="Preferred name (optional)"
                    input type="name"
                    value={nickName}
                    onChange={(e) => {
                        setNickName(e.target.value)
                    }}
                    />

                <button type="submit" className="save-btn" onClick={handleSave}>Save</button>
            </div>
            <button className="cancel-btn" onClick={toggleEditMenu}>Cancel</button>
        </div>
    )
}