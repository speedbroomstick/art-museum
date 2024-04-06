import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPaintingsAnswer } from 'utils/IPaintinsAnswer';

export const paintingApi = createApi({
	reducerPath: 'paintingApi',
	tagTypes: ['Painting'],
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL_API }),
	endpoints: (builder) => ({
		getPaintings: builder.query<
			IPaintingsAnswer,
			{ page: number; limit: number }
		>({
			query: ({ page = 1, limit }) =>
				`api/v1/artworks?page=${page}&limit=${limit}&classification_titles=painting`,
		}),
	}),
});

export const { useGetPaintingsQuery } = paintingApi;
