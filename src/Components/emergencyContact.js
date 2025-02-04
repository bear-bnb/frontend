import React from 'react';
import { useLoggedInUser } from "../hooks/useLoggedInUser";

export default function EmergencyContact( { toggleEditMenu } ) {

  // Call the custom hook and destructure the values
  const { loggedInUser } = useLoggedInUser();

    return (
        <>
                <div className="info-section">
                <div>
                    <h3>Emergency Contact</h3>
                    {loggedInUser && 
                        <ul className="econtact-list">
                            <li>Name: {loggedInUser.user_econtact_name}</li>
                            <li>Relationship: {loggedInUser.user_econtact_relationship}</li>
                            <li>Email: {loggedInUser.user_econtact_email}</li>
                            <li>Phone: {loggedInUser.user_econtact_phone}</li>
                        </ul>}
                    {!loggedInUser &&
                        <p>Not provided</p>
                    }
                </div>
                <button onClick={toggleEditMenu}>Edit</button>
            </div>
        </>
    )
}