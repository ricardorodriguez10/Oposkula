import React, { useEffect, useState } from "react";
import { getDataFromApi } from "../../Services/apiCalls";

const Home = () => {
  return (
    <div className="homePage">
      <h1>Home</h1>
    </div>
     );
    };

// const Foodsearch = () => {
//   const [meals, setMeals] = useState([]);
//   const [search, setSearch] = useState("");

// useEffect (() => {
//   const bring = setTimeout(() => {
// getDataFromApi(search)
// .then((foodResults) => {
// if (foodResults.meals===null) {
//   setMeals([]);
// } else setMeals (foodResults.meals)
// })
//   })
// })

// }

 

export default Home;
