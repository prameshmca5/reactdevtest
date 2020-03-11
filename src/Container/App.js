import React, {Component} from 'react';
import './App.css';
import Person from "../Component/Persons/Person/Person";

class App extends Component {
    state = {
        persons : [
            {name: "Ramesh Pongiannan", age:"33"}, {name:"Laxshana Ramesh", age:1}
            , {name:"Amutha Ramesh", age:25}
        ],
        displaystate: false
    }

    deletePersonHandler(perindex) {
        debugger;
       const person = this.state.persons;
       person.splice(perindex, 1);
       this.setState({person:person});
    }

    render() {
        let psons = null;
        if(this.state.displaystate){
            psons = (
                <div>
                    {
                        this.state.persons.map((pers,index) => {
                            return(<Person name={pers.name} age={pers.age} key={index}
                                           click={()=>this.deletePersonHandler(index)}
                            />);
                        })
                    }

                </div>
                )
        }
        return (
            <div className="App">
                <div>
                    <p>
                        <h2>
                            Welcome Test React Script...
                        </h2>
                    </p>
                </div>

                <button onClick={this.displayStatusHandler}>Switch to click</button>
                {psons}
            </div>
        );
    }

    deleteelmentarrList =(perindex) => {
        console.log("Current Imdex is => "+perindex);
    }

    displayStatusHandler = () => {
       console.log("Welcome test for display Status Handler");
       const doesshow = this.state.displaystate;
        this.setState({
            displaystate: !doesshow
        })
    }


    /*SwitchclickHandler = () =>{
        console.log("Welcome to click Handler");
        this.setState({
            persons : [
                {name: "Ramesh Kumar", age:"33"}, {name:"Laxshana Amutha", age:2}
            ]
        })
    }*/

}
export default App;
