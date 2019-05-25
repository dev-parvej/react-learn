import React from 'react'
import { Route } from 'react-router-dom';
import Posts from './Component/Posts';
import PostDetails from './Component/PostDetails';

const homeLayout = (props) => {
    return(
        <React.Fragment>
            <Route path={ props.match.url } exact component={ Posts } />
            <Route path={ "/posts/:id" } exact component={ PostDetails } />
        </React.Fragment>
    );
}

export default homeLayout;