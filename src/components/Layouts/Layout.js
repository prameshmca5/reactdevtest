import React from "react";
import aux from "../../hoc/Auxiliary";
import "./Layout.css";

const layout = (props) =>{
   return <aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="content">
            {props.children}
        </main>
    </aux>;
};

export default layout;