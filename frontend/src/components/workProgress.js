import { Button, makeStyles, Stepper, TextField } from '@material-ui/core';
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

const useStyles = makeStyles({
  dot: {
    transition: 'transform .3s',
    '&:hover': {
      transform: 'scale(3)',
    },
  },
});

const WorkProgress = () => {
  const [task, setTask] = useState(null);
  const classes = useStyles();

  const handleTaskSubmit = e => {
    e.preventDefault();
    setTask(null);
  };

  const handleTaskChange = e => {
    e.preventDefault();
    setTask(e.target.value);
  };

  return (
    <div>
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
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot className={classes.dot} />
          </TimelineSeparator>
          <TimelineContent>Repeat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default WorkProgress;
