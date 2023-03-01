import useReducer from './Loginuser'
import {configureStore} from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer} from 'redux-persist';

const persistConfig = {
    key: 'login',
    storage,
};

const reducers = combineReducers({  user:useReducer });
const persisteReducer= persistReducer(persistConfig,reducers)

export const store=configureStore({
    reducer:persisteReducer
    
})
