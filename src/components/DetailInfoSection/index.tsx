import { IDaum as IPaintingInfo } from 'constants/interfaces/IPaintingByIdAnswer';
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
import defaultImafe from 'assets/svg/imageNotFoun.svg';
import { FavoriteButton } from 'components/FavoriteButton';

export function DetailInfoSection({
	image_id,
	artist_title,
	is_public_domain,
	artist_display,
	credit_line,
	dimensions,
	title,
	id,
	place_of_origin,
	date_display,
}: IPaintingInfo) {
	const favoriteProps = {
		artist_title,
		id,
		image_id,
		is_public_domain,
		title,
	};
	return (
		<DetailMain>
			<ImageDiv>
				<img
					src={
						image_id
							? `https://www.artic.edu/iiif/2/${image_id}/full/400,511/0/default.jpg`
							: defaultImafe
					}
				/>
				<FavoriteButton data={favoriteProps} />
			</ImageDiv>
			<DescriptionDiv>
				<div>
					<HeadText>{title}</HeadText>
					<ArtAuthor>{artist_title}</ArtAuthor>
					<DateText>{date_display}</DateText>
				</div>
				<div>
					<HeadText>Overview</HeadText>
					{createTextOverview(
						artist_display.replace(artist_title, '').replace(/[,].*/, ''),
						'Artist nacionality:'
					)}
					{createTextOverview(dimensions, 'Dimensions: Sheet:')}
					{createTextOverview(credit_line, 'Credit Line:')}
					{createTextOverview(place_of_origin, 'Repository:')}
					{createTextOverview(is_public_domain ? 'public' : 'not public')}
				</div>
			</DescriptionDiv>
		</DetailMain>
	);
}

function createTextOverview(text: string, head?: string) {
	return (
		<TextOverview>
			<OrangeSpan>{head}</OrangeSpan>
			{text}
		</TextOverview>
	);
}
