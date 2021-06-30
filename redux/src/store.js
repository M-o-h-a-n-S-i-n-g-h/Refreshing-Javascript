import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { counterReducer } from "./reducers/counter.reducer";
import { watchUsers } from "./sagas/users.saga";
import { getUserReducer } from "./reducers/user.reducer";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
   counter: counterReducer,
   user: getUserReducer,
})

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchUsers);

export default store;