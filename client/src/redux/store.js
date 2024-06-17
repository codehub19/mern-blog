import {combineReducers, configureStore } from '@reduxjs/toolkit';
import  useReducer  from './user/userSlice.js';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { version } from 'mongoose';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer =combineReducers({
    user: useReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    version : 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({serializableCheck : false}),
    
  
})

export const persistor = persistStore(store);

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch