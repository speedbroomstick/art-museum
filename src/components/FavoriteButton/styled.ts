import styled from 'styled-components';
import { FlexContainer } from 'constants/styles/FlexContainer';

export const FavoriteButtonStyled = styled.button<{ $active: boolean }>`
	${FlexContainer}
	width: 55px;
	height: 55px;
	align-self: center;
	flex: 0 0 auto;
	background-color: ${({ $active }) =>
		$active ? 'rgb(251, 215, 178)!important' : 'rgba(251, 215, 178, 0.3)'};
	border-radius: 35.09px;
	border: none;
	cursor: pointer;
	&:hover {
		background-color: ${({ $active }) =>
			$active
				? 'rgba(251, 215, 178, .5)!important'
				: 'rgba(251, 215, 178, 0.5)'};
	}
	&:active {
		transform: scale(1.1);
	}
`;
