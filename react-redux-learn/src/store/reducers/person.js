import * as actions from '../actions/actions'
const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.STORE_PERSON:
            return{
                ...state,
                persons: state.persons.concat({
                    name: action.payload.name,
                    age: action.payload.age
                })
            }
    }
    return state;
}

export default reducer;