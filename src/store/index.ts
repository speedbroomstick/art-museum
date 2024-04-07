import { configureStore } from '@reduxjs/toolkit';
import { paintingApi } from './api/api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { reducer as searchReducer } from "./slices/valueSearchSlice";

export const store = configureStore({
	reducer: {
		searchValue: searchReducer,
		[paintingApi.reducerPath]: paintingApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(paintingApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
