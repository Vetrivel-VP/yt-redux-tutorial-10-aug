import { createStore } from "redux";
import rootReducer from "./reducers";

let store;

if (typeof window !== "undefined") {
  store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  store = createStore(rootReducer);
}

export default store;
