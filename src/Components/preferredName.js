import React from "react";
import { useLoggedInUser } from "../hooks/useLoggedInUser";

export default function PreferredName({ toggleEditMenu }) {
  // Call the custom hook and destructure the values
  const { loggedInUser } = useLoggedInUser();

  return (
    <div className="info-section">
      <div>
        <h3>Preferred name</h3>
        <p>
          {/* Conditionally render the user's full name or a fallback */}
          {loggedInUser
            // TODO: We need to think about adding nickname to the DB
            ? `${loggedInUser.user_nickname}`
            : "Not Provided"}
        </p>
      </div>
      <button onClick={toggleEditMenu}>Edit</button>
    </div>
  );
}
