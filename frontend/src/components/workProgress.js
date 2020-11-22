import { Button, Stepper, TextField } from '@material-ui/core';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@material-ui/lab';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const WorkProgress = () => {
  const [task, setTask] = useState(null);
  const handleTaskSubmit = e => {
    e.preventDefault();
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
      <Stepper>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
      </Stepper>
    </div>
  );
};

export default WorkProgress;
