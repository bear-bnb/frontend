import React, { useState } from 'react';
import './personal-info.css';
import '../Components/Footer';

//Legal Name
import LegalName from "../Components/legalName";
import LegalNameEdit from "../Components/legalNameEdit";

//Preferred Name
import PreferredName from "../Components/preferredName";
import PreferredNameEdit from "../Components/preferredNameEdit";

//Phone Number
import PhoneNumber from "../Components/PhoneNumber";
import PhoneNumberEdit from "../Components/PhoneNumberEdit";

//Email Address
import EmailAddress from '../Components/emailAddress';
import EmailAddressEdit from '../Components/emailAddressEdit';

//Address
import Address from '../Components/address';
import AddressEdit from '../Components/addressEdit';

//Emergency Contact
import EmergencyContact from '../Components/emergencyContact';
import EmergencyContactEdit from '../Components/emergencyContactEdit';




/**
 * PersonalInfo Component
 * Parent component that manages all personal information sections
 * Handles state management for edit modes and stored values
 * Controls which version of each section (view/edit) is displayed
 */
export default function PersonalInfo() {
  /**
   * editStates tracks which sections are currently in edit mode
   * Structure:
   * {
   *   legalName: boolean,  // true = editing, false = viewing
   *   phoneNumber: boolean // true = editing, false = viewing
   * }
   */
  const [editStates, setEditStates] = useState({
    legalName: false, // Initially in view mode
    phoneNumber: false, // Initially in view mode
    preferredName: false, // Initially in view mode
    emailAddress: false, // Initially in view mode
    emergencyContact: false, //Initially in view mode
    address: false, // Initially in view mode
  });

  /**
   * phoneNumber stores the current phone number value
   * This state is lifted up to this level so it can be shared between
   * the view (PhoneNumber) and edit (PhoneNumberEdit) components
   */
  // State delcaration for phone number
  const [phoneNumber, setPhoneNumber] = useState("");

  // State declarations for first and last name
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // State declaration for emergency contact info
  const [emergencyContact, setEmergencyContact] = useState({
    name: "",
    relationship: "",
    email: "",
    phone: "",
  });

    // State declaration for full address
    const [address, setAddress] = useState({
      lineOne: "",
      aptsuite: "",
      city: "",
      state: "",
      country: "",
      postalCode: "",
    });

  // State declaration for email address
  const [emailAddress, setEmailAddress] = useState("");

  // State declaration for preferred name / nickname
  const [nickName, setNickName] = useState("");

  /**
   * toggleEditMenu
   * Switches a section between view and edit modes
   *
   * @param {string} section - Which section to toggle ('legalName' or 'phoneNumber')
   *
   * How it works:
   * 1. Takes previous state object
   * 2. Spreads all existing values (...prev)
   * 3. Updates only the specified section to its opposite boolean value
   * 4. Square brackets [] allow using a variable as an object key
   */
  const toggleEditMenu = (section) => {
    setEditStates((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    // Main container with styles from personal-info.css
    <div className="personal-info">
      <h1>Personal Info</h1>

      {/* Legal Name Section */}
      {/* Ternary operator determines which version to show */}
      {!editStates.legalName ? (
        // View mode - show LegalName component
        <LegalName
          toggleEditMenu={() => toggleEditMenu("legalName")} // Pass toggle function
        />
      ) : (
        // Edit mode - show LegalNameEdit component
        <LegalNameEdit
          toggleEditMenu={() => toggleEditMenu("legalName")} // Pass toggle function
          initialFirstName={firstName} // Pass current legal name as starting value
          initialLastName={lastName}
          onSave={() => {
            setFirstName();
            setLastName();
          }} // Pass function to update first and last name
        />
      )}

      {/* Preferred Name Section */}
      {/* Currently not connected to edit states - might need to be updated */}
      {!editStates.preferredName ? (

      // View mode - show LegalName component
      <PreferredName 
        toggleEditMenu={() => toggleEditMenu("preferredName")} //Pass toggle function
      />
      ) : (
        // Edit mode - show LegalNameEdit component
      <PreferredNameEdit 
        toggleEditMenu={() => toggleEditMenu("preferredName")} //Pass toggle function
        onSave={setNickName}
        initialNickName={nickName}
      />
      )}
      {/* Phone Number Section */}
      {/* Ternary operator determines which version to show */}
      {!editStates.phoneNumber ? (
        // View mode - show PhoneNumber component
        <PhoneNumber
          phoneNumber={phoneNumber} // Pass current phone number for display
          toggleEditMenu={() => toggleEditMenu("phoneNumber")} // Pass toggle function
        />
      ) : (
        // Edit mode - show PhoneNumberEdit component
        <PhoneNumberEdit
          initialPhoneNumber={phoneNumber} // Pass current number as starting value
          onSave={setPhoneNumber} // Pass function to update phone number
          toggleEditMenu={() => toggleEditMenu("phoneNumber")} // Pass toggle function
        />
      )}
      {/* Email Address Section*/}
      {/* Ternary operator determines which version to show */}
      {!editStates.emailAddress ? (
        // View mode - show PhoneNumber component
        <EmailAddress
          toggleEditMenu={() => toggleEditMenu("emailAddress")} // Pass toggle function
          />
        ) : (
          // Edit mode - show Email Address component
          <EmailAddressEdit
          toggleEditMenu={() => toggleEditMenu("emailAddress")} // Pass toggle function
          onSave={setEmailAddress}
          initialEmailAddress={emailAddress}
        />
      )}

      {/* Address Section*/}
      {/* Ternary operator determines which version to show */}
      {!editStates.address ? (
        <Address
        toggleEditMenu={() => toggleEditMenu
          ("address")}
        />
      ) : (
        <AddressEdit
          toggleEditMenu={() => toggleEditMenu ("address")} 
          onSave={setAddress}
          initialAddress={address}
          
          /> )}


      {/* Emergency Contact Section*/}
      {/* Ternary operator determines which version to show */}
      {!editStates.emergencyContact ? (
        // View mode - show PhoneNumber component
        <EmergencyContact
          toggleEditMenu={() => toggleEditMenu("emergencyContact")} // Pass toggle function
        />
      ) : (
        // Edit mode - show Email Address component
        <EmergencyContactEdit
          toggleEditMenu={() => toggleEditMenu("emergencyContact")} // Pass toggle function
          onSave={setEmergencyContact}
          initialEmergencyContact={emergencyContact}

        />
      )}
    </div>
  );
}
