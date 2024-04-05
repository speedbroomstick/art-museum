import bookMark from 'assets/bookMark.svg';
import {
	ArtText,
	ArtistText,
	DetailsBlock,
	FavoriteButton,
	StatusText,
} from './styled';

export function InfoBlock() {
	return (
		<DetailsBlock>
			<div>
				<div>
					<ArtText>Charles V, bust length...</ArtText>
					<ArtistText>Giovanni Britto</ArtistText>
				</div>
				<StatusText>Public</StatusText>
			</div>
			<FavoriteButton>
				<img src={bookMark} alt="" />
			</FavoriteButton>
		</DetailsBlock>
	);
}
