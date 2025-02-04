import React from 'react';
import { useLoggedInUser } from "../hooks/useLoggedInUser";

export default function Address({ toggleEditMenu }) {
    // Call the custom hook and destructure the values
    const { loggedInUser } = useLoggedInUser();

    // Check if address fields are available and join them with commas
    const userAddress = loggedInUser
        ? [
            loggedInUser.user_address_one,
            loggedInUser.user_address_apt,
            loggedInUser.user_city,
            loggedInUser.user_state,
            loggedInUser.user_country,
            loggedInUser.user_postal_code
            
        ].filter(Boolean).join(', ') // Filter out any empty values and join with commas
        : "Not Provided";

    return (
        <div className="info-section">
            <div>
                <h3>Address</h3>
                <p>{userAddress}</p>
            </div>
            <button onClick={toggleEditMenu}>Edit</button>
        </div>
    );
}
