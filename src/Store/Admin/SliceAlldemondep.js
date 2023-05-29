import {createSlice} from "@reduxjs/toolkit";
import { demondePar } from "../Service/demondePar";
export const SliceAlldemondep=createSlice({
  name:"SliceAlldemondep",
  initialState:{
    demendes:[{}],
    status:null
  },
  reducers: {},
  extraReducers:{
    [demondePar.fulfilled]:(state,{payload})=>{
        state.demendes=payload.demende
        state.status="success"
    },
   [demondePar.pending]:(state)=>{
    state.status="loading"
   },
   [demondePar.rejected]:(state)=>{
    state.status="failed"
   }
  }  
})

export default SliceAlldemondep.reducer;