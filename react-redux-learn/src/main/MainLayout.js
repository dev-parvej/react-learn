import React, { Suspense } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Route } from 'react-router-dom';
import HomeLayout from './views/home/HomeLayout'
const TodoContainer = React.lazy(() => import('./views/todo/TodoContainer'));
const Counter = React.lazy(() => import('./views/counter/Counter'));
const Person = React.lazy(() => import('./views/person/Person'));

class MainLayout extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root} >
        <Grid md={2} lg={2} item></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} >

          <Route path="/" component={ HomeLayout } />

          <Route path="/todo/add" render={(props) => (
            <Suspense fallback={ <div>Loading...</div> }>
              <TodoContainer { ...props } />
            </Suspense>
          )} />

          <Route path="/counter" exact render={ (props) => (
            <Suspense fallback={ <div>Loading...</div> }>
              <Counter { ...props }></Counter>
            </Suspense>
          ) } />
          
          <Route path="/person" render={ (props) => (
            <Suspense fallback={ <div>Loading...</div> }>
              <Person { ...props } />
            </Suspense>
          ) } />

        </Grid>
        <Grid md={2} lg={2} item></Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

export default withStyles(styles)(MainLayout);