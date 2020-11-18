import React from 'react';
import TimeTable from './timeTable';
import background from '../images/background.jpg';
import Copyright from './copyright';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { Card, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    paddingTop: theme.spacing(10),
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
  const classes = useStyles();
  const SubTitle = styled.h4`
    color: white;
    letter-spacing: 0.4em;
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
        display: 'flex',
      }}
    >
      <div align="center" className={classes.heroContent}>
        <Container maxWidth="sm">
          <TitleWrapper>
            <Title>Dashboard</Title>

            <SubTitle>Your Home.</SubTitle>
          </TitleWrapper>
        </Container>
      </div>
      <div
        style={{
          paddingTop: '3%',
        }}
      >
        <TimeTable />
      </div>
    </div>
  );
};

export default Dashboard;
