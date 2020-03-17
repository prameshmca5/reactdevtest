import React from "react";
import "./Burger.css";
import BurgerIngrediance from "./BurgerIngrediance/BurgerIngrediance";99

const Burger = (props) =>{
    return(
      <div className="Buger">
          <BurgerIngrediance type="bread-top" />
          <BurgerIngrediance type="meat" />
         {/* <BurgerIngrediance type="cheese" />
          <BurgerIngrediance type="bacon" />*/}
          <BurgerIngrediance type="bread-bottom" />
      </div>
    );
}

export default Burger;

