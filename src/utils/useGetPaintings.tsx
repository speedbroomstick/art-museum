import { useEffect } from 'react';
import { useGetPaintingsByIdsQuery, useGetPaintingsQuery } from 'store/api/api';
import { sortByLetter } from 'utils/sortByLetter';
import { useAppSelector } from 'utils/hooks';
import { useActions } from 'utils/useActions';

export function useGetPaintings(page: number, limit: number, offset: number) {
	const paintings = useAppSelector((state) => state.paintings);
	const searchValue = useAppSelector((state) => state.searchValue);
	const { setPaintings } = useActions();

	const { data } = useGetPaintingsQuery({
		page,
		search: searchValue.value,
	});
	const { data: painting, status } = useGetPaintingsByIdsQuery({
		ids: data?.data.map((id) => id.id),
	});
	useEffect(() => {
		if (painting?.data)
			setPaintings(
				searchValue.value
					? painting.data
					: sortByLetter(painting.data, !searchValue.sort)
			);
	}, [painting]);
	return {
		painting: [...paintings.paintings].splice(
			offset / page === 99 ? 0 : offset - (page - 1) * 99,
			limit
		),
		status,
		pagination: data?.pagination,
	};
}
