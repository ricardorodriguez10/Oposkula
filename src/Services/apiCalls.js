import axios from "axios";
import { Component } from "react";
import { useParams } from "react-router";

// export const getDataFromApi = async () => {
//   try {
//     const result = await axios.get(
//       "https://api.edamam.com/api/food-database/v2/parser",
//       {
//         params: {
//           app_key: "710135cdf843460f99d5563f25434e45",
//           app_id: "11be22f7",
//           ingr: "apple",
//         },
//       }
//     );
//     return (result.data.hints)
//   } catch (error) {
//     console.log(error);
//   }
// };
// getDataFromApi();


// fetch("www.themealdb.com/api/json/v1/1/search.php?f=a")
// .then((res) => {
// console.log(res);
// })

// const API_ROOT = "https://www.themealdb.com/api/json/v1/1"
// const ENDPOINT = "/search.php?f=a"

// const getDataFromApii = () => {
//   return axios 
//   .get (`${API_ROOT}${ENDPOINT}`)
//   .then ((response) => {
//     const food = response.map((data) => {

//     })})
  
//   .catch((error)=>console.log(error))
// }

// getDataFromApii()

// const options = {
//   method: 'GET',
//   headers: {
//  'X-Api-Key': 'xehLHNs2Ao2DL3Bghj/AtA==kAvuVAQjNrBzyYzN'
//   }
// }

// const food = async() => {
//   try{
//     const response = await fetch('https://api.calorieninjas.com/v1/nutrition?query=10oz onion and a tomato', options)
//     console.log(response);

//   } catch (error){
//     console.log(error);
//   }
// }

// food ();