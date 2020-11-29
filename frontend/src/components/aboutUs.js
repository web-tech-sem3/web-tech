import React from 'react';
import Css from '../styles/aboutUs.module.css';
import vidhu from '../images/vidhu.jpg';
import abuzar from '../images/abuzar.jpg';
import hansraj from '../images/hansraj.jpg';
import tanmay from '../images/tanmay.jpg';
import Copyright from './copyright';
import { makeStyles, Typography } from '@material-ui/core';

const Card = props => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <div className={Css.container2}>
          <img src={props.img} alt="Avatar" className={Css.image} />
          <div className={Css.overlay}>
            <div className={Css.text}>
              <h2>{props.name}</h2>
              <p>{props.Job}</p>
              <p>{props.para}</p>
              <p>{props.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className={Css.body}>
      <div className={Css.AboutUs}>
        <h1>About Us</h1>
      </div>
      <div className={Css.vision}>
        <Typography variant="h2" align="center">
          Our Vision
        </Typography>
        <p style={{ fontSize: '1.5rem' }}>
          These days students who are the youth of this nation seem to be in so
          much confusion. They may know what they want to do in life but not how
          to achieve it .
        </p>
        <p style={{ fontSize: '1.5rem' }}>
          That’s why we decided to pick up this issue !! Our app will tell
          students when to do what. They’ll get suggestions, a personalized
          timetable allowing them to complete whatever they want.
        </p>
      </div>
      <Typography variant="h2" align="center">
        Our Team
      </Typography>
      <div className={Css.container}>
        <Card
          img={vidhu}
          name="Arvind Meena"
          Job="Front End"
          para="Sad!"
          email="Arvind@example.com"
        />
        <Card
          img={abuzar}
          name="Chaudhary Abuzar"
          Job="Front End"
          para="Busy!"
          email="Chaudhary@example.com"
        />
        <Card
          img={hansraj}
          name="Hansraj Singh"
          Job="Front End"
          para="Crying!"
          email="Hansraj@example.com"
        />
        <Card
          img={tanmay}
          name="Tanmay Gairola"
          Job="Front End"
          para="Not Happy!"
          email="Tanmay@example.com"
        />
        <Card
          img={vidhu}
          name="Vidhu Verma"
          Job="Front End"
          para="Happy!"
          email="Vidhu@example.com"
        />
      </div>
      <br />
      <br />
      <br />
      <Copyright />

      <br />
      <br />
      <br />
    </div>
  );
};

export default AboutUs;
