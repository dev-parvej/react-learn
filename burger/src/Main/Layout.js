import React from 'react'
import TopBar from '../Partial/TopBar'

const Layout = props => (
    <React.Fragment>
        <TopBar/>
        { props.children }
    </React.Fragment>
);

export default Layout;