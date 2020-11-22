import {
  Avatar,
  Card,
  Divider,
  IconButton,
  makeStyles,
  Tooltip,
  Zoom,
} from '@material-ui/core';
import React from 'react';
import background from '../images/background.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import tanmay from '../images/vidhu.jpg';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
  avatar: {
    borderRadius: '100%',
    transition: 'transform .3s',
    '&:hover': {
      boxShadow: '2px 2px 5px 5px grey',
      transform: 'scale(1.1)',
    },
  },
});

const ProfilePage = () => {
  const classes = useStyles();
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
            style={{
              width: '300px',
              height: '300px',
            }}
            src={tanmay}
          />
        </div>
        <br />
        <br />
        <div style={{ display: 'flex', paddingLeft: '50px' }}>
          <Tooltip TransitionComponent={Zoom} title="Github" arrow>
            <a href="https://github.com">
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
