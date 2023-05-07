import {createSlice} from "@reduxjs/toolkit";
import { getAllProduitFavorie } from "../Service/AllProduitFavorieByclient";
export const produiFavorie=createSlice({
  name:"produiFavorie",
  initialState:{
    produiFavorieClient:[{}],
    status:null
  },
  reducers: {},
  extraReducers:{
    [getAllProduitFavorie.fulfilled]:(state,{payload})=>{
        state.produiFavorieClient=payload.produitFavorie
        state.status="success"
    },
   [getAllProduitFavorie.pending]:(state)=>{
    state.status="loading"
   },
   [getAllProduitFavorie.rejected]:(state)=>{
    state.status="failed"
   }
  }  
})

export default produiFavorie.reducer;