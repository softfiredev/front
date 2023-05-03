import {createSlice} from "@reduxjs/toolkit";
export const SlicePanier=createSlice({
  name:"Panier",
  initialState:{panier:[], nbprod:0 ,status:null},
  reducers:{
    add:(state,action)=>{
        const ProduitExist =state.panier.find((obj)=>obj.idp===action.payload.idp)?true:false
        if(ProduitExist){
          state.panier.forEach((obj)=>{
            if (obj.idp === action.payload.idp) {
              obj.qte = obj.qte+action.payload.qte;
            }
          })        
        }else{
          state.panier.push(action.payload);
          state.nbprod = state.panier?.length;
          state.status="success";
        }
      
       
    },
    remove:(state,action)=>{
      state.panier.splice(action.payload,1);
      state.nbprod = state.panier?.length;
      state.status="success"
    }
    
  },

})
export const{add,remove}=SlicePanier.actions
export default SlicePanier.reducer;