import { FrameContainer, CardContainer, Loader, ImageStyled } from './styled';
import { InfoBlock } from 'components/InfoBlock';
import loader from 'assets/svg/loader.svg';
import { IFrameContainerSection } from 'constants/IFrameContainerSection';

export function FrameContainerSection({
	status,
	paintings,
}: IFrameContainerSection) {
	return (
		<FrameContainer>
			{status === 'fulfilled' && paintings ? (
				<>
					{paintings.data.map((painting) => (
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
	);
}
