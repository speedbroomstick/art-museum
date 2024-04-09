import bookMark from 'assets/svg/bookMark.svg';
import { FavoriteButtonStyled } from './styled';
import { IFavoriteButtonProps } from 'constants/interfaces/IFavoriteButtonProps';
import {
	addIntoLocalStorage,
	deleteFromLocalStorage,
	isInLocalStorage,
} from 'utils/localStorage';
import { useState } from 'react';

export function FavoriteButton({
	id,
	image_id,
	title,
	artist_title,
	is_public_domain,
}: IFavoriteButtonProps) {
	const dataForSave = {
		id,
		image_id,
		title,
		artist_title,
		is_public_domain,
	};
	const [isActive, setIsActive] = useState(isInLocalStorage(id));
	return (
		<FavoriteButtonStyled
			$active={isActive}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				isActive
					? deleteFromLocalStorage(id)
					: addIntoLocalStorage(dataForSave);
				setIsActive(!isActive);
			}}
		>
			<img src={bookMark} alt="" />
		</FavoriteButtonStyled>
	);
}
