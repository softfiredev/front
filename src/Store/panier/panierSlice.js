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
              obj.qte = obj.qte+Number(action.payload.qte);
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
      console.log(action)
    },
    update:(state,action)=>{
      const ProduitExist =state.panier.find((obj)=>obj.idp===action.payload.idp)?true:false
      if(ProduitExist){
        state.panier.forEach((obj)=>{
          if (obj.idp === action.payload.idp) {
            obj.qte=Number(action.payload.qte);
          }
        })        
      }
  },
  removeAll:(state,action)=>{
    state.panier=[];
    state.nbprod =0;
    state.status="success"
  },
    
  },

})
export const{add,remove,update,removeAll}=SlicePanier.actions
export default SlicePanier.reducer;