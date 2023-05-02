import {createSlice} from "@reduxjs/toolkit";
export const SliceFilter=createSlice({
  name:"filter",
  initialState:{filter:{prods:[]}},
  reducers:{
    filter:(state,action)=>{
        state.filter=action.payload;
    },
  },

})
export const{filter}=SliceFilter.actions
export default SliceFilter.reducer;