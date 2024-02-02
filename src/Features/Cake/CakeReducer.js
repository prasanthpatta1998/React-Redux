import { combineReducers } from "redux";
import { Buy_Cake, Ice_Cream } from "./CakeTypes";
import userReducer from "../User/UserReducer";

const cakeInitialState = {
    numOfCakes:10
}

const iceInitialState = {
    numOfIceCreams: 20
}

const cakesReducer = (state=cakeInitialState, action) => {
    switch(action.type){
        case Buy_Cake:
            return{
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        default: return state
    }
}

const iceReducer = (state=iceInitialState, action) => {
    switch(action.type){
        case Ice_Cream:
            return{
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default: return state
    }
}

const reducerFunction = combineReducers({
    cake: cakesReducer,
    iceCream: iceReducer,
    user: userReducer
})

export default reducerFunction