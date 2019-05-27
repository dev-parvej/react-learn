import axios from 'axios'

export const SAVE_TODO = 'SAVE_TODO'
export const saveTodo = payload => {
    return dispatch => {
        axios.post("http://localhost:1208/store-todo", payload).then(response => {
            dispatch({
                type: SAVE_TODO,
                response: response.data
            });
        }).catch(error => {
            console.log(error);
        });
    }
}