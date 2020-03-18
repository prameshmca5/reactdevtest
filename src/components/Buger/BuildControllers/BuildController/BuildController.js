import React from "react";
import "./BuildController.css";

const BuildController = (props) => {
    return(
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <div>
                <button className="Less">Less</button>

            </div>
            <div><button className="More">More</button></div>
        </div>
    )
};

export default BuildController;