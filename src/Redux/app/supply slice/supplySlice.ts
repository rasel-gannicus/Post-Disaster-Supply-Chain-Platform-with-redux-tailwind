import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    deleteSupplyId : '',
    editButtonClicked : false
}


export const supplySlice = createSlice({
    name : 'supplies',
    initialState, 
    reducers : {
        getDeletedId : (state, action) =>{
            state.deleteSupplyId = action.payload ;
        },

        clickEdit : (state, action) => {
            if(action.payload === true){
                state.editButtonClicked = true ;
            }else{
                state.editButtonClicked = false ; 
            }
        }
    }
})


export const {getDeletedId, clickEdit} = supplySlice.actions ; 
export default supplySlice.reducer ;