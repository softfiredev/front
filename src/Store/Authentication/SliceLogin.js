import {createSlice} from "@reduxjs/toolkit";
import { Loginuser } from '../../Store/Service/LoginService'

export const userSlice=createSlice({
  name:"loginservice",
  initialState:{
    accessToken:"",
    refreshToken:"",
    isLogin:false,
    data:{}
  },
  reducers: {},
  extraReducers:{
    [Loginuser.pending]:(state,)=>{
      state.isLogin=false;
    },
    [Loginuser.fulfilled]:(state,{payload:{accessToken,refreshToken,error}})=>{
      if(error!=="bloque")
     {
      state.isLogin=true;
      state.accessToken=accessToken;
      state.refreshToken=refreshToken;
     }
     else{
   
      state.isLogin=false;
      state.accessToken=error;
     }

      
    },
    [Loginuser.rejected]:(state)=>{
      state.isLogin=false

      
    },
  }  

})

export default userSlice.reducer;