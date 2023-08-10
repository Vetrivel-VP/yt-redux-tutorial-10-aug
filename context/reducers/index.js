import { combineReducers } from "redux";
import toDoReducer from "./toDoReducer";

const rootReducer = combineReducers({
  todos: toDoReducer,
});

export default rootReducer;
