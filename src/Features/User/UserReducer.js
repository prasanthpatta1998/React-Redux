import { Fetching_Failure, Fetching_Request, Fetching_Success } from "./UserTypes"

const initialState = {
    loading: true,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case Fetching_Request:
            return{
                ...state,
                loading: true
            }
        case Fetching_Success:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case Fetching_Failure:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}

export default userReducer