import React from 'react';
import { useLoggedInUser } from "../hooks/useLoggedInUser";

export default function LegalName({ toggleEditMenu }) {

  // Call the custom hook and destructure the values
  const { loggedInUser } = useLoggedInUser();

    return (
        <>
            <div className="info-section">
                <div>
                    <h3>Legal Name</h3>
                    <p>
                        {/* Conditionally render the user's full name or a fallback */}
                        {loggedInUser
                            ? `${loggedInUser.user_first_name} ${loggedInUser.user_last_name}`
                            : "Not Provided"}
                    </p>
                </div>
                <button onClick={toggleEditMenu}>Edit</button>
            </div>
        </>
  );
}
