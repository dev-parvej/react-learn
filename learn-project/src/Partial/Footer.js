import React, { useState } from 'react'
import Persion from './Persion';

export default (props) => {
    const [persionState, setPersionState] = useState([
        {
            name: 'Akash Ahammad',
            age: 23,
            email: "akashajaj09@gmail.com",
            hobby: "Programming..."
        }
    ])

    const [showPersionState, changeShowPersionState] = useState( true );

    const switchPersion = (name) => {
        setPersionState([
            {
                name,
                age: 23,
                email: "akashaj09@gmail.com",
                hobby: "Playing card..."
            }
        ]);
    }

    const switchNameOfPersion = (event) => {
        setPersionState([
            {
                name: event.target.value,
                age: 23,
                email: "akashaj09@gmail.com",
                hobby: "Programming..."
            }
        ]);
    }

    

    return (
        <div className="row">
        <div className="col-12">
        <button className="btn btn-danger"
         onClick={() => changeShowPersionState(!showPersionState)}
         >
         Show/Hide
         </button>
        </div>
        {
            showPersionState ? 
            <div className="col-md-6 offset-3">
                <Persion 
                name={persionState[0].name} 
                age={ persionState[0].age } 
                email={ persionState[0].email }  
                hobby={ persionState[0].hobby }
                click={switchPersion}
                changed={ switchNameOfPersion }
                >
                </Persion>
                <button className="btn btn-primary" 
                onClick={() => switchPersion("Parvej Ahammad") }>Change persion</button>
            </div> : null
        }

        
            
        </div>
    );
}