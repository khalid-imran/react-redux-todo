import {initialState} from "./initialState";
import {FILTER_COLOR, FILTER_STATUS} from "./actionTypes";

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_STATUS:
            return {
                ...state,
                status: action.payload
            }
        case FILTER_COLOR:
            switch (action.payload.changeType) {
                case 'added':
                    return {
                        ...state, color: [
                            ...state.color, action.payload.color
                        ]
                    }
                case 'removed':
                    return {
                        ...state,
                        color: state.color.filter(existingColor => existingColor !== action.payload.color)
                    }
                default:
                    return state
            }
        default:
            return state
    }
}
export default filterReducer
