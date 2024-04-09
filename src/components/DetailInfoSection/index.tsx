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
	return (
		<DetailMain>
			<ImageDiv>
				<img
					src={`https://www.artic.edu/iiif/2/${data?.data[0].image_id}/full/400,511/0/default.jpg`}
					alt=""
				/>
				<FavoriteButton />
			</ImageDiv>
			<DescriptionDiv>
				<div>
					<HeadText>{data?.data[0].title}</HeadText>
					<ArtAuthor>{data?.data[0].artist_title}</ArtAuthor>
					<DateText>{data?.data[0].date_display}</DateText>
				</div>
				<div>
					<HeadText>Overview</HeadText>
					<TextOverview>
						<OrangeSpan>Artist nacionality: </OrangeSpan>
						{data?.data[0].artist_display
							.replace(data.data[0].artist_title, '')
							.replace(/[,].*/, '')}
					</TextOverview>
					<TextOverview>
						<OrangeSpan>Dimensions: Sheet: </OrangeSpan>
						{data?.data[0].dimensions}
					</TextOverview>
					<TextOverview>
						<OrangeSpan>Credit Line: </OrangeSpan>
						{data?.data[0].credit_line}
					</TextOverview>
					<TextOverview>
						<OrangeSpan>Repository: </OrangeSpan>
						{data?.data[0].place_of_origin}
					</TextOverview>
					<TextOverview>
						{data?.data[0].is_public_domain ? 'public' : 'not public'}
					</TextOverview>
				</div>
			</DescriptionDiv>
		</DetailMain>
	);
}
