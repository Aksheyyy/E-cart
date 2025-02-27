import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
    name : "wishlist",
    initialState : [],
    reducers:{
        //add product to wishlist
        addToWishlist : (state,productByComponentAction)=>{
            state.push(productByComponentAction.payload)
        },
        //remove product from wishlist,component must pass product id
        removeWishListItem : (state,productByComponentAction)=>{
            return state.filter(item=>item.id!=productByComponentAction.payload)
        }
    }
})

export const {addToWishlist,removeWishListItem} = wishlistSlice.actions
export default wishlistSlice.reducer