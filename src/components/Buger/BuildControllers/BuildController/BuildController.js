import React from "react";
import "./BuildController.css";

const BuildController = (props) => {
    return(
        <div className="BuildControl">

            <div className="Label">{props.label}</div>
            <div>
                <button className="Less" onClick={props.removeInheritant} disabled={props.disabledInfo}>Less</button>

            </div>
            <div><button className="More" onClick={props.addBurgercnt}>More</button></div>
        </div>
    )
};

export default BuildController;