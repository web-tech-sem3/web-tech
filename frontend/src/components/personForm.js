import {
  Avatar,
  Button,
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
import React, { useState } from 'react';

const useStyles = makeStyles({
  form: {
    width: '70vh',
    borderRadius: '2vh',
    height: '85vh',
    padding: '5vh',
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
    width: '34vh',
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
    <div align="center" style={{ paddingTop: '6vh' }}>
      <Paper className={classes.form} elevation={4}>
        <Avatar
          src={vidhu}
          alt="profile"
          variant="circle"
          className={classes.avatar}
        />
        <form onSubmit={handleFormSubmit}>
          <InputLabel>Your Occupation</InputLabel>
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
          <InputLabel>Your Target Exam</InputLabel>
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
          <InputLabel>Your Age</InputLabel>
          <TextField
            value={age}
            variant="outlined"
            label="Age"
            onChange={handleAgeChange}
          />
          <InputLabel>Hours on Job</InputLabel>
          <TextField
            value={hour}
            variant="outlined"
            label="Hour"
            onChange={handleHourChange}
          />
          <br />
          <br />
          <Button type="submit">Submit</Button>
        </form>
      </Paper>
    </div>
  );
};

export default PersonForm;
