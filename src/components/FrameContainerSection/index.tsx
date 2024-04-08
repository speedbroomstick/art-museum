import {
	FrameContainer,
	CardContainer,
	Loader,
	ImageStyled,
	LinkStyled,
} from './styled';
import { InfoBlock } from 'components/InfoBlock';
import loader from 'assets/svg/loader.svg';
import { IFrameContainerSection } from 'constants/IFrameContainerSection';

export function FrameContainerSection({
	status,
	paintings,
	inset = false,
}: IFrameContainerSection) {
	return (
		<FrameContainer $inset={inset}>
			{status === 'fulfilled' && paintings ? (
				<>
					{paintings.data.map((painting) => (
						<LinkStyled key={painting.id} to={`/detailInfo/${painting.id}`}>
							<CardContainer key={painting.id}>
								{!inset ? (
									<ImageStyled
										src={`https://www.artic.edu/iiif/2/${painting.image_id}/full/387,444/0/default.jpg`}
										alt="no photo"
									/>
								) : null}
								<InfoBlock
									title={painting.title}
									artist_title={painting.artist_title}
									verificationLevel="public"
									image={
										inset
											? `https://www.artic.edu/iiif/2/${painting.image_id}/full/387,444/0/default.jpg`
											: undefined
									}
								/>
							</CardContainer>
						</LinkStyled>
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
