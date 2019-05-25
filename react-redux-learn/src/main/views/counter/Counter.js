import React from 'react'
import { connect } from 'react-redux'
import { increment_counter } from '../../../store/actions/actions'

class Counter extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div>{ this.props.ctr }</div>
                <button onClick={ this.props.incrementCounter }>INC</button>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter
    }
}

const mapActionToProps = dispatch => {
    return {
        incrementCounter: () => dispatch(increment_counter())
    }
}

export default connect(mapStateToProps, mapActionToProps)(Counter);