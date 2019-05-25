import React from 'react'
import { connect } from 'react-redux'

const persons = (props) => {
    return(
        <React.Fragment>
           { props.persons.map((person, index) => {
               return (
                   <div key={ index }>
                        <h3>Name: { person.name }</h3>
                        <p>Age: { person.age }</p>
                   </div>
               )
           }) }
        </React.Fragment>
    )
}
const mapStatesToProps = state => {
    return {
        persons: state.person.persons
    }
}

export default connect(mapStatesToProps)(persons);