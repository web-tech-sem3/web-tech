import { Drawer, IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Link, Switch } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const anchor = "left";
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            onClick={() => {
              handleOpen();
            }}
            align="left"
            style={{
              width: 100,
            }}
          >
            <MenuIcon color="secondary" />
          </IconButton>
          <Switch>
            <Drawer variant="persistent" anchor={anchor} open={open}>
              <IconButton onClick={handleClose}>
                <ArrowBackIosIcon />
                Back
              </IconButton>

              <p>&nbsp;</p>
              <p></p>
              <div>
                <Link to="/home">
                  <IconButton onClick={handleClose}>
                    <HomeIcon />
                    Home Page
                  </IconButton>
                </Link>
              </div>
              <p>&nbsp;</p>
              <div>
                <Link to="/about">
                  <IconButton onClick={handleClose}>
                    <InfoIcon />
                    About Us
                  </IconButton>
                </Link>
              </div>

              <p>&nbsp;</p>
              <div>
                <Link to="/login">
                  <IconButton onClick={handleClose}>
                    <ExitToAppRoundedIcon />
                    Logout
                  </IconButton>
                </Link>
              </div>
            </Drawer>
          </Switch>
          <h1>U_TABLE</h1>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
