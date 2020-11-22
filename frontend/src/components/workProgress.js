import { Button, Stepper, TextField } from '@material-ui/core';
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
        <TextField label="Task Done" value={task} onChange={handleTaskChange} />
        <Button type="submit">Add</Button>
      </Form>
      <Stepper></Stepper>
    </div>
  );
};

export default WorkProgress;
