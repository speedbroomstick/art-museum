import {
	ArtText,
	ArtistText,
	DetailsBlock,
	ImageContainer,
	StatusText,
} from './styled';
import { IInfoBlockProps } from 'constants/interfaces/IInfoBlock';
import { FavoriteButton } from 'components/FavoriteButton';

export function InfoBlock({
	paintingId,
	image_id,
	title,
	artist_title,
	is_public_domain,
	image,
}: IInfoBlockProps) {
	const favoriteProps = {
		artist_title,
		id: paintingId,
		image_id,
		is_public_domain,
		title,
	};
	return (
		<DetailsBlock $image={!!image}>
			{image ? <ImageContainer src={image} /> : null}
			<div>
				<div style={{ textOverflow: 'ellipsis' }}>
					<ArtText>{title}</ArtText>
					<ArtistText>{artist_title}</ArtistText>
				</div>
				<StatusText>{is_public_domain ? 'public' : 'not public'}</StatusText>
			</div>
			<FavoriteButton data={favoriteProps} />
		</DetailsBlock>
	);
}
