import {createSlice} from "@reduxjs/toolkit";
export const SlicePanier=createSlice({
  name:"Panier",
  initialState:{panier:[], nbprod:0},
  reducers:{
    add:(state,action)=>{
        state.panier.push(action.payload);
        state.nbprod = state.panier?.length;
       
    },
    remove:(state,action)=>{
      state.panier.splice(action.payload,1);
      state.nbprod = state.panier?.length;
    }
    
  },

})
export const{add,remove}=SlicePanier.actions
export default SlicePanier.reducer;