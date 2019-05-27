import * as todoAction from './../actions/todoActions'
import { updateObject } from '../../utility'

const initialState = {  response: {  } }

const reducer = (state = initialState, action) => {
    switch (action.type){
        case todoAction.SAVE_TODO: 
            return updateObject(state, { response: action.response });
        default: 
            return state;
    }
}

export default reducer;