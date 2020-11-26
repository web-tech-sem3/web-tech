import { makeStyles } from '@material-ui/core';
import React from 'react';
import Board from 'react-trello';

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      cards: [
        {
          id: 'Card1',
          title: 'Write Blog',
          description: 'Can AI make memes',
          label: '30 mins',
        },
        {
          id: 'Card2',
          title: 'Pay Rent',
          description: 'Transfer via NEFT',
          label: '5 mins',
        },
        {
          id: 'Card3',
          title: 'Add functionality',
          description: 'Add backend for kanban',
          label: '5 mins',
        },
        {
          id: 'Card4',
          title: 'Viva',
          description: 'Study for viva',
          label: '5 mins',
        },
      ],
    },
    {
      id: 'lane2',
      title: 'In Progress',
      cards: [],
    },
    {
      id: 'lane3',
      title: 'Completed',
      cards: [],
    },
  ],
};

const Kanban = ({ userData }) => {
  console.log(userData);
  return (
    <Board
      data={{ lanes: userData }}
      editable
      style={{ background: 'transparent', paddingLeft: '5%' }}
    />
  );
};

export default Kanban;
