import bookMark from 'assets/svg/bookMark.svg';
import { FavoriteButtonStyled } from './styled';
import { IFavoriteButtonProps } from 'constants/interfaces/IFavoriteButtonProps';
import {
	addIntoLocalStorage,
	deleteFromLocalStorage,
	isInLocalStorage,
} from 'utils/localStorage';
import { useState } from 'react';

export function FavoriteButton({ data }: IFavoriteButtonProps) {
	const [isActive, setIsActive] = useState(isInLocalStorage(data.id));

	return (
		<FavoriteButtonStyled
			data-testid="favoriteBut"
			$active={isActive}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				isActive ? deleteFromLocalStorage(data.id) : addIntoLocalStorage(data);
				setIsActive(!isActive);
			}}
		>
			<img src={bookMark} alt="" />
		</FavoriteButtonStyled>
	);
}
