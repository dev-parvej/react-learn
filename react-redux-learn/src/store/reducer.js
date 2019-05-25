import { combineReducers } from 'redux'
import counter from './reducers/counter'
import person from './reducers/person'

const reducer = combineReducers({
    ctr: counter,
    person: person
});

export default reducer;