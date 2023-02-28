import {
    ADD_TODO,
    COMPLETE_ALL,
    TOGGLE_TODO,
    DELETE_TODO,
    FILTER_TODO,
    REMOVE_ALL_COMPLETE,
    UPDATE_COLOR
} from "./actionTypes";

export const addTodo = (value) => {
    return {
        type: ADD_TODO,
        payload: value
    }
}
export const deleteTodo = (value) => {
    return {
        type: DELETE_TODO,
        payload: value
    }
}
export const toggleTodo = (value) => {
    return {
        type: TOGGLE_TODO,
        payload: value
    }
}
export const completeAllTodo = () => {
    return {
        type: COMPLETE_ALL,
    }
}
export const updateColor = (value) => {
    return {
        type: UPDATE_COLOR,
        payload: value
    }
}
export const deleteAllCompleted = () => {
    return {
        type: REMOVE_ALL_COMPLETE,
    }
}
export const filterTodo = (value) => {
    return {
        type: FILTER_TODO,
        payload: value
    }
}
