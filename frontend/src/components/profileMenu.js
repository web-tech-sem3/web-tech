import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Divider } from '@material-ui/core';

const ProfileMenu = ({ setUser, user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const name = user ? user.name : '';

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    window.localStorage.clear();
    setUser(null);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls=""
        aria-haspopup="true"
        onClick={handleClick}
        color="secondary"
      >
        {name}
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Signed in as {user.userName}</MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
