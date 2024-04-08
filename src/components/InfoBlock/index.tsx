import bookMark from 'assets/svg/bookMark.svg';
import {
	ArtText,
	ArtistText,
	DetailsBlock,
	FavoriteButton,
	ImageContainer,
	StatusText,
} from './styled';
import { IInfoBlock } from 'constants/IInfoBlock';

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
			<FavoriteButton>
				<img src={bookMark} alt="" />
			</FavoriteButton>
		</DetailsBlock>
	);
}
