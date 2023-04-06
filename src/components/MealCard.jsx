import React from "react";
import { useNavigate } from "react-router";


const MealCard = ({value}) => {
     let Navigate = useNavigate ();
     

 const detailCard = () => {
    //  foodChange (value);
     setTimeout(()=> {
         Navigate("/");
     }, 200)
 }

 return (
    <div className="mealCardDesign" onClick={() => detailCard()}></div>
 )

 }

 export default MealCard;