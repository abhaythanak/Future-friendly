import { applyMiddleware } from "redux";
import {createStore} from "react-redux"
import thunk from "redux-thunk"
import reducers from "./Reducer"

export const store = createStore(reducers, {}, applyMiddleware(thunk))