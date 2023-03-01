import {createSlice} from "@reduxjs/toolkit";
export const userSlice=createSlice({
  name:"user",
  initialState:{value:{accessToken:"",refreshToken:"",isLogin:false}},
  reducers:{
    Loginstore:(state,action)=>{
        state.value=action.payload;
    },
  },

})

export const{Loginstore}=userSlice.actions
export default userSlice.reducer;