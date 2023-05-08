import {createSlice} from "@reduxjs/toolkit";
import { Globalvariable } from './../Service/Globalvariable';

export const SliceGlobal=createSlice({
  name:"SliceGlobal",
  initialState:{
    Global:[{}],
    status:null
  },
  reducers: {},
  extraReducers:{
    [Globalvariable.fulfilled]:(state,{payload})=>{
        state.Global=payload
       state.status="success"
    },
   [Globalvariable.pending]:(state)=>{
    state.status="loading"
   },
   [Globalvariable.rejected]:(state,{payload})=>{
    state.status="failed"
   }

  }  

})

export default SliceGlobal.reducer;