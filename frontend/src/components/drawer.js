import React, { useState } from 'react';
import { Drawer, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const HomeDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const anchor = 'left';

  return (
    <div align="left">
      <React.Fragment key={anchor}>
        <IconButton
          variant="contained"
          color="primary"
          onClick={() => {
            handleOpen();
          }}
          style={{
            width: 100,
          }}
        >
          &nbsp;
          <MenuIcon size="large" />
          &nbsp;&nbsp;&nbsp;Menu
        </IconButton>
        <Drawer variant="persistent" anchor={anchor} open={open}>
          <IconButton
            onClick={() => {
              handleClose();
            }}
          >
            <ArrowBackIosIcon />
            Back
          </IconButton>
          <p></p>
          <div>
            <IconButton
              onClick={() => {
                console.log('gotoHomePage');
              }}
            >
              <HomeIcon />
              Home Page
            </IconButton>
          </div>
          <div>
            <IconButton
              onClick={() => {
                console.log('gotoAbout');
              }}
            >
              <InfoIcon
                onClick={() => {
                  console.log('gotoInfo');
                }}
              />
              About Us
            </IconButton>
          </div>
          <div>
            <IconButton onClick={()=>{console.log('loggedOut')}}>
              <ExitToAppRoundedIcon/>Logout
            </IconButton>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
};


export default HomeDrawer