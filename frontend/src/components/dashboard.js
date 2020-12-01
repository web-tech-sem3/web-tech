import React, { useEffect, useState } from 'react';
import TimeTable from './timeTable';
import background from '../images/background.jpg';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import DashboardTopNavigation from './dashboardTopNav';
import { Divider, Tooltip, Zoom } from '@material-ui/core';
import UserService from '../services/user';
import TargetDisplay from './targetDisplay';

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

const Dashboard = ({ user }) => {
  const [data, setData] = useState();
  const userName = user ? user.userName : null;
  const target = user ? user.target : null;
  console.log(target, userName);
  const classes = useStyles();

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    const d = getTodos();
    setData(d);
  }, []);
  useEffect(() => {
    return () => {
      try {
        console.log(data);
        console.log({ userName, data: data });
        UserService.putTodo({ userName, todo: data }).then(val =>
          console.log(val)
        );
      } catch (e) {
        console.log(e);
      }
    };
  }, [data]);

  const handleDataChange = newData => {
    console.log(newData);
    setData(newData);
  };
  const getTodos = async () => {
    try {
      const d = await UserService.getTodo(userName);
      console.log({ lanes: d.todo });
      setData(d.todo);
    } catch (e) {
      console.log(e);
    }
  };

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
        height: '94vh',
        overflow: 'hidden',
        backgroundSize: 'cover',
      }}
    >
      <div
        align="center"
        className={classes.heroContent}
        style={{ display: 'flex' }}
      >
        <div>
          <Container maxWidth="sm" style={{ width: '55vh', paddingTop: '4%' }}>
            <TitleWrapper>
              <Title>Dashboard</Title>
              <SubTitle>Your Home.</SubTitle>
            </TitleWrapper>
          </Container>
          <TargetDisplay target={target} />
        </div>
        <Divider orientation="vertical" maxWidth="0" />
        <div style={{ width: '100%', height: '100%' }}>
          <DashboardTopNavigation
            data={data}
            handleDataChange={handleDataChange}
            userName={userName}
            target={target}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
