import React from "react";
import Person from './Person/Person'

const Perss = (props) => {
  props.persons.map((pers,index) => {
      return(<Person name={pers.name} age={pers.age} key={index}
                     click={()=>props.deletePersonHandler(index)}
          />);
      })

    };

export default Perss;