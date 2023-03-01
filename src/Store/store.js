import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {  persistStore,persistReducer} from 'redux-persist';
import Loginuser from './Loginuser';
import Signupuser from './Signupuser';
const loginPersistConfig = {
    key: 'login',
    storage,
};
const signupPersistConfig={
    key: 'signup',
    storage,
}


const rootReducer = combineReducers({
    user: persistReducer(loginPersistConfig, Loginuser),
    cart: persistReducer(signupPersistConfig, Signupuser),
  });
  
  export const store = createStore(rootReducer);
  const persistor = persistStore(store);

