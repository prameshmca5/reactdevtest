import React, {Component} from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Buger/Burger";
import BuildControllers from "../../components/Buger/BuildControllers/BuildControllers";

const SETCONTRACTBURGERAMOUNT = {
  salad : 0.5,
  bacan : 1.2,
  cheesse : 0.3,
  meat : 1.5
};


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },

    }

    addInhertiantHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedcount = oldCount +1;
        console.log("Helo Welcome test controller  => " + type +" => "+oldCount +"==> "+updatedcount);
        const updatedInheritance = {
            ...this.state.ingredients
        }
        updatedInheritance[type] = updatedcount;
        this.setState({ingredients:updatedInheritance});
        console.log(this.state.ingredients)
    };

    render() {
        return(
            <div>
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <div>
                        <BuildControllers addInherdiant={this.addInhertiantHandler}/>
                    </div>
                </Aux>
            </div>
        );
    }
}

export default BurgerBuilder;