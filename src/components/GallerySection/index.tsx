import { HeaderForSection } from 'components/HeaderForSection';
import { Pagination } from 'components/Pagination';
import { useEffect, useState } from 'react';
import { useGetPaintings } from 'utils/useGetPaintings';
import { FrameContainerSection } from 'components/FrameContainerSection';

export function GallerySection() {
	const [page, setPage] = useState(1);
	const [offset, setOffset] = useState(0);
	const { painting, pagination, status } = useGetPaintings(page, 3, offset);
	useEffect(() => {
		if (offset >= page * 99) {
			setPage(page + 1);
		}
		if (page * 99 - offset > 99) {
			setPage(page - 1);
		}
	}, [offset]);

	return (
		<>
			<HeaderForSection
				orangeText="Topics for you"
				mainTitle="Our special gallery"
			/>
			<FrameContainerSection paintings={painting} status={status} />
			{pagination ? (
				<Pagination
					total={pagination.total}
					offset={offset}
					setOffset={setOffset}
				/>
			) : null}
		</>
	);
}
