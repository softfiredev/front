
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import SliceLogin from './Authentication/SliceLogin';
import  SignupSlice  from './Authentication/SliceSignu';  
import {  persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import SlicebntGoogle from './Authentication/SlicebntGoogle';
import SliceAllproduitShope from './librairieApi/SliceAllProduitShope';
import SlicegetInfoLibrairie from './librairieApi/SlicegetInfoLibrairie';
import SliceAllProduitBylibrairie from './librairieApi/SliceAllProduitBylibrairie';
import SliceProduitDetailLibrairie from './librairieApi/SliceProduitDetailLibrairie';
import SliceAllavisProduitDetail from './librairieApi/SliceAllavisProduitDetail';
import SlicePanier  from './panier/panierSlice';
import SliceCommande  from './panier/commandeSlice';
import AjouteCommandeSlice from './commande/AjouteCommandeSlice';
import SliceAllproduitByCategorie from './librairieApi/SliceAllproduitByCategorie';
import SliceidentiteClient from './ClientApi/SliceidentiteClient';
import SliceProduitFavorie from './ClientApi/SliceProduitFavorie';
import SliceAllCommandeByClient from './commande/SliceAllCommandeByClient';
import SliceAvisClient from './ClientApi/SliceAvisClient';
import SliceGlobal from './Globalvariable/SliceGlobal';
import SlicefindCommandeBylibrairie from './commande/SlicefindCommandeBylibrairie';
import SliceDetailcomonde from './commande/SliceDetailcomonde';
const persistConfig = {
    key: 'root',
    storage,
};
const rootReducer = combineReducers({
    loginservice:SliceLogin,
    Signup:SignupSlice,
    Googleservice:SlicebntGoogle,
    AllProduitShope:SliceAllproduitShope,
    infoLibrairie:SlicegetInfoLibrairie,
    AllProduitBylibrairie:SliceAllProduitBylibrairie,
    ProduitDetailLibrairie:SliceProduitDetailLibrairie,
    AllAvisProduitDeatil:SliceAllavisProduitDetail,
    Panier:SlicePanier,
    Commande:SliceCommande,
    AjouteCommande:AjouteCommandeSlice,
    AllProduitlibrairieByCategorie:SliceAllproduitByCategorie,
    IdentiteClient:SliceidentiteClient,
    produiFavorie:SliceProduitFavorie,
    AllcommandeByclient:SliceAllCommandeByClient,
    AvisClient:SliceAvisClient,
    Globalvariable:SliceGlobal,
    findCommandeBylibrairie:SlicefindCommandeBylibrairie,
    Detailcomonde:SliceDetailcomonde,
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
  });
  export const persistor = persistStore(store);