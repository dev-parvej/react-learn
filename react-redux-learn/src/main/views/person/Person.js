import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../store/actions/actions'
import Persons from './component/persons'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';


class Person extends React.Component {
    state = {
        person: {
            name: '',
            age: ''
        }
    }
    changeHandler = (event, index) => {
        const person = { ...this.state.person }
        person[index] = event.target.value;
        this.setState({
            person: person
        });
    }
    render(){
        let { classes } = this.props
        return(
            <React.Fragment>
                <Card className={classes.card}>
                    <CardContent>
                    <TextField
                        id="outlined-uncontrolled"
                        label="Name"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={ this.state.person.name }
                        onChange={ (event) => this.changeHandler(event, 'name') }
                    />
                    <TextField
                        id="outlined-uncontrolled"
                        label="Age"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        value={ this.state.person.age }
                        onChange={ (event) => this.changeHandler(event, 'age') }
                    />
                    </CardContent>
                    <CardActions>
                        <Button size="medium" onClick={ () => this.props.storePerson(this.state.person) }>Add person</Button>
                    </CardActions>
                </Card>
                <Persons />
            </React.Fragment>
        );
    }
}


const styles = theme => (
    {
        card: {
          minWidth: 275,
          marginTop: '10px'
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            width: '100%'
        },
        dense: {
            marginTop: 16,
        },
        menu: {
            width: 200,
        },
      }
);
const mapStateToProps = state => {
    return{

    }
}

const mapActionsToProps = dispatch => {
    return {
        storePerson: (person) => {
            dispatch(actions.store_person(person));
        }
    }
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Person));