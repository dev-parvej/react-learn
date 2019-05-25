import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
//import HomeImage from './HomeImage'
import asyncComponent from '../../hoc/asyncComponent'

const HomeImage = asyncComponent(() => {
    return import('./HomeImage');
});

const homeLayout = props => {
    return (
        <React.Fragment>
            <Route path={ "/" } exact component={ Home } /> 
            <Route path={ "/image/:id" } exact component={ HomeImage } /> 
        </React.Fragment>
    );
}

export default homeLayout;