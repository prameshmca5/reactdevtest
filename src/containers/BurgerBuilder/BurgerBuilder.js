import React, {Component} from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Buger/Burger";

import BuildControllers from "../../components/Buger/BuildControllers/BuildControllers";

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 2,
            bacon: 1,
            cheese: 0,
            meat: 0
        },

    }


    render() {
        return(
            <div>
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <div>
                        <BuildControllers></BuildControllers>
                    </div>


                </Aux>
            </div>
        );
    }
}

export default BurgerBuilder;