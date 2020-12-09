import { combineReducers } from "redux";
import { postTocart } from "./postTocart";

export const reducers = combineReducers({
    cartState: postTocart
})