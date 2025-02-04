import React from "react";
import { useLoggedInUser } from "../hooks/useLoggedInUser";

/**
 * Display component for the user's phone number
 * Shows either the saved phone number or "Not Provided" if none exists
 *
 * string ->  phoneNumber - The user's saved phone number
 * function -> toggleEditMenu - Function to switch to edit mode
 */
export default function PhoneNumber({ phoneNumber, toggleEditMenu }) {

  // Call the custom hook and destructure the values
  const { loggedInUser } = useLoggedInUser();

  return (
    <div className="info-section">
      <div>
        <h3>Phone Number</h3>
        <p>
          {/* Display phone number state first, fallback to loggedInUser */}
          {phoneNumber || loggedInUser?.user_phone || "Not Provided"}
        </p>
      </div>
      <button onClick={toggleEditMenu}>Edit</button>
    </div>
  );
}
