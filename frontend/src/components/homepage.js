import React, { useState } from 'react';
import KalamBold from '../fonts/kalam/Kalam-Bold.ttf';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import kachraa from '../images/kachraa.jpg';
import babu from '../images/babu_bhaiya.jpg';
import ak from '../images/akshay.jpg';
import suniel from '../images/suniel.jpg';
import rajpal from '../images/rajpal.jpg';
import { ThemeProvider } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Drawer, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const NameCard = props => {
  const classes = useStyles();
  return (
    <Grid item key={props.name} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
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

const HomePage = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const anchor = 'left';

  const theme = createMuiTheme({
    palette: {
      primary: lightGreen,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <IconButton
              onClick={() => {
                handleOpen();
              }}
              align="left"
              style={{
                width: 100,
              }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer variant="persistent" anchor={anchor} open={open}>
              <IconButton
                onClick={() => {
                  handleClose();
                }}
              >
                <ArrowBackIosIcon />
                Back
              </IconButton>

              <p>&nbsp;</p>
              <p></p>
              <div>
                <IconButton
                  onClick={() => {
                    console.log('gotoHomePage');
                  }}
                >
                  <HomeIcon />
                  Home Page
                </IconButton>
              </div>
              <p>&nbsp;</p>
              <div>
                <IconButton
                  onClick={() => {
                    console.log('gotoAbout');
                  }}
                >
                  <InfoIcon
                    onClick={() => {
                      console.log('gotoInfo');
                    }}
                  />
                  About Us
                </IconButton>
              </div>

              <p>&nbsp;</p>
              <div>
                <IconButton
                  onClick={() => {
                    console.log('loggedOut');
                  }}
                >
                  <ExitToAppRoundedIcon />
                  Logout
                </IconButton>
              </div>
            </Drawer>
            <Typography variant="h6" color="inherit" noWrap>
              U_Table - HomePage
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <h2 class={{ font: KalamBold }}>U_Table - A Table for You</h2>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              ></Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Login
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      SignUp
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
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
      </React.Fragment>
    </ThemeProvider>
  );
};

export default HomePage;
