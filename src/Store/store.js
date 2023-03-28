
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import SliceLogin from './Authentication/SliceLogin';
import  SignupSlice  from './Authentication/SliceSignu';  
import {  persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import SlicebntGoogle from './Authentication/SlicebntGoogle';

const persistConfig = {
    key: 'root',
    storage,
};



const rootReducer = combineReducers({
  loginservice:SliceLogin,
    Signup:SignupSlice,
    Googleservice:SlicebntGoogle
  });
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export const store = configureStore({
    reducer: persistedReducer,
  });
  export const persistor = persistStore(store);