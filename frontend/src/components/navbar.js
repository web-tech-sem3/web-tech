import { Divider, Drawer, IconButton, Tooltip, Zoom } from '@material-ui/core';
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
import Logo from '../images/logo.svg';
import ProfileMenu from './profileMenu';

const Header = styled.h3`
  color: white;
  letter-spacing: 0.4em;
  background: pink;
`;

const Navbar = ({ setUser, user, setLogoutSnackOpen, logoutSnackOpen }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const anchor = 'left';
  return (
    <div align="center">
      <AppBar
        position="fixed"
        variant="elevation"
        style={{ background: 'white' }}
      >
        <Toolbar>
          <Tooltip title="Menu" arrow TransitionComponent={Zoom}>
            <IconButton
              onClick={() => {
                handleOpen();
              }}
              style={{
                width: 'auto',
                outline: 'none',
              }}
            >
              <MenuIcon color="secondary" />
            </IconButton>
          </Tooltip>
          <Switch>
            <Drawer
              variant="persistent"
              anchor={anchor}
              open={open}
              transitionDuration={450}
            >
              <IconButton
                onClick={handleClose}
                style={{
                  width: 200,
                  paddingTop: '10%',
                  paddingBottom: '10%',
                  outline: 'none',
                }}
              >
                <ArrowBackIosIcon />
                Close
              </IconButton>
              <div>
                <Divider />

                <br />
                <Link to="/home">
                  <IconButton
                    onClick={handleClose}
                    style={{
                      width: 'auto',
                      outline: 'none',
                    }}
                  >
                    <HomeIcon />
                    Home
                  </IconButton>
                </Link>
              </div>
              <p>&nbsp;</p>
              <div>
                <Link to="/dashboard">
                  <IconButton
                    onClick={handleClose}
                    style={{
                      width: 'auto',
                      outline: 'none',
                    }}
                  >
                    <DashboardIcon />
                    Dashboard
                  </IconButton>
                </Link>
              </div>
              <p>&nbsp;</p>
              <div>
                <Link to="/rate">
                  <IconButton
                    onClick={handleClose}
                    style={{
                      width: 'auto',
                      outline: 'none',
                    }}
                  >
                    <ThumbsUpDownIcon />
                    Review
                  </IconButton>
                </Link>
              </div>
              <p>&nbsp;</p>
              <div>
                <Link to="/you">
                  <IconButton
                    onClick={handleClose}
                    style={{
                      width: 'auto',
                      outline: 'none',
                    }}
                  >
                    <PersonIcon />
                    About You
                  </IconButton>
                </Link>
              </div>
              <p>&nbsp;</p>
              <div>
                <Link to="/about">
                  <IconButton
                    onClick={handleClose}
                    style={{
                      width: 'auto',
                      outline: 'none',
                    }}
                  >
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
            <div className={Css.Rhead} style={{}}>
              <div className={Css.logo}>
                <Tooltip title="U_Table" arrow TransitionComponent={Zoom}>
                  <img src={Logo} alt="logo" />
                </Tooltip>
              </div>
              <Divider orientation="vertical" flexItem />
              <div>
                <Tooltip title="Profile Menu" arrow TransitionComponent={Zoom}>
                  <ProfileMenu
                    setUser={setUser}
                    user={user}
                    setLogoutSnackOpen={setLogoutSnackOpen}
                    logoutSnackOpen={logoutSnackOpen}
                  />
                </Tooltip>
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
