import { useGetPaintingsByIdsQuery, useGetPaintingsQuery } from 'store/api/api';
import { useAppSelector } from 'utils/hooks';

export function useGetPaintings(page: number, limit: number) {
	const searchValue = useAppSelector((state) => state.searchValue);
	const { data } = useGetPaintingsQuery({
		page,
		limit,
		search: searchValue.value,
		sort: searchValue.sort,
	});
	const { data: painting, status } = useGetPaintingsByIdsQuery({
		ids: data?.data.map((id) => id.id),
		limit,
	});
	return { painting, status, pagination: data?.pagination };
}
