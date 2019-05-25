import React, { Suspense } from 'react'
import { Route } from 'react-router-dom'
import HomeLayout from './views/HomeLayOut'                                                                                                                                                                     

const Contact = React.lazy(() => import('./views/Contact'));
const About = React.lazy(() => import('./views/About'));

const layout = props => (
    <React.Fragment>
        <Route path='/' component={ HomeLayout } />
        <Route path='/contact' exact render={ () => (
            <Suspense fallback={ <div>Loading...</div> }>
                <Contact  />
            </Suspense>) 
        } />
        <Route path='/about' exact render={ () => (
            <Suspense fallback={ <div>Loading...</div> }>
                <About />
            </Suspense>
        ) } />
    </React.Fragment>
);

export default layout;