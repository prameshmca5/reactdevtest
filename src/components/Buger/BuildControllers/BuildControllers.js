import React from "react";
import "./BuildControllers.css"
import BuildController from "./BuildController/BuildController";


const control = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const BuildControllers = (props) => {
    return(
        <div className="BuildControls">
            {
                control.map(ctrl=> {
                    return <BuildController
                        key={ctrl.label}
                        label={ctrl.label}
                        addBurgercnt = {() => props.addInherdiant(ctrl.type)}
                    />
                })
            }
        </div>
    )
};

export default BuildControllers;