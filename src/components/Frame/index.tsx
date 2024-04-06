import { InfoBlock } from 'components/InfoBlock';
import {
	CardContainer,
	FrameContainer,
	ImageStyled,
} from 'components/Frame/styled';
import { HeaderForSection } from 'components/HeaderForSection';
import { Pagination } from 'components/Pagination';
import { useGetPaintingsQuery } from 'store/api/api';

export function Frame() {
	const { status, data } = useGetPaintingsQuery({ page: 1, limit: 3 });
	return (
		<>
			<HeaderForSection />
			<FrameContainer>
				{status == 'fulfilled' && data
					? data.data.map((painting) => (
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
						))
					: null}
			</FrameContainer>
			<Pagination />
		</>
	);
}
