import axios from "axios";
import { Fetching_Failure, Fetching_Request, Fetching_Success } from "./UserTypes";

export const pending = () => ({
    type: Fetching_Request
})

export const success = (users) => ({
    type: Fetching_Success,
    payload: users
})

export const failure = (error) => ({
    type: Fetching_Failure,
    payload: error
})

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(pending)
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            response => {
                const users = response.data
                console.log("Users ===>",users)
                dispatch(success(users))
            }
        ).catch(
            error => {
                const errorMsg = error.message
                dispatch(failure(errorMsg))
            }
        )
    }
}