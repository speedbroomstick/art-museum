import {
	ArtText,
	ArtistText,
	DetailsBlock,
	ImageContainer,
	StatusText,
} from './styled';
import { IInfoBlock } from 'constants/IInfoBlock';
import { FavoriteButton } from 'components/FavoriteButton';

export function InfoBlock({
	paintingId,
	image_url,
	title,
	artist_title,
	is_public_domain,
	image,
}: IInfoBlock) {
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
			<FavoriteButton
				artist_title={artist_title}
				is_public_domain={is_public_domain}
				image_id={image_url}
				id={paintingId}
				title={title}
			/>
		</DetailsBlock>
	);
}
