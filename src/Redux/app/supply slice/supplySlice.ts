import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deleteSupplyId: "",
  editButtonClicked: false,
  editSupplyId : ""
};

export const supplySlice = createSlice({
  name: "supplies",
  initialState,
  reducers: {
    getDeletedId: (state, action) => {
      state.deleteSupplyId = action.payload;
    },

    clickEdit: (state, action) => {
      if (action.payload === true) {
        state.editButtonClicked = true;
      } else {
        state.editButtonClicked = false;
      }
    },

    setEditId : (state, action) => {
        state.editSupplyId = action.payload
    }
  },
});

export const { getDeletedId, clickEdit, setEditId } = supplySlice.actions;
export default supplySlice.reducer;
