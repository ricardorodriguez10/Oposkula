import React, { useEffect, useState } from "react";
import { getDataFromApi } from "../../Services/apiCalls";
import Oposiciones from "../../assets/Oposiciones.jpg"
import phone from "../../assets/phone.jpg"
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

 const Home = () => {
    return (
      <div className="homePage">

       <section id="oppositions">

       <div className="row">

       <div className="firstPart">
          <h1>Nutrición y Entrenamiento</h1>
          <h1>para Opositores</h1>
          </div>
</div>
      
          <section className="whoIsOpox">
          <div className="whoIsOpoxContent">
          <h2>Opox la nueva forma de opositar</h2>
          <p>Opox es la plataforma digital de nutricionistas deportivos y entrenadores que te brindaran tu plan de entrenamiento y nutrición para que puedas cumplir tu sueño de pasar las oposiciones.</p>
          </div>
          </section>


    <Carousel>
      <Carousel.Item>
      <a href="profile">
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
      <a href="profile">
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
      <a href="profile">
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

       </section>

       <section className="OurServices">

       <CardGroup>
      <Card>
        <Card.Img variant="top" src={phone} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
           <p className="cardP"> This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={sportnutritionist} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            <p className="cardP">This card has supporting text below as a natural lead-in to
            additional content.</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={trainer} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
          <p className="cardP"> This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
       <Card>
        <Card.Img variant="top" src={phone} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
           <p className="cardP"> This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>


       </section>
       
        <section className="whoWeAre">

          <div className="firstPartText">
            <p>Tu nutricionista deportivo y entrenador
          personalizaran y daran seguimiento a tu
            planificacion nutricional y entrenamiento
            a través de tu app </p>
          </div>
          
        </section>


        <section id="ourCommitment">
        


        <div className="howItWorks">
          <h2>¿Cómo funciona OPOX?</h2>
          <p>A través de una suscripción de pago a la app</p>
        </div>
       

        <section className="completeYourProfile">

        <div className="row">
        
        <div className=" phoneInfo col-lg-3 col-md-4">
          <h1> Completaras tu perfil </h1>
          <p>A mas datos de tu composición corporal, más especificos seremos y mejor rendimiento tendrás.</p>
        </div>

        <div className="phoneImg col-lg-3 col-md-4">
        <img className="phoneImg" src={phone} alt="Oposiciones"></img>
        </div>
</div>


        </section>

        <section className="yourSportNutritionist">

        <div className="row">

        <div className="yourNutritionist col-lg-3 col-md-4">
        <img className="nutritionistImg" src={sportnutritionist} alt="Nutritionist"></img>
        </div>

        <div className="nutritionistInfo col-lg-3 col-md-4">
          <h1> Tú nutricionista deportivo</h1>
          <p> elaborará un plan nutricional especifico dependiendo la exigencia de la prueba</p>
        </div>
</div>
        </section>

        
        <section className="training">

        <div className="row">

        <div className="yourCoach col-lg-3 col-md-4">
          <h1> Tú entrenador</h1>
          <p> diseñará un plan de entrenamiento para tu oposición</p>
        </div>

        <div className="trainingInfo col-lg-3 col-md-4">
        <img className="coachImg" src={trainer} alt="Training"></img>
        </div>
        
        </div>
        </section>

        <div className="doubts col-lg-3 col-md-4">
          <h1> 4: ¿Alguna duda?</h1>
          <p>tu nutricionista y entrenador estarán dispuestos a resolver todas tus dudas en cualquier momento</p>
        </div>
        

        </section>
        

      </div>
       );
     };

     export default Home;

// export default function FoodSearch () {
//    const [meals, setMeals] = useState([]);
//   const [search, setSearch] = useState("");


// useEffect(() => {
// getDataFromApi()
// .then((result) => {
//   const meals = result.data.hints
//   setMeals(meals)
// })
// .catch((error) => console.log(error))
// }, []);

// return (
//   <div className="homeDiv">
// <FoodList food={meals} />
//   </div>
// )
// }