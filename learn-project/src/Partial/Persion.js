import React from 'react'
import './Persion.module.css'
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'
import PropTypes from 'prop-types'

class Person extends React.Component{
    constructor(props){
        super(props);
        this.refsElement = React.createRef();
    }
    componentDidMount() {
        this.refsElement.current.focus();
    }

    render() {
        return (
            <Aux>
                <div className="card-body">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Hobby</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{ this.props.person.name }</td>
                            <td onClick={ this.props.click }>{ this.props.person.age }</td>
                            <td>{ this.props.person.email }</td>
                            <td>{ this.props.person.hobby }</td>
                        </tr>
                        </tbody>
                    </table>
                    <input type="text"
                           className="form-control"
                           value={this.props.person.name}
                           onChange={this.props.changed}
                           ref={this.refsElement}
                    />
                    <button>Save</button>
                </div>
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    person: PropTypes.object
};

export default withClass(Person, 'card');