import React, {Component} from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Buger/Burger";

class BurgerBuilder extends Component {
    render() {
        return(
            <div>
                <Aux>
                    <div>
                        <Burger/>
                    </div>
                    <div>Burger Controller</div>
                </Aux>
            </div>
        );
    }
}

export default BurgerBuilder;