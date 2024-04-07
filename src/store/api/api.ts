import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPaintingByIdAnswer } from 'constants/IPaintingByIdAnswer';
import { IPaintingsAnswer } from 'constants/IPaintinsAnswer';

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
				`api/v1/artworks/search?page=${page}&limit=${limit}&q=painting&fields=id`,
		}),
		getPaintingsByIds: builder.query<IPaintingByIdAnswer, number[] | undefined>(
			{
				query: (ids) =>
					`api/v1/artworks?ids=${ids?.join()}&fields=id,artist_title,image_id,title`,
			}
		),
	}),
});

export const { useGetPaintingsQuery, useGetPaintingsByIdsQuery } = paintingApi;
