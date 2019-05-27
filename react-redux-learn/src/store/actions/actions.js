export const STORE_PERSON = 'STORE_PERSON';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const store_person = (payload) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: STORE_PERSON,
                payload: payload
            });
        }, 2000);
    }
}

export const increment_counter = () => {
    return{
        type: INCREMENT_COUNTER
    }
}