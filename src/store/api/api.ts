import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPaintingByIdAnswer } from 'constants/interfaces/IPaintingByIdAnswer';
import { IPaintingsAnswer } from 'constants/interfaces/IPaintinsAnswer';

export const paintingApi = createApi({
	reducerPath: 'paintingApi',
	tagTypes: ['Painting'],
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL_API }),
	endpoints: (builder) => ({
		getPaintings: builder.query<
			IPaintingsAnswer,
			{ page: number; search: string; sort: boolean }
		>({
			query: ({ page = 1, search = '', sort }) =>
				`api/v1/artworks/search?page=${page}&limit=99&q=painting ${search}&fields=id${sort ? '&sort=fiscal_year' : ''}`,
		}),
		getPaintingsByIds: builder.query<
			IPaintingByIdAnswer,
			{ ids: number[] | undefined }
		>({
			query: ({ ids = [4] }) =>
				`api/v1/artworks?ids=${ids?.join()}&fields=id,artist_title,image_id,title,date_display,place_of_origin,dimensions,credit_line,is_public_domain,artist_display&limit=99`,
		}),
	}),
});

export const { useGetPaintingsQuery, useGetPaintingsByIdsQuery } = paintingApi;
