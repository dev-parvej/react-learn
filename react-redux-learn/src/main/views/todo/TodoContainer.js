import React from 'react'
import { Route } from "react-router-dom";
import CreateEditTodo from "./Component/CreateEditTodo";

const TodoContainer = props => {
    return (
        <React.Fragment>
            <Route path={ props.match.url } component={ CreateEditTodo } />
        </React.Fragment>
    );
}

export default TodoContainer;