import bookMark from 'assets/svg/bookMark.svg';
import { FavoriteButtonStyled } from './styled';
export function FavoriteButton() {
	return (
		<FavoriteButtonStyled>
			<img src={bookMark} alt="" />
		</FavoriteButtonStyled>
	);
}
