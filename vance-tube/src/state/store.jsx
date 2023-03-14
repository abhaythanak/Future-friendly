import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import reducers from "./Reducer"

export const store = createStore(reducers, {}, applyMiddleware(thunk))