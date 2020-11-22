import React from 'react';
import Board from 'react-trello';

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
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
      label: '0/0',
      cards: [],
    },
    {
      id: 'lane3',
      title: 'Completed',
      label: '0/0',
      cards: [],
    },
  ],
};

const Kanban = () => {
  return (
    <Board
      data={data}
      editable
      style={{ background: '#ECD1D3', paddingLeft: '5%' }}
    />
  );
};

export default Kanban;
