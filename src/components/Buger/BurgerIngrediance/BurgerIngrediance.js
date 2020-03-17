import React, {Component} from "react";
import "./BurgerIngrediance.css";
import PropTypes from 'prop-types';

class BurgerIngrediance extends Component {
    render() {
        let ingiredance = null;

        switch (this.props.type) {

            case ("bread-bottom"):
                ingiredance = <div className="BreadBottom"></div>
                break;
            case ("bread-top"):
                ingiredance = <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                break;
            case ("meat"):
                ingiredance = <div className="Meat"></div>
                break;
            case ("cheese"):
                ingiredance = <div className="Cheese"></div>
                break;
            case ("salad"):
                ingiredance = <div className="Salad"></div>
                break;
            case ("bacon"):
                ingiredance = <div className="Bacon"></div>
                break;

            default:
                ingiredance = null;
                break;
        }

        return ingiredance;

    }
}

BurgerIngrediance.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngrediance;