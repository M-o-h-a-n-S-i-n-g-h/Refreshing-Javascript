import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counter.reducer";

const reducer = combineReducers({
   counter: counterReducer,
})

const initialState = {
   counter: 0
}

const store = createStore(reducer, initialState);

export default store;