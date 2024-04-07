import { useGetPaintingsByIdsQuery, useGetPaintingsQuery } from 'store/api/api';

export function useGetPaintings(page: number) {
	const { data } = useGetPaintingsQuery({ page, limit: 3 });
	const { data: painting, status } = useGetPaintingsByIdsQuery(
		data?.data.map((id) => id.id)
	);
	return { painting, status, pagination: data?.pagination };
}
