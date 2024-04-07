import { InfoBlock } from 'components/InfoBlock';
import {
	CardContainer,
	FrameContainer,
	ImageStyled,
	Loader,
} from 'components/Frame/styled';
import { HeaderForSection } from 'components/HeaderForSection';
import { Pagination } from 'components/Pagination';
import { useGetPaintingsQuery } from 'store/api/api';
import { useState } from 'react';
import loader from 'assets/svg/loader.svg';

export function Frame() {
	const [page, setPage] = useState(1);
	const { status, data } = useGetPaintingsQuery({ page, limit: 3 });

	return (
		<>
			<HeaderForSection />
			<FrameContainer>
				{status === 'fulfilled' && data ? (
					<>
						{data.data.map((painting) => (
							<CardContainer key={painting.id}>
								<ImageStyled
									src={`https://www.artic.edu/iiif/2/${painting.image_id}/full/387,444/0/default.jpg`}
									alt="no photo"
								/>
								<InfoBlock
									title={painting.title}
									artist_title={painting.artist_title}
									verificationLevel={painting.publishing_verification_level}
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
			{data ? <Pagination data={data} setPage={setPage} /> : null}
		</>
	);
}
