import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPaintingsAnswer } from 'utils/IPaintinsAnswer';

export const paintingApi = createApi({
	reducerPath: 'paintingApi',
	tagTypes: ['Painting'],
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL_API }),
	endpoints: (builder) => ({
		getPaintings: builder.query<IPaintingsAnswer, number>({
			query: (limit) =>
				`api/v1/artworks?limit=${limit}&classification_titles=painting`,
		}),
	}),
});

export const { useGetPaintingsQuery } = paintingApi;
