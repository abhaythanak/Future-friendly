import { configureStore } from "@reduxjs/toolkit"

import CartSlice from "./CartSlice";

const store = configureStore({
    reducer: {
        reducer: {
            cart:CartSlice
        }
    }


});

export default store;


/**
 * create store
 * 
 * - configureStore() - RTK
 * 
 * -<Provider store = {store}> - import from react "react-redux"
 * 
 * Slice
 * - RTK - createSlice({
 * name::,
 * initialState:
 * reducers: {
 * addItem: (state, action)=> { state= action.payload}
 * }
 * })
 * 
 * export const {addItem, removeItem} = cartSlice.action
 * export default cartSlice.reducer
 * 
 * 
 * 
 * 
 * put that slice into the store
 *   -{
 * reducer: {
 *           cart: cartSlice,
 *           user: useSlice
 * }
 * }
 */