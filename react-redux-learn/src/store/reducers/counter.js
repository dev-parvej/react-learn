import * as actions from '../actions/actions'
import { updateObject } from '../../utility'
const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.INCREMENT_COUNTER:
            return updateObject(state, { counter: state.counter + 1 })
        default: 
            return state;
    }
}

export default reducer;