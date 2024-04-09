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
	title,
	artist_title,
	verificationLevel,
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
				<StatusText>{verificationLevel}</StatusText>
			</div>
			<FavoriteButton />
		</DetailsBlock>
	);
}
