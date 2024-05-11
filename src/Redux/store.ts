import { configureStore } from "@reduxjs/toolkit";
import suppliesReducer from './app/supply slice/supplySlice' ;

export const store = configureStore({
    reducer : {
        supplies : suppliesReducer 
    } 
})