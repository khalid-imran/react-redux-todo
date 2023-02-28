import {
    ADD_TODO,
    COMPLETE_ALL,
    COMPLETE_TODO,
    DELETE_TODO,
    REMOVE_ALL_COMPLETE,
    TOGGLE_TODO,
    UPDATE_COLOR
} from "./actionTypes";
import initialState from "./initialState";

const todoReducer = (state = initialState(), action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.payload.text,
                    id: action.payload.id,
                    complete: false,
                    status: null,
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.complete = action.payload.complete
                    return todo
                }
                return todo
            })
        case UPDATE_COLOR:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.color = action.payload.color
                    return todo
                }
                return todo
            })
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        case COMPLETE_ALL:
            return state.map(todo => {
                todo.complete = true
                return todo
            })
        case REMOVE_ALL_COMPLETE:
            return state.filter(todo => !todo.complete)
        default:
            return state
    }
}
export default todoReducer;
