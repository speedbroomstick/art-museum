import { IPaintingByIdAnswer } from 'constants/IPaintingByIdAnswer';
import {
	HeadText,
	DescriptionDiv,
	DetailMain,
	ArtAuthor,
	DateText,
	TextOverview,
	OrangeSpan,
	ImageDiv,
} from './styled';
import { FavoriteButton } from 'components/FavoriteButton';

export function DetailInfoSection({
	data,
}: {
	data: IPaintingByIdAnswer | undefined;
}) {
	const painting = data?.data[0];
	return (
		<>
			{painting ? (
				<DetailMain>
					<ImageDiv>
						<img
							src={`https://www.artic.edu/iiif/2/${painting.image_id}/full/400,511/0/default.jpg`}
							alt=""
						/>
						<FavoriteButton
							artist_title={painting.artist_title}
							is_public_domain={painting.is_public_domain}
							paintingId={painting.id}
							title={painting.title}
						/>
					</ImageDiv>
					<DescriptionDiv>
						<div>
							<HeadText>{painting.title}</HeadText>
							<ArtAuthor>{painting.artist_title}</ArtAuthor>
							<DateText>{painting.date_display}</DateText>
						</div>
						<div>
							<HeadText>Overview</HeadText>
							<TextOverview>
								<OrangeSpan>Artist nacionality: </OrangeSpan>
								{painting.artist_display
									.replace(data.data[0].artist_title, '')
									.replace(/[,].*/, '')}
							</TextOverview>
							<TextOverview>
								<OrangeSpan>Dimensions: Sheet: </OrangeSpan>
								{painting.dimensions}
							</TextOverview>
							<TextOverview>
								<OrangeSpan>Credit Line: </OrangeSpan>
								{painting.credit_line}
							</TextOverview>
							<TextOverview>
								<OrangeSpan>Repository: </OrangeSpan>
								{painting.place_of_origin}
							</TextOverview>
							<TextOverview>
								{painting.is_public_domain ? 'public' : 'not public'}
							</TextOverview>
						</div>
					</DescriptionDiv>
				</DetailMain>
			) : null}
		</>
	);
}
