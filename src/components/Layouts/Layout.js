import React from "react";
import aux from "../../hoc/Auxiliary";

const layout = (props) =>{
   return <aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </aux>;
};

export default layout;