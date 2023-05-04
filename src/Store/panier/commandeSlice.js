import {createSlice} from "@reduxjs/toolkit";
export const SliceCommande=createSlice({
  name:"Commande",
  initialState:{commande:[]},
  reducers:{
    add:(state,action)=>{
        const ProduitExist =state.commande.find((obj)=>obj.idprod===action.payload.idprod)?true:false
        if(ProduitExist){
            state.commande.forEach((obj)=>{
              if (obj.idprod === action.payload.idprod) {
                obj.qte = Number(action.payload.qte);
                obj.prix = Number(action.payload.prix);
              }
            })        
          }else{
            state.commande.push(action.payload);
          }
          
    },
    removeCommande:(state,action)=>{
        state.commande.splice(action.payload,1);
      }
  },

})
export const{add,removeCommande}=SliceCommande.actions
export default SliceCommande.reducer;