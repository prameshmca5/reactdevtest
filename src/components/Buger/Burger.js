import React from "react";
import "./Burger.css";
import BurgerIngrediance from "./BurgerIngrediance/BurgerIngrediance";

const Burger = (props) =>{

    const incrddisp =  Object.keys( props.ingredients );
    let i=0;
    const test = incrddisp
    .map(inkey =>{
        return [...Array(props.ingredients[inkey])].map(()=>{
            return (<BurgerIngrediance type={inkey} key={i++} />)
        });

    });



    return(
      <div className="Buger">
          <BurgerIngrediance type="bread-top" />
          {test}
          <BurgerIngrediance type="bread-bottom" />


      </div>
    );
}

export default Burger;

