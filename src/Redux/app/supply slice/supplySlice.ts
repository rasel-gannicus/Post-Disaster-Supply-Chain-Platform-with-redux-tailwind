import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    deleteSupplyId : ''
}


export const supplySlice = createSlice({
    name : 'supplies',
    initialState, 
    reducers : {
        getDeletedId : (state, action) =>{
            state.deleteSupplyId = action.payload ;
        }
    }
})


export const {getDeletedId} = supplySlice.actions ; 
export default supplySlice.reducer ;