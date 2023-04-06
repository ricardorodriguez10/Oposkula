import React, { useEffect, useState } from "react";
import { getDataFromApi } from "../../Services/apiCalls";
import opoImg from "../../assets/Oposiciones.jpg"
import phone from "../../assets/phone.jpg"
import sportnutritionist from "../../assets/sportnutritionist.jpg"
import trainer from "../../assets/trainer.jpg"
import "./Home.css"
import FoodDetailCard from "../../components/FoodDetailCard/FoodDetailCard"
import MealCard from "../../components/MealCard";
import FoodList from "../../components/Food/FoodList"

 const Home = () => {
    return (
      <div className="homePage">
        <h1>Home</h1>
        {/* <img className="homeImg" src={opoImg} alt="Oposiciones"></img> */}
        <section className="whoWeAre">

        <div className="firstPart">
          <h1>Nutricionistas y Entrenadores</h1>
          <h1>Deportivos Online</h1>
          </div>

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