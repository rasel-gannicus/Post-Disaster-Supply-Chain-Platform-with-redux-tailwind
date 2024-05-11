import { configureStore } from "@reduxjs/toolkit";
import suppliesReducer from './app/supply slice/supplySlice' ;
import { supplyApi } from "./app/supply slice/supplyApi";

export const store = configureStore({
    reducer : {
        supplies : suppliesReducer ,
        [supplyApi.reducerPath] : supplyApi.reducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(supplyApi.middleware)
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch