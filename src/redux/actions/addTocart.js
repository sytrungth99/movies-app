import { ADD_TO_CART } from "./type"

export const addTocart =(movie) =>(dispatch,getState) =>{
    const cartItems = getState().cartState.data;
    console.log('cartIteam',cartItems);
     cartItems.push(movie);
    dispatch({type:ADD_TO_CART,payload:cartItems})
    

}