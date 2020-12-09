import { ADD_TO_CART } from "../actions/type"

const initState = {
    data: JSON.parse(localStorage.getItem("data") || "[]")
}

export const postTocart =(state = initState,action) =>{
    switch(action.type){
        case(ADD_TO_CART):
        return({
            ...state,
            data: action.payload
        })
        default:
            return({
                ...state
            })
    }
}