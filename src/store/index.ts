import { configureStore } from '@reduxjs/toolkit';
import { paintingApi } from './api/api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { reducer as searchReducer } from './slices/valueSearchSlice';
import { reducer as paintingsReducer } from './slices/paintingStorageSlice';

export const store = configureStore({
	reducer: {
		searchValue: searchReducer,
		paintings: paintingsReducer,
		[paintingApi.reducerPath]: paintingApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(paintingApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
