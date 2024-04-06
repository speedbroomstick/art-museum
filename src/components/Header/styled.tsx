import styled from 'styled-components';
import { FlexContainer } from 'constants/FlexContainer';
import { FontStyle } from 'constants/FontStyle';

export const HeaderStyled = styled.header`
	${FlexContainer}
	height: 127px;
	background: linear-gradient(
		90deg,
		#343333 38.05%,
		#484848 69.22%,
		#282828 98.98%
	);
	padding: 0 160px;
`;

export const HorizontalContainer = styled.div`
	${FlexContainer}
	width: 10rem;
`;
export const TopBar = styled.div`
	${FlexContainer}
	justify-content: space-between;
`;

export const YourFavorites = styled.a`
	${FontStyle}
	font-family: 'Inter', sans-serif;
	font-size: 18px;
	text-decoration: none;
	color: rgb(255, 255, 255);
`;
