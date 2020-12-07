import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '80%',
    padding: '10vh',
  },
  accordion: {
    alignContent: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.text.secondary,
  },
}));

const SettingsAccordion = () => {
  const classes = useStyles();
  const [newPass, setNewPass] = useState('');
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handlePasswordSubmit = () => {};

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
            <form onSubmit={handlePasswordSubmit}>
              <TextField
                label="New Name"
                value={newPass}
                variant="outlined"
                required
              />
              <br />
              <Button
                color="secondary"
                style={{ outline: 'none' }}
                type="submit"
                onClick={e => e.preventDefault()}
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
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
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
                required
                value={newPass}
                variant="outlined"
              />
              <br />
              <Button
                color="secondary"
                style={{ outline: 'none' }}
                type="submit"
                onClick={e => e.preventDefault()}
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
        disabled
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Delete Account</Typography>
          <Typography className={classes.secondaryHeading}>
            Delete your U_Table account (woah!)
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Button>Delete Account</Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SettingsAccordion;
