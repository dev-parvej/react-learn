import * as actions from '../actions/actions'
import { updateObject } from '../../utility'
const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.STORE_PERSON:
            return updateObject(state, { 
                persons: state.persons.concat({ name: action.payload.name, age: action.payload.age }) 
            });
        default: 
            return state;
    }
}

export default reducer;