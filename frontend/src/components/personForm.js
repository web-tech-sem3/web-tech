import {
  Avatar,
  Button,
  FormHelperText,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  Slide,
  TextField,
} from '@material-ui/core';
import vidhu from '../images/vidhu.jpg';
import background from '../images/background.jpg';
import React, { useState } from 'react';

const useStyles = makeStyles({
  paper: {
    width: '70vh',
    borderRadius: '2vh',
    height: '85vh',
    padding: '3vh',
  },
  avatar: {
    width: '10vh',
    height: '10vh',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '2px 2px 1px 1px grey',
    },
  },
  select: {
    width: '46vh',
    margin: '2vh',
  },
  text: {
    width: '46vh',
    margin: '2vh',
  },
  button: {
    width: '36vh',
  },
});

const Occupations = [
  {
    number: 1,
    occupation: 'Student at a College',
  },
  {
    number: 2,
    occupation: 'Some Degree',
  },
  {
    number: 3,
    occupation: 'Working Professional',
  },
];

const Targets = [
  {
    number: 1,
    target: 'GRE',
  },
  {
    number: 2,
    target: 'UPSC',
  },
  {
    number: 3,
    target: 'CAT',
  },
];

const PersonForm = () => {
  const classes = useStyles();
  const [occupation, setOccupation] = useState();
  const [target, setTarget] = useState();
  const [age, setAge] = useState();
  const [hour, setHour] = useState();
  const [data, setData] = useState();

  const handleOccupationChange = e => {
    setOccupation(e.target.value);
  };
  const handleTargetChange = e => {
    setTarget(e.target.value);
  };
  const handleAgeChange = e => {
    setAge(e.target.value);
  };
  const handleHourChange = e => {
    setHour(e.target.value);
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    setData({ age, occupation, hour, target });
    console.log(data);
  };

  return (
    <div
      align="center"
      style={{
        backgroundImage: `url(${background})`,
        height: '130vh',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        paddingTop: '6vh',
      }}
    >
      <Paper className={classes.paper} elevation={4}>
        <Avatar
          src={vidhu}
          alt="profile"
          variant="circle"
          className={classes.avatar}
        />
        <form onSubmit={handleFormSubmit}>
          <Select
            placeholder="Occupation"
            className={classes.select}
            value={occupation}
            label="Occupation"
            color="secondary"
            variant="outlined"
            onChange={handleOccupationChange}
          >
            {Occupations.map(o => (
              <MenuItem value={o.number}>{o.occupation}</MenuItem>
            ))}
          </Select>
          <Select
            className={classes.select}
            value={target}
            label="Target"
            color="secondary"
            variant="outlined"
            onChange={handleTargetChange}
          >
            {Targets.map(o => (
              <MenuItem value={o.number}>{o.target}</MenuItem>
            ))}
          </Select>
          <TextField
            value={age}
            variant="outlined"
            className={classes.text}
            label="Age"
            onChange={handleAgeChange}
          />
          <TextField
            value={hour}
            variant="outlined"
            className={classes.text}
            label="Hour"
            fullWidth
            onChange={handleHourChange}
          />
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default PersonForm;
