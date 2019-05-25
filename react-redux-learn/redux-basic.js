const redux = require('redux');
const createStore = redux.createStore;
const intialState = {
    counter: 0
};
//reducer
const rootReducer = (state = intialState, action) => {
    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    return state;
}

//store
const store = createStore(rootReducer);
//subscription
store.subscribe(() => {
    console.log('[From Subscription]', store.getState());
});


//dispatching action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });

