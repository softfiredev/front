import {createSlice} from "@reduxjs/toolkit";
import { GetAllFavorieClient } from './../Service/GetAllFavorieClient';

export const SliceFavorieClient=createSlice({
  name:"SliceFavorieClient",
  initialState:{
    FavorieClient:[{}],
    status:null
    
  },
  reducers: {},
  extraReducers:{
    [GetAllFavorieClient.fulfilled]:(state,{payload})=>{
        state.FavorieClient=payload.produitFavorie
       state.status="success"
    },
   [GetAllFavorieClient.pending]:(state)=>{
    state.status="loading"
   },
   [GetAllFavorieClient.rejected]:(state,{payload})=>{
    state.status="failed"
   }

  }  

})

export default SliceFavorieClient.reducer;