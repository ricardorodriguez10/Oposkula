import React from "react";
import Food from "./Food";

const FoodList = (meals, onClick) => {

return (
    <div className="foodList">
        {meals.map((meals)=>{
            return <Food key={meals.id} food={meals} onClick={onClick} />
        })}
    </div>
)

}

export default FoodList;