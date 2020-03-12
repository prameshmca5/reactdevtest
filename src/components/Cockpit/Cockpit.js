import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        console.log("welcome cockpit.js");
    });

    const assignedClasses = [];

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className="btnClass"
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );

};


export default cockpit;