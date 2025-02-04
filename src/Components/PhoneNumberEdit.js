// Import React and the useState hook for managing component state
import React, { useState } from "react";
// Import Material-UI TextField component for input styling and functionality
import TextField from "@mui/material/TextField";
// Import Material-UI Box component for layout container
import Box from "@mui/material/Box";
// Import Axios
import axios from "axios";

import { useLoggedInUser } from "../hooks/useLoggedInUser";

/**
 * PhoneNumberEdit Component
 * This component handles editing and validating a phone number
 *
 * Props:
 * string initialPhoneNumber - Starting phone number value (can be empty)
 * function} onSave - Function to call when saving the phone number
 * function toggleEditMenu - Function to close the edit menu
 */
export default function PhoneNumberEdit({
  initialPhoneNumber,
  onSave,
  toggleEditMenu,
  userId,
}) {

  // Call the custom hook and destructure the values
  const { loggedInUser } = useLoggedInUser();


  // Initialize state for the phone number input
  // If initialPhoneNumber is empty, use an empty string as default
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber || "");

  // Initialize state for error message
  // Empty string means no error
  const [error, setError] = useState("");

  // Adding in a is loading state
  const [isloading, setIsLoading] = useState("")

  /**
   * validatePhoneNumber
   * Checks if the provided phone number matches our required format
   *
   * Regex explanation: /^\+?[1-9]\d{1,14}$/
   * ^ - Start of string
   * \+? - Optional plus sign
   * [1-9] - First digit must be 1-9 (not 0)
   * \d{1,14} - Followed by 1-14 digits
   * $ - End of string
   *
   * param string number - Phone number to validate
   * returns boolean - True if valid, false if invalid
   */
  const validatePhoneNumber = (number) => {
    // Define regex pattern for phone number validation
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;

    // Remove all non-digit characters (spaces, dashes, parentheses)
    // Then test if the remaining digits match our pattern
    return phoneRegex.test(number.replace(/\D/g, ""));
  };

  /**
   * handleSave
   * Processes the save action when user clicks save button
   * Validates number first, then either saves or shows error
   */
  const handleSave = async () => {
    // Check if phone number is valid
    if (validatePhoneNumber(phoneNumber)) {
      // On check start loading
      setIsLoading(true);
      try {

        // API Put call
        const response = await axios.put(`http://localhost:5004/api/users/${loggedInUser.user_id}`, {
          user_phone: phoneNumber
        });

        // If valid: save the number and close edit menu
        onSave(phoneNumber);
        toggleEditMenu();

      } catch (error) {
        setError(error.response?.data?.message || "Failed to update Phone Info")
      } finally {
        setIsLoading(false);
      }
    }else {
      setError("Please enter a valid phone number");
    }
  };

  return (
    // Main container with flex layout
    <div className="info-section">
      {/* Left-aligned content container */}
      <div className="left-aligned">
        {/* Section title */}
        <h3>Phone Number</h3>
        {/* Help text for user */}
        <p>For notifications, reminders, and help logging in</p>

        {/* Material-UI Box container for input field */}
        <Box className="text-fields">
          {/* Phone number input field */}
          <TextField
            required // Makes the field required
            id="phone-number" // Unique identifier for the field
            label="Phone Number" // Label shown above field
            value={phoneNumber} // Controlled component value
            onChange={(e) => {
              // Update phone number when user types
              setPhoneNumber(e.target.value);
              // Clear any existing error message
              setError("");
            }}
            error={!!error} // Show error state if error exists
            helperText={error} // Display error message below field
            variant="outlined" // Material-UI style variant
            placeholder="+1 (555) 555-5555" // Example format
            sx={{
              // Custom styles
              margin: "5px",
              width: "300px",
            }}
                        // Disable the field while loading
                        disabled={isloading}
          />
        </Box>

        {/* Save button */}
        <button className="save-btn" onClick={handleSave}>
          Save and continue
        </button>
      </div>

      {/* Cancel button - closes edit menu without saving */}
      <button onClick={toggleEditMenu}>Cancel</button>
    </div>
  );
}
