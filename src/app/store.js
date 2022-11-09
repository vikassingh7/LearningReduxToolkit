import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counterSlice'
//import storage from 'redux-persist/lib/storage';
import { combineReducers,applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import recipesReducer from '../ApiSlice'
import logger from 'redux-logger'



import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = combineReducers({
    counter: counterReducer,
    recipes:recipesReducer,
  });

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };
  const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
  
    devTools: process.env.NODE_ENV !== 'production',
  
    middleware: [thunk,logger],
  });