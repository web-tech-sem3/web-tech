import React, { useState } from 'react';

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

  );
};

export default WorkProgress;
