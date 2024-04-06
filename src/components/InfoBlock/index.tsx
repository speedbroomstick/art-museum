import bookMark from 'assets/bookMark.svg';
import {
	ArtText,
	ArtistText,
	DetailsBlock,
	FavoriteButton,
	StatusText,
} from './styled';
import { IInfoBlock } from 'utils/IInfoBlock';

export function InfoBlock({
	title,
	artist_title,
	verificationLevel,
}: IInfoBlock) {
	return (
		<DetailsBlock>
			<div>
				<div>
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
