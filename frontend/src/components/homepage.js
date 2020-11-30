import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ak from '../images/akshay.jpg';
import babu from '../images/babu_bhaiya.jpg';
import kachraa from '../images/kachraa.jpg';
import rajpal from '../images/rajpal.jpg';
import suniel from '../images/suniel.jpg';
import home1 from '../images/home1.jpg';
import home2 from '../images/reHome2.jpg';
import home3 from '../images/reHome3.jpg';
import styled, { keyframes } from 'styled-components';
import { Carousel } from 'react-bootstrap';
import background from '../images/background.jpg';
import stylescss from '../styles/homepage.module.css';
import SpringCard from './springCard';

const NameCard = props => {
  const classes = useStyles();
  return (
    <Grid item key={props.name} xs={12} sm={6} md={4}>
      <SpringCard height="50vh" width="40vh">
        <Card className={classes.card} variant="elevation">
          <CardMedia
            className={classes.cardMedia}
            image={props.image}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography>{props.message}</Typography>
          </CardContent>
        </Card>
      </SpringCard>
    </Grid>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      U_Table {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
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
    transition: 'transform .3s',
    flexDirection: 'column',
    '&:hover': {
      transform: 'scale(1.08)',
      boxShadow: '20px 20px 30px 5px rgba(0, 0, 0, 0.3)',
    },
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
  carousel: {
    width: '60vw',
    left: '20vw',
    marginBottom: '12vh',
    transition: 'all .6s',
    animation: `$carouselMoveIn 3s ${theme.transitions.easing.easeIn}`,
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '8px 8px 60px 20px grey',
    },
  },
  '@keyframes carouselMoveIn': {
    '0%': {
      transform: 'translateX(-200%)',
    },
    '100%': {},
  },
}));

const HomePage = () => {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: { main: '#f6a5c0' },
      secondary: { main: '#000000' },
    },
  });

  const SubTitle = styled.h3`
    color: white;
    letter-spacing: 0.2em;
    background: pink;
  `;

  const Title = styled.h1`
    font-size: 4em;
    color: black;
    background: white;
    text-transform: uppercase;
    letter-spacing: 0.5em;
  `;

  const move = keyframes`
    from:{
      filter: blur(10px)
      transform: translateX(-200)
    }
    to:{
      
    }
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles

  const TitleWrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: baseline;
    transition: all ease 0.5s;
    animation: ${move} 4s ease-in-out;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
  `;

  const CardDiv = styled.div`
    background: #ddffd9;
  `;

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        height: '130vh',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <CssBaseline />
          <main>
            <div align="center" className={classes.heroContent}>
              <Container maxWidth="sm">
                <SpringCard width="90vh">
                  <TitleWrapper>
                    <Title>U_Table</Title>
                    <SubTitle>A table for you.</SubTitle>
                  </TitleWrapper>
                </SpringCard>
              </Container>
            </div>
            <Carousel className={classes.carousel}>
              <Carousel.Item>
                <img className="d-block w-100" src={home1} alt="First slide" />
                <Carousel.Caption>
                  <h3>Umm...</h3>
                  <p>Remove all your doubts by trying it for first time</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={home2} alt="Second slide" />
                <Carousel.Caption>
                  <h3>What</h3>
                  <p>Take control of your studies, and with it, your life.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={home3} alt="First slide" />
                <Carousel.Caption>
                  <h3>Why?</h3>
                  <p>Take control of your studies, and with it, your life.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <div className={stylescss.container}>
              <h1 className={stylescss.h1}>why.</h1>
              <p className={stylescss.why}>
                These days students who are the youth of this nation seem to be
                in so much confusion. They may know what they want to do in life
                but not how to achieve it .That’s why we decided to pick up this
                issue!!
                <br></br>
                <br></br>
                Our app will tell students when to do what. They’ll get
                suggestions, a personalized timetable allowing them to complete
                whatever they want.
              </p>
            </div>
            <CardDiv>
              <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                  <NameCard
                    name="Hansraj Singh"
                    message="
          U_Table helped me realize my full potential by giving me something to work towards"
                    image={kachraa}
                  />
                  <NameCard
                    name="Tanmay Gairola"
                    message="
        I realized I was wasting a lot of time each day when I tried U_Table"
                    image={babu}
                  />
                  <NameCard
                    name="Vidhu Verma"
                    message="
      It took me a while to realize U_Table was boon for me"
                    image={ak}
                  />
                  <NameCard
                    name="Arvind Meena"
                    message="
    U_Table helps me get going about my day, something I was apprehensive about"
                    image={suniel}
                  />
                  <NameCard
                    name="Chaudhary Abuzar"
                    message="
  All day I work on my projects and U_Table helps me prioritize"
                    image={rajpal}
                  />
                </Grid>
              </Container>
            </CardDiv>
          </main>
          {/* Footer */}
          <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
              U_Table
            </Typography>
            <Typography
              variant="subtitle1"
              align="center"
              color="textSecondary"
              component="p"
            >
              Get more productive each day
            </Typography>
          </footer>
          <Copyright />
          <br />
          <br />
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
};

export default HomePage;
