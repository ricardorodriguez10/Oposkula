import React from "react"
import "./FoodDetailCard.css"

const FoodDetailCard = ({food}) => {
    return (
        <div className="pageDetail">
        <div className="cardDesign">
            <div className="leftSide">
                <img className="imgDetail" src={food} alt={food}></img>
                <div><h1></h1></div>
            </div>
            <div className="rightSide">
            <div> Nutrients: {food} </div>
            </div>
        </div>
        </div>

    )



}

export default FoodDetailCard;