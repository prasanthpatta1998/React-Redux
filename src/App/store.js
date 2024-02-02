import { createStore } from "redux";
import reducerFunction from "../Features/Cake/CakeReducer";
import { applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';

const store = createStore(reducerFunction, applyMiddleware(thunk))
export default store