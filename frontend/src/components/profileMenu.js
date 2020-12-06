import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

const ProfileMenu = ({ setUser, user, setLogoutSnackOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const name = user ? user.name : '';

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setLogoutSnackOpen(true);
    window.localStorage.clear();
    setUser(null);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        color="secondary"
        style={{ outline: 'none' }}
      >
        {name}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Logged in as {user.userName}</MenuItem>
        <Link
          to="/profile"
          style={{ textDecoration: 'none', color: 'black', outline: 'none' }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <Link
          to="/settings"
          style={{ textDecoration: 'none', color: 'black', outline: 'none' }}
        >
          <MenuItem onClick={handleClose}>Settings</MenuItem>
        </Link>
        <Divider />
        <Link
          to="/home"
          style={{ textDecoration: 'none', color: 'black', outline: 'none' }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
