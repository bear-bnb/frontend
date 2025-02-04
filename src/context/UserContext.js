import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create a context for user-related data
const UserContext = createContext();

// Define the UserProvider component to manage the user fetching and login simulation logic
export function UserProvider({ children }) {
  // State variable to hold the list of users // Jess has this as null in her video
  const [users, setUsers] = useState([]);
  // State variable to track the loading state (for example, during data fetching)
  const [loading, setLoading] = useState(true);
  // State variable to track the logged-in user
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Asynchronous function to fetch users using axios
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5004/api/users");
      if (response.data.success) {
        console.log("All users from database:", response.data.data);
        setUsers(response.data.data); // Update the users state with fetched data
        if (response.data.data.length > 0) {
          setLoggedInUser(response.data.data[0]);
        }
      } else {
        console.error(response.data.message); // Log the error message if fetching fails
      }
    } catch (error) {
      // Log any errors encountered during the request
      console.error("Error fetching users:", error);
    } finally {
      // Set loading to false when the request is done
      setLoading(false);
    }
  };

  // useEffect hook to call fetchUsers when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // Function to simulate a user logging in
  const logInUser = (user) => {
    setLoggedInUser(user);
  };

  // Function to simulate logging out
  const logOutUser = () => {
    setLoggedInUser(null);
  };

  return (
    // Provide users, loading state, logged-in user, and login functions to child components
    <UserContext.Provider
      value={{
        users,
        loading,
        loggedInUser,
        logInUser,
        logOutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to access user context in other components
export function useUser() {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}
