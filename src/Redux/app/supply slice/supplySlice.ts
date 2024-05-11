import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allSupplies : [] 
}


export const supplySlice = createSlice({
    name : 'supplies',
    initialState, 
    reducers : {}
})


export const {} = supplySlice.actions ; 
export default supplySlice.reducer ;