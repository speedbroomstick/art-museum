import { HeaderForSection } from 'components/HeaderForSection';
import { Pagination } from 'components/Pagination';
import { useState } from 'react';
import { useGetPaintings } from 'utils/useGetPaintings';
import { FrameContainerSection } from 'components/FrameContainerSection';

export function Frame() {
	const [page, setPage] = useState(1);
	const { painting, pagination, status } = useGetPaintings(page, 3);

	return (
		<>
			<HeaderForSection
				orangeText="Topics for you"
				mainTitle="Our special gallery"
			/>
			<FrameContainerSection paintings={painting} status={status} />
			{pagination ? (
				<Pagination paginationData={pagination} setPage={setPage} />
			) : null}
		</>
	);
}
