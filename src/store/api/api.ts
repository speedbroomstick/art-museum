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
			{ page: number; limit: number; search: string }
		>({
			query: ({ page = 1, limit, search = '' }) =>
				`api/v1/artworks/search?page=${page}&limit=${limit}&q=painting ${search}&fields=id`,
		}),
		getPaintingsByIds: builder.query<
			IPaintingByIdAnswer,
			{ ids: number[] | undefined; limit: number }
		>({
			query: ({ ids, limit }) =>
				`api/v1/artworks?ids=${ids?.join()}&fields=id,artist_title,image_id,title,date_display,place_of_origin,dimensions,credit_line,is_public_domain,artist_display&limit=${limit}`,
		}),
	}),
});

export const { useGetPaintingsQuery, useGetPaintingsByIdsQuery } = paintingApi;
