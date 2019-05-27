import { combineReducers } from 'redux'
import counter from './reducers/counter'
import person from './reducers/person'
import todo from './reducers/todo'

const reducer = combineReducers({
    ctr: counter,
    person,
    todo
});

export default reducer;