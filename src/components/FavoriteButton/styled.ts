import styled from 'styled-components';
import { FlexContainer } from 'constants/FlexContainer';

export const FavoriteButtonStyled = styled.button`
	${FlexContainer}
	width: 59px;
	height: 59px;
	align-self: center;
	flex: 0 0 auto;
	background-color: rgba(251, 215, 178, 0.3);
	border-radius: 35.09px;
	border: none;
	cursor: pointer;
	&:hover {
		background-color: rgba(251, 215, 178, 0.5);
	}
`;
