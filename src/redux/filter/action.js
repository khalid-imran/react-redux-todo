import {FILTER_STATUS, FILTER_COLOR} from "./actionTypes";

export const filterStatus = (value) => {
    return {
        type: FILTER_STATUS,
        payload: value
    }
}
export const filterColor = (color, changeType) => {
    return {
        type: FILTER_COLOR,
        payload: {color, changeType}
    }
}
