import { configureStore } from '@reduxjs/toolkit';
import { processMethodReducer, ingridientListReducer, onlyInConsultReducer } from './redux/filter';

export const store = configureStore({
  reducer: {
    processMethod: processMethodReducer,
    ingridientList: ingridientListReducer,
    onlyInConsult: onlyInConsultReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch