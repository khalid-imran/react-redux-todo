import { combineReducers } from "redux";
import todoReducer from "./todo/reducer";
import filterReducer from "./filter/reducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    filter: filterReducer
});

export default rootReducer;
