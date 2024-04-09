import bookMark from 'assets/svg/bookMark.svg';
import { FavoriteButtonStyled } from './styled';
import { IFavoriteButtonProps } from 'constants/IFavoriteButtonProps';
import { addIntoLocalStorage } from 'utils/localStorage';

export function FavoriteButton({
	paintingId,
	title,
	artist_title,
	is_public_domain,
}: IFavoriteButtonProps) {
	const dataForSave = {
		paintingId,
		title,
		artist_title,
		is_public_domain,
	};
	return (
		<FavoriteButtonStyled
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				addIntoLocalStorage(dataForSave);
			}}
		>
			<img src={bookMark} alt="" />
		</FavoriteButtonStyled>
	);
}
