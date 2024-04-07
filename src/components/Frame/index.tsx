import { InfoBlock } from 'components/InfoBlock';
import {
	CardContainer,
	FrameContainer,
	ImageStyled,
	Loader,
} from 'components/Frame/styled';
import { HeaderForSection } from 'components/HeaderForSection';
import { Pagination } from 'components/Pagination';
import { useState } from 'react';
import loader from 'assets/svg/loader.svg';
import { useGetPaintings } from 'utils/useGetPaintings';

export function Frame() {
	const [page, setPage] = useState(1);
	const { painting, pagination, status } = useGetPaintings(page);

	return (
		<>
			<HeaderForSection />
			<FrameContainer>
				{status === 'fulfilled' && painting ? (
					<>
						{painting.data.map((painting) => (
							<CardContainer key={painting.id}>
								<ImageStyled
									src={`https://www.artic.edu/iiif/2/${painting.image_id}/full/387,444/0/default.jpg`}
									alt="no photo"
								/>
								<InfoBlock
									title={painting.title}
									artist_title={painting.artist_title}
									verificationLevel="public"
								/>
							</CardContainer>
						))}
					</>
				) : (
					<Loader>
						<img src={loader} alt="something went wrong" />
					</Loader>
				)}
			</FrameContainer>
			{pagination ? (
				<Pagination paginationData={pagination} setPage={setPage} />
			) : null}
		</>
	);
}
