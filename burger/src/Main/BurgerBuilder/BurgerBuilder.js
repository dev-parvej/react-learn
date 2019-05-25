import React, { Component } from 'react';
import Burger from './Component/Burger'
import BuildControls from './Component/BuildControls'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'


class BurgerBuilder extends Component {
    state = {
      ingredients: {
          salad: 0,
          bacon: 0,
          meat: 0,
          cheese: 0
      }
    };

    updateBurgerIngredients(key){
        let currentIngredients = {...this.state.ingredients};
        currentIngredients[key] = (Number(this.state.ingredients[key]) + 1) < 3
            ? Number(this.state.ingredients[key]) + 1 :
            Number(this.state.ingredients[key]);
        this.setState({
            ingredients: currentIngredients
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container justify="center" alignItems="center" spacing={16} >
                    <Grid item xs={12} md={8} sm={12} lg={8} >
                        <Burger ingredients={this.state.ingredients} />
                    </Grid>
                    <Grid item xs={12} md={8} sm={12} lg={8} >
                        <BuildControls ingredients={this.state.ingredients} click={this.updateBurgerIngredients.bind(this)} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}




const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

export default withStyles(styles)(BurgerBuilder);