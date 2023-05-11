import React, { useEffect, useState } from "react";
import { getDataFromApi } from "../../Services/apiCalls";
import Oposiciones from "../../assets/Oposiciones.jpg"
import phone from "../../assets/phone.jpg"
import police from "../../assets/police.jpg"
import firefighter from "../../assets/firefighter.jpg"
import forestryAgent from "../../assets/forestryAgent.jpg"
import sportnutritionist from "../../assets/sportnutritionist.jpg"
import trainer from "../../assets/trainer.jpg"
import "./Home.css"
import FoodDetailCard from "../../components/FoodDetailCard/FoodDetailCard"
import MealCard from "../../components/MealCard";
import FoodList from "../../components/Food/FoodList"
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Profile from "../Profile/Profile";
import Button from 'react-bootstrap/Button';

 const Home = () => {
    return (
      <div className="homePage">

       <section className="oppositions">

       <div className="firstPart">
          <h1>Nutrición y Entrenamiento</h1>
          <h1>para Opositores</h1>
          </div>
          
</section>
      
          <section className="whoIsOpox">
          <div className="whoIsOpoxContent">
          <h2>Opox la nueva forma de opositar</h2>
          <p>Opox es la plataforma digital de nutricionistas deportivos y entrenadores que te brindaran tu plan de entrenamiento y nutrición para que puedas cumplir tu sueño de pasar las oposiciones.</p>
          </div>
          </section>


    <Carousel>
      <Carousel.Item>
      <a href="servicios">
        <img
          className="phoneImg"
          src={phone}
          alt="First slide"
        />
     </a>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href="servicios">
        <img
          className="nutritionistImg"
          src={sportnutritionist}
          alt="Second slide"
        />
        </a>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <a href="servicios">
        <img
          className="coachImg"
          src={trainer}
          alt="Third slide"
        />
        </a>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

       

       <section className="OurServices">

       <div className="servicesContainer">
        <article className="">
        <a href="servicios">
          <figure className="">
            <img className="policeImg" alt="Police Img" src={police}></img>
          </figure>
          </a>
          <h3>Policia</h3>
          <p>Si deseas Opositar a policia, aquí tienes los requisitos</p>
        </article>

        <article className="">
        <a href="servicios">
          <figure className="">
            <img className="firefighterImg" alt="Firefighter Img" src={firefighter}></img>
          </figure>
          </a>
          <h3>Bombero</h3>
          <p>Si deseas Opositar a bombero, aquí tienes los requisitos</p>
        </article>

        <article className="">
        <a href="servicios">
          <figure className="">
            <img className="forestryAgentImg" alt="Forestry Agent Img" src={forestryAgent}></img>
          </figure>
          </a>
          <h3>Guardia Forestal</h3>
          <p>Si deseas Opositar a guardia forestal, aquí tienes los requisitos</p>
        </article>

       </div>



       </section>

       
        <section className="contactUs">

          <div className="lastPart">
            <h2>¿Quieres más información?</h2>
            <h3>¡Qué esperas, contacta con nosotros!</h3>
            <a href="https://api.whatsapp.com/send?phone=34649689420&text=Hola,%20me%20podrías%20dar
%20más%20información%20de%20los%20servicios%20que%20ofrecéis,%20muchas%20gracias.">
            <Button variant="success">Contacto</Button>
            </a>
          </div>
          
        </section>
        
      </div>
       );
     };

     export default Home;