import { Button, Drawer, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Css from '../styles/Navbar.module.css';
import Logo from '../images/logo.png';
import { userInfo } from 'os';

const Header = styled.h3`
  color: white;
  letter-spacing: 0.4em;
  background: pink;
`;

const Navbar = ({ setUser, username }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logout = () => {
    setUser(null);
  };
  const anchor = 'left';
  return (
    <div align="center">
      <AppBar position="fixed" color="white">
        <Toolbar>
          <IconButton
            onClick={() => {
              handleOpen();
            }}
            align="center"
            style={{
              width: 60,
            }}
          >
            <MenuIcon color="secondary" />
          </IconButton>
          <Switch>
            <Drawer variant="persistent" anchor={anchor} open={open}>
              <IconButton onClick={handleClose} style={{ width: 200 }}>
                <ArrowBackIosIcon />
                Close
              </IconButton>

              <p>&nbsp;</p>
              <p></p>
              <div>
                <Link to="/home">
                  <IconButton onClick={handleClose}>
                    <HomeIcon />
                    Home
                  </IconButton>
                </Link>
              </div>
              <p>&nbsp;</p>
              <div>
                <Link to="/dashboard">
                  <IconButton onClick={handleClose}>
                    <DashboardIcon />
                    Dashboard
                  </IconButton>
                </Link>
              </div>
              <p>&nbsp;</p>
              <div>
                <Link to="/rate">
                  <IconButton onClick={handleClose}>
                    <ThumbsUpDownIcon />
                    Review
                  </IconButton>
                </Link>
              </div>
              <p>&nbsp;</p>
              <div>
                <Link to="/you">
                  <IconButton onClick={handleClose}>
                    <PersonIcon />
                    About You
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
            </Drawer>
          </Switch>
          <div className={Css.headerContainer}>
            <div className={Css.heading}>
              <Header>U_Table</Header>
            </div>
            <div className={Css.Rhead}>
              <div className={Css.logo}>
                <img src={Logo} alt="logo" />
              </div>
              <div className={Css.heading}>
                <Header>{username}</Header>
              </div>
              <div className={Css.btnContainer}>
                <Link to="/login">
                  <Button onClick={logout} color="secondary" type="outlined">
                    Logout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <p>&nbsp;</p>
    </div>
  );
};

export default Navbar;
