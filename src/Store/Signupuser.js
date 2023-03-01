import {createSlice} from "@reduxjs/toolkit";


export const Signupslice=createSlice({
  name:"signup",
  initialState:{value:{userinfo:"",success:false,message:""}},
  reducers:{
    Signustore:(state,action)=>{
        state.value=action.payload;
    },
  },

})

export const{Signustore}=Signupslice.actions
export default Signupslice.reducer;