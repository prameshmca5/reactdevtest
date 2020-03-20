import React, {Component} from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Buger/Burger";
import BuildControllers from "../../components/Buger/BuildControllers/BuildControllers";

const SETCONTRACTBURGERAMOUNT = {
    salad: 0.5,
    bacon: 1.2,
    cheese: 2.5,
    meat: 2.1
};


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice :4

    }

    addInhertiantHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedcount = oldCount +1;
        console.log("Helo Welcome test controller  => " + type +" => "+oldCount +"==> "+updatedcount);
        const updatedInheritance = {
            ...this.state.ingredients
        }
        updatedInheritance[type] = updatedcount;
        const oldPrice = this.state.totalPrice;
        const newPrice = SETCONTRACTBURGERAMOUNT[type];
        const totalcalculatePrice = oldPrice + newPrice;
        console.log("OldPrice:"+oldPrice);
        console.log("NewPrice:"+newPrice);
        console.log("TotalConsolePrice:"+totalcalculatePrice);
        this.setState({ingredients:updatedInheritance, totalPrice:totalcalculatePrice});
        console.log(this.state.ingredients)
    };

    removeInheritantkandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0){
        return;
    }
    const updatedcount = oldCount -1;
    console.log("Helo Welcome test controller  => " + type +" => "+oldCount +"==> "+updatedcount);
    const updatedInheritance = {
        ...this.state.ingredients
    }
    updatedInheritance[type] = updatedcount;
    const oldPrice = this.state.totalPrice;
    const newPrice = SETCONTRACTBURGERAMOUNT[type];
    const totalcalculatePrice = oldPrice - newPrice;
    this.setState({ingredients:updatedInheritance, totalPrice:totalcalculatePrice});
    console.log(this.state.ingredients)
}

    render() {
        const disableInheritance = {
            ...this.state.ingredients
        };
        for(let key in disableInheritance){
            disableInheritance[key] = disableInheritance[key]<=0;
        }

        return(
            <div>
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <div><h2>Total Amount for Burger: {this.state.totalamount}</h2></div>
                    <div>
                        <BuildControllers
                            addInherdiant={this.addInhertiantHandler}
                            removeInheritant = {this.removeInheritantkandler}
                            disabled = {disableInheritance}
                            price = {this.state.totalPrice}
                        />
                    </div>
                </Aux>
            </div>
        );
    }
}

export default BurgerBuilder;