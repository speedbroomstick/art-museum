import { useGetPaintingsByIdsQuery, useGetPaintingsQuery } from 'store/api/api';
import { useAppSelector } from 'utils/hooks';

export function useGetPaintings(page: number) {
	const searchValue = useAppSelector((state) => state.searchValue);
	const { data } = useGetPaintingsQuery({
		page,
		limit: 3,
		search: searchValue.value,
	});
	const { data: painting, status } = useGetPaintingsByIdsQuery(
		data?.data.map((id) => id.id)
	);
	return { painting, status, pagination: data?.pagination };
}
