
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import SliceLogin from './Authentication/SliceLogin';
import  SignupSlice  from './Authentication/SliceSignu';  
import {  persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};



const rootReducer = combineReducers({
  loginservice:SliceLogin,
    Signup:SignupSlice
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
  });
  export const persistor = persistStore(store);