import React, {useState} from 'react';
import './App.css';
import Person from "./Component/Persons/Person/Person";

const app = (props) =>{
    const[statesatus, setsatesatus] = ({
        statesatus : [
            {
                name: "Ramesh Pongiannan", age:"33"
            }, {
                name:"Laxshana Ramesh", age:1
            }
        ]
    });

        return (
            <div className="App">
                <div>
                    <p>
                        <h2>
                            Welcome Test React Script...
                        </h2>
                    </p>
                </div>
                <Person name={statesatus[0].name} age={this.state.persons[0].age}>Hi Am Children</Person>
                <Person name={statesatus[1].name} age={this.state.persons[1].age}/>
                <button onClick={SwitchclickHandler}>Switch to click</button>
            </div>
        );

    const SwitchclickHandler = () =>{
        console.log("Welcome to click Handler");
        const[statesatus, setsatesatus] = ({
            statesatus : [
                {
                    name: "Ramesh Pongiannan", age:"33"
                }, {
                    name:"Laxshana Ramesh", age:1
                }
            ]
        })
    }
}
export default app;
