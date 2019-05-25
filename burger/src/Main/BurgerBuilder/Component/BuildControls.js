import React, { Component } from 'react'
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import PlusIcon from '@material-ui/icons/PlusOne';
import Ingredients from './Ingrediants/Ingredients'

class BuildControls extends Component{
    render() {
        return (
            <React.Fragment>
                <List dense={ false }>
                    { Object.keys(this.props.ingredients).map((igKey, index) => {
                        return <ListItem key={index}>
                            <ListItemAvatar>
                                <Avatar>
                                    <Ingredients type={igKey} />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={ igKey }
                            />
                            <ListItemSecondaryAction>
                                <IconButton aria-label="Save" onClick={() => this.props.click(igKey)}>
                                    <PlusIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    })
                    }
                </List>
            </React.Fragment>
        );
    }
}

export default BuildControls;