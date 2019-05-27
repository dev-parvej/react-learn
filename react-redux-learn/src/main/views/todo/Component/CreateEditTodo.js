import React from 'react';
import { connect } from 'react-redux'
import SimpleReactValidator from 'simple-react-validator';
import * as todoActions from './../../../../store/actions/todoActions'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import MatButton from '@material-ui/core/Button';

class CreateEditTodo extends React.Component {
    constructor(props){
        super(props);
        this.validator = new SimpleReactValidator();
        document.title = "Create todo";
    }
    state = {
        todo: {
            title: '',
            description: ''
        }
    }

    changeInputHandler = (event, index) => {
        let todo = { ...this.state.todo }
        todo[index] = event.target.value
        this.setState({
            todo: todo
        });
    }

    saveTodo = (event) => {
        event.preventDefault();
        if(this.validator.allValid()){
            this.props.saveTodo(this.state.todo)
        }else{
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
                <form className={ classes.container } method="post" onSubmit={ this.saveTodo }>
                    <Card className={classes.card}> 
                        <CardActionArea>
                            <CardHeader title="Todo" classes={ {title: classes.title, root: classes.root} }></CardHeader>
                            <CardContent>
                                <TextField 
                                    label="Title" 
                                    className={ classes.textField } 
                                    variant="outlined" 
                                    value={ this.state.title }
                                    name="title"
                                    onChange={ (event) => this.changeInputHandler(event, 'title') } 
                                    aria-describedby="component-error-text"
                                />
                                { 
                                    this.validator.message(
                                        'title', this.state.todo.title, 'required|min:5'
                                    ) 
                                }

                                <TextField 
                                    label="Description"
                                    multiline={ true }
                                    rows={ 4 } 
                                    className={ classes.textField }
                                    variant="outlined"
                                    value={ this.state.description }
                                    onChange={ (event) => this.changeInputHandler(event, 'description') } 
                                />
                                { 
                                    this.validator.message(
                                        'title', this.state.todo.description, 'required|min:20'
                                    ) 
                                }
                                
                            </CardContent>
                        </CardActionArea>
                        <MatButton variant="contained" type="submit" className={classes.button}>
                            Save
                        </MatButton>
                    </Card>
                </form>
            </React.Fragment>
        )
    }
}



const styles = theme => ({
    container: {
      minWidth: '100%',
      marginTop: '10px'
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '100%',
      marginBottom: theme.spacing.unit + 5
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    card: {
        maxWidth: '100%',
    },
    media: {
        objectFit: 'cover',
    },
    title: {
        fontSize: '18px',
        color: 'white'
    },
    root: {
        backgroundColor: '#3f51b5',
    },
    button: {
        margin: theme.spacing.unit,
        marginTop: -theme.spacing.unit + 5
    }
});

const mapStateToProps = state => {
    return {
        response: state.todo.response
    }
}

const mapActionToProps = dispatch => {
    return {
        saveTodo: (payload) => dispatch(todoActions.saveTodo(payload)) 
    }
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(CreateEditTodo));