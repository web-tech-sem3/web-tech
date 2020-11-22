import {
  Avatar,
  Card,
  Divider,
  IconButton,
  Tooltip,
  Zoom,
} from '@material-ui/core';
import React from 'react';
import background from '../images/background.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles() =>{
  
}

const ProfilePage = () => {
  const classes = useStyles()
  return (
    <div
      style={{
        background: `url(${background})`,
        overflow: 'hidden',
        display: 'flex',
        height: '93vh',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div style={{ padding: '5%' }}>
        <div className={classes.avatar}>
          <Avatar
            alt="profile-pic"
            style={{ width: '300px', height: '300px' }}
            src="/src/images/tanmay.jpg"
          />
        </div>
        <br />
        <br />
        <div style={{ display: 'flex', paddingLeft: '50px' }}>
          <Tooltip TransitionComponent={Zoom} title="Github" arrow>
            <a href={null}>
              <IconButton>
                <GitHubIcon style={{ width: '40px', height: '40px' }} />
              </IconButton>
            </a>
          </Tooltip>
          <a href={null}>
            <Tooltip TransitionComponent={Zoom} title="Twitter" arrow>
              <IconButton disabled>
                <TwitterIcon style={{ width: '40px', height: '40px' }} />
              </IconButton>
            </Tooltip>
          </a>
          <a href={null}>
            <Tooltip TransitionComponent={Zoom} title="Mail" arrow>
              <IconButton>
                <MailIcon style={{ width: '40px', height: '40px' }} />
              </IconButton>
            </Tooltip>
          </a>
        </div>
      </div>
      <Divider
        orientation="vertical"
        style={{ width: '5px', color: 'lightpink' }}
      ></Divider>
    </div>
  );
};

export default ProfilePage;
