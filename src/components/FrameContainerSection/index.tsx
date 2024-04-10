import {
	FrameContainer,
	CardContainer,
	Loader,
	ImageStyled,
	LinkStyled,
} from './styled';
import { InfoBlock } from 'components/InfoBlock';
import loader from 'assets/svg/loader.svg';
import defaultImafe from 'assets/svg/imageNotFoun.svg';
import { IFrameContainerSectionProps } from 'constants/interfaces/IFrameContainerSection';

export function FrameContainerSection({
	status,
	paintings,
	inset = false,
}: IFrameContainerSectionProps) {
	return (
		<FrameContainer $inset={inset}>
			{status === 'fulfilled' && paintings ? (
				<>
					{paintings.map((painting) => (
						<LinkStyled key={painting.id} to={`/detailInfo/${painting.id}`}>
							<CardContainer>
								{!inset ? (
									<ImageStyled
										src={
											painting.image_id
												? `https://www.artic.edu/iiif/2/${painting.image_id}/full/387,444/0/default.jpg`
												: defaultImafe
										}
									/>
								) : null}
								<InfoBlock
									title={painting.title}
									artist_title={painting.artist_title}
									is_public_domain={painting.is_public_domain}
									image_url={painting.image_id}
									paintingId={painting.id}
									image={
										inset
											? painting.image_id
												? `https://www.artic.edu/iiif/2/${painting.image_id}/full/387,444/0/default.jpg`
												: defaultImafe
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
