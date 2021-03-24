import React from 'react';
import Card from '@material-ui/core/Card';
import RatingStar from './ratingStar';
import { makeStyles } from '@material-ui/core/styles';
import Copyright from '../components/copyright';
import background from '../images/background.jpg';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import SpringCard from './springCard';
import { Typography } from '@material-ui/core';
import message from '../images/message.svg';

const useStyles = makeStyles(theme => ({
  root: {
    width: 400,
    paddingTop: 20,
    height: 100,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    alignContent: 'center',
    align: 'center',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    transition: 'transform .4s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  pos: {
    marginBottom: 12,
  },
  copyright: {
    paddingTop: 50,
    height: 90,
    alignContent: 'center',
    position: 'bottom',
  },
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
  image: {
    width: '35vh',
    height: '35vh',
    animation: '$message 10s infinite',
  },

  '@keyframes message': {
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 2,
      transform: 'scale(1.2)',
    },
    '100%': {
      opacity: 0,
    },
  },
  title: {
    opacity: '80%',
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

const Rating = () => {
  const classes = useStyles();
  const SubTitle = styled.h3`
    color: white;
    letter-spacing: 0.4em;
    background: pink;
  `;
  const Title = styled.h2`
    font-size: 3em;
    color: black;
    background: white;
    text-transform: uppercase;
    letter-spacing: 0.6em;
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
    padding: 3em;
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
        height: '83vh',
        backgroundSize: 'cover',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          align="center"
          className={classes.heroContent}
          style={{ paddingLeft: '5%' }}
        >
          <Container maxWidth="sm">
            <TitleWrapper>
              <Title>Rating</Title>
              <br />
              <SubTitle>Rate Us</SubTitle>
            </TitleWrapper>
          </Container>
          <img src={message} className={classes.image} alt="message" />
        </div>
        <div
          align="center"
          style={{
            paddingLeft: 150,
            position: 'relative',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <br />
          <br />
          <br />
          <SpringCard>
            <Card className={classes.root}>
              <Typography variant="h6" className={classes.title}>
                Customer Care
              </Typography>
              <RatingStar num={1} />
            </Card>
          </SpringCard>
          <br />
          <SpringCard>
            <Card className={classes.root}>
              <Typography variant="h6" className={classes.title}>
                Caring
              </Typography>
              <RatingStar num={2} />
            </Card>
          </SpringCard>
          <br />
          <SpringCard>
            <Card className={classes.root}>
              <Typography variant="h6" className={classes.title}>
                UX
              </Typography>
              <RatingStar num={3} />
            </Card>
          </SpringCard>
          <br />
          <SpringCard>
            <Card className={classes.root}>
              <Typography variant="h6" className={classes.title}>
                UI
              </Typography>
              <RatingStar num={4} />
            </Card>
          </SpringCard>
        </div>
      </div>
      <br />
      <div style={{position:'absolute', bottom:'5vh', left:'45vw'}}>
      <Copyright />
      </div>
    </div>
  );
};

export default Rating;
