import * as todoAction from './../actions/todoActions'

const initialState = {  response: {  } }

const reducer = (state = initialState, action) => {
    switch (action.type){
        case todoAction.SAVE_TODO: 
            return{
                ...state,
                response: action.response
            }
        default: 
            return state;
    }
}

export default reducer;