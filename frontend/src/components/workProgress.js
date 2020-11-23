import {
  Backdrop,
  Button,
  CircularProgress,
  makeStyles,
  Stepper,
  TextField,
} from '@material-ui/core';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@material-ui/lab';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const useStyles = makeStyles(theme => ({
  dot: {
    transition: 'transform .3s',
    width: '4px',
    height: '4px',
    '&:hover': {
      transform: 'scale(3)',
      background: 'lightpink',
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const WorkProgress = () => {
  const [task, setTask] = useState(null);
  const [backdrop, setBackdrop] = useState(false);
  const classes = useStyles();

  const handleTaskSubmit = e => {
    e.preventDefault();
    setTask(null);
  };

  const handleBackdropOpen = () => {
    setBackdrop(true);
  };

  const handleTaskChange = e => {
    e.preventDefault();
    setTask(e.target.value);
  };

  return (
    <div>
      <Backdrop
        open={backdrop}
        className={classes.backdrop}
        onClick={() => {
          setBackdrop(!backdrop);
        }}
      >
        <Form onSubmit={handleTaskSubmit}>
          <TextField
            variant="outlined"
            label="Task Done"
            value={task}
            onChange={handleTaskChange}
          />
          <Button color="secondary" type="submit">
            Add
          </Button>
        </Form>
      </Backdrop>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} onClick={handleBackdropOpen} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} onClick={handleBackdropOpen} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} onClick={handleBackdropOpen} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} onClick={handleBackdropOpen} />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WorkProgress;
