import React from 'react';
import Css from '../styles/aboutUs.module.css';
import vidhu from '../images/vidhu.jpg';
import abuzar from '../images/abuzar.jpg';
import hansraj from '../images/hansraj.jpg';
import tanmay from '../images/tanmay.jpg';

import Copyright from './copyright';

const Card = props => {
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
        <h1 align="center">Our Vision</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          possimus, nam sed odit vel illo natus voluptate fugiat maxime. Eum,
          eius. Temporibus labore quidem doloremque deleniti praesentium cumque,
          quia iure natus repellat voluptate itaque. Sunt voluptates doloribus
          cupiditate delectus magnam architecto, quod minima vitae ad eos sit
          quidem molestiae amet consequatur? Officiis at perferendis magni.
          Ullam laudantium eum reiciendis dolor debitis quam ipsa commodi nulla
          dolores? Aperiam officia dignissimos nesciunt, voluptas blanditiis
          veritatis ab odio, dolorum accusamus laborum molestias libero error
          iste eius quasi ipsa deleniti facere nam quia sapiente delectus!
          Cupiditate fugiat voluptas molestiae optio, enim earum obcaecati
          nobis!
        </p>
      </div>
      <h1 align="center">Our Team</h1>
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
