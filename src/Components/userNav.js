// Icon links - https://mui.com/material-ui/material-icons/?query=menu
// Started with Component from https://mui.com/material-ui/react-menu/#system-BasicMenu.js
// We may need to update the state on this to use usecontext depending on how user logins are handled // needed - Andy

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useUser } from "../context/UserContext";

// Define the UserNav component
export default function UserNav() {
  // State management for the menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // Access user context
  const { loggedInUser, logOutUser } = useUser(null);

  // Event handler for opening the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Event handler for closing the menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Event handler for going to account page
  let navigate = useNavigate();
  const navAccount = () => {
    let path = '/personal-info';
    navigate(path);
    handleClose();
  }

  return (
    <div>
      {/* User menu button styled as a pill */}
      <Button
        className="pill-button"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {/* Container for the button icons */}
        <div className="button-content">
          <MenuIcon sx={{ fontSize: 16 }} /> {/* Hamburger menu icon */}
          <AccountCircle sx={{ fontSize: 25 }} /> {/* User avatar icon */}
        </div>
      </Button>

      {/* Dropdown menu component */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl} // Element to attach menu to
        open={open} // Controls menu visibility
        onClose={handleClose} // Handler for closing menu
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom", // Appear below the button
          horizontal: "right", // Align to right edge
        }}
        transformOrigin={{
          vertical: "top", // Align top of menu with bottom of button
          horizontal: "right", // Align right edges
        }}
        sx={{
          "& .MuiPaper-root": {
            marginTop: "8px", // Space between button and menu
            borderRadius: "12px", // Rounded corners
            boxShadow: "0 2px 16px rgba(0,0,0,0.12)", // Subtle shadow
            minWidth: "200px", // Minimum width of menu
          },
        }}
      >
        {/* Conditional rendering without Fragments */}
        {loggedInUser
          ? [
              <>
              <MenuItem key="welcome" onClick={handleClose}>
                Welcome, {loggedInUser.user_first_name}
              </MenuItem>,
              <MenuItem key="account" onClick={navAccount}>
                Account
              </MenuItem>
              <MenuItem
                key="logout"
                onClick={() => {
                  logOutUser();
                  handleClose();
                }}
              >
                Logout
              </MenuItem>,
              </>
            ]
          : [
              <MenuItem key="login" onClick={handleClose}>
                Login
              </MenuItem>,
              <MenuItem key="signup" onClick={handleClose}>
                Sign up
              </MenuItem>,
            ]}
      </Menu>
    </div>
  );
}