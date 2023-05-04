import {createSlice} from "@reduxjs/toolkit";
import { GoogleService } from '../../Store/Service/GoogleService'

export const userSlice=createSlice({
  name:"GoogleService",
  initialState:{
    accessToken:"",
    refreshToken:"",
    isLogin:false
  },
  reducers: {},
  extraReducers:{
    [GoogleService.pending]:(state,{payload:{accessToken,refreshToken}})=>{
      state.isLogin=true
      state.accessToken=accessToken;
      state.refreshToken=refreshToken;
    },
    [GoogleService.fulfilled]:(state,)=>{
      state.isLogin=false
     

    },
    [GoogleService.rejected]:(state,action)=>{
      state.isLogin=false
    },
  }  

})

export default userSlice.reducer;