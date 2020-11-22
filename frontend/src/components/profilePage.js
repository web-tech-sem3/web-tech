import { Avatar, Divider } from '@material-ui/core';
import React from 'react';
import background from '../images/background.jpg';

const ProfilePage = () => {
  return (
    <div
      style={{
        background: `url(${background})`,
        overflow: 'hidden',
        display: 'flex',
      }}
    >
      <Avatar alt="profile-pic" />
      <Divider orientation="vertical"></Divider>
      <Card style={{}}></Card>
    </div>
  );
};

export const ProfilePage;
