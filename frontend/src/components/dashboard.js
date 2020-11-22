import React, { useState } from 'react';
import TimeTable from './timeTable';
import background from '../images/background.jpg';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import DashboardTopNavigation from './dashboardTopNav';
import { Divider } from '@material-ui/core';
import Kanban from './kanban';
import { Route, Switch } from 'react-router';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(5, 0, 6),
    paddingTop: theme.spacing(4.5),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    padding: theme.spacing(6),
  },
}));

const Dashboard = () => {
  const [component, setComponent] = useState(0);
  const classes = useStyles();
  const SubTitle = styled.h4`
    color: white;
    letter-spacing: 0.2em;
    background: pink;
  `;
  const Title = styled.h1`
    font-size: 2em;
    color: black;
    background: white;
    text-transform: uppercase;
    letter-spacing: 0.4em;
  `;
  const MoveIn = keyframes`
  from {
    transform: translateY(30vh);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

  const TitleWrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: baseline;
    animation: ${MoveIn} 1s linear;
    transition: all ease 0.5s;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
    &:hover {
      transform: translateY(-2vh);
      transition: all ease 0.5s;
    }
  `;

  return (
    <div
      align="center"
      style={{
        backgroundImage: `url(${background})`,
        overflow: 'hidden',
      }}
    >
      <div
        align="center"
        className={classes.heroContent}
        style={{ display: 'flex' }}
      >
        <Container maxWidth="sm" style={{ width: '55vh' }}>
          <TitleWrapper>
            <Title>Dashboard</Title>
            <SubTitle>Your Home.</SubTitle>
          </TitleWrapper>
        </Container>
        <Divider orientation="vertical" maxWidth="0" />
        <div style={{ width: '100%', height: '100%' }}>
          <DashboardTopNavigation />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
