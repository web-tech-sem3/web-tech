import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, TextField } from '@material-ui/core';
import DeleteAccountDialog from './deleteAccountDialog';
import UserService from '../services/user';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  accordion: {
    transition: 'all .4s',
    opacity: '70%',
    '&:hover': {
      boxShadow: '2px 2px 10px 10px grey',
      transform: 'scale(1.05)',
      opacity: '100%',
      background: '#ffc4d6',
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: '33.33%',
    color: '#323031',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.text.secondary,
    fontFamily: 'Gloria Hallelujah, cursive',
  },

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const SettingsAccordion = ({ username }) => {
  const classes = useStyles();
  const [newName, setNewName] = useState('');
  const [newPass, setNewPass] = useState('');
  const [hour, setHour] = useState(
    JSON.parse(window.localStorage.getItem('target'))
  );
  const [github, setGithub] = useState();
  const user = JSON.parse(window.localStorage.getItem('userLoggedIn'));
  const [expanded, setExpanded] = React.useState(false);

  const handleGithubSubmit = () => {};
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handlePasswordSubmit = async e => {
    e.preventDefault();
    console.log({ username, newPass });
    try {
      const res = await UserService.changePassword({
        userName: user.userName,
        password: newPass,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
    setNewPass('');
  };
  const handleNameSubmit = e => {
    e.preventDefault();
    setNewName('');
  };

  const handlePasswordChange = e => {
    e.preventDefault();
    setNewPass(e.target.value);
  };
  const handleNameChange = e => {
    e.preventDefault();
    setNewName(e.target.value);
  };
  const handleGithubChange = e => {
    e.preventDefault();
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className={classes.accordion}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Change Name</Typography>
          <Typography className={classes.secondaryHeading}>
            Why would you though? Unless...
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {' '}
          <div style={{ align: 'center' }}>
            <form onSubmit={handleNameSubmit}>
              <TextField
                label="New Name"
                variant="outlined"
                value={newName}
                onChange={handleNameChange}
                required
              />
              <br />
              <Button
                color="secondary"
                style={{ outline: 'none' }}
                type="submit"
              >
                Change
              </Button>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        className={classes.accordion}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Change Password</Typography>
          <Typography className={classes.secondaryHeading}>
            Change your account's password to another (possibly easier) one.
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ alignItems: 'center' }}>
          <div style={{ align: 'center' }}>
            <form onSubmit={handlePasswordSubmit}>
              <TextField
                label="New Password"
                onChange={handlePasswordChange}
                required
                value={newPass}
                variant="outlined"
              />
              <br />
              <Button
                color="secondary"
                style={{ outline: 'none' }}
                type="submit"
              >
                Change
              </Button>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        className={classes.accordion}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Change Target</Typography>
          <Typography className={classes.secondaryHeading}>
            Manually change your targetted hours (aka reduce them)
          </Typography>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        className={classes.accordion}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Add Github</Typography>
          <Typography className={classes.secondaryHeading}>
            Add your github account, because, why not?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ alignItems: 'center' }}>
          <div style={{ align: 'center' }}>
            <form onSubmit={handleGithubSubmit}>
              <TextField
                label="Github"
                onChange={handleGithubChange}
                required
                value={github}
                variant="outlined"
              />
              <br />
              <Button
                color="secondary"
                style={{ outline: 'none' }}
                type="submit"
                style={{ align: 'center' }}
              >
                Add
              </Button>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
        className={classes.accordion}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Delete Account</Typography>
          <Typography className={classes.secondaryHeading}>
            Delete your U_Table account (woah!)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DeleteAccountDialog />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SettingsAccordion;
