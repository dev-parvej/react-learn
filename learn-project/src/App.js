import React, { Component } from 'react';
import './App.css';
import NavBar from './Partial/NavBar'
import Footer from './Partial/Footer'
import Person from './Partial/Persion'
import Aux from './hoc/Aux'

class App extends Component {
    constructor(props){
        super(props);
        console.log("Constructor: Hi i am App.js from react. You know me right. Can you please render me")
    }
    state = {
        appName: "Learn project",
        version: '3.0',
        showApp: true,
        personState: [
            {
                name: 'Akash Ahammad',
                age: 23,
                email: "akashajaj09@gmail.com",
                hobby: "Programming..."
            },
            {
                name: 'Akash AJ',
                age: 25,
                email: "akashaj09@gmail.com",
                hobby: "AH ha ha AH..."
            },
            {
                name: 'Parvej Ahammad',
                age: 26,
                email: "akashajaj09@gmail.com",
                hobby: "He..."
            }
        ]
    };

    switchPerson = (name) => {
        alert("Akash");
    };

    switchNameOfPerson = (event, index) => {
        const persons = [...this.state.personState];
        persons[index].name = event.target.value;
        this.setState({
            personState: persons
        });
    };

    deletePerson = (personIndex) => {
        const persons = [...this.state.personState];
        persons.splice(personIndex, 1);
        this.setState({personState: persons});
    };

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps: Ok i am calling the render boss. Can you please just wait");
        return state;
    }
    componentDidMount() {
        console.log("componentDidMount: Ok now I am done");
    }

    render() {
        console.log("Renderer: Let me finish rendering the app!!");
        let app = null;
        if(this.state.showApp){
            app = (
                <Aux>
                    <NavBar siteName={this.state.appName}/>
                    <div className="row">
                        <div className="col-6 offset-3">
                            <button>Save</button>
                            { this.state.personState.map((person, index) => {
                                return <Person key={person.age} person={person} click={this.deletePerson.bind(index)} changed={(event) => this.switchNameOfPerson(event, index)}/>
                            })
                            }
                        </div>
                    </div>
                </Aux>
            )
        }

        return (
            <div className="App">
                {app}
            </div>
        );

    }
}

export default App;
