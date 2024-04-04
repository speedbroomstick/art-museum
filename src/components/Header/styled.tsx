import styled, { css } from 'styled-components';

const SharedDivStyles = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const HeaderStyled = styled.header`
	${SharedDivStyles}
	width: 100%;
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
	${SharedDivStyles}
`;
export const TopBar = styled.div`
	${SharedDivStyles}
	width: 100%;
	justify-content: space-between;
`;

export const YourFavorites = styled.a`
	font-family: 'Inter', sans-serif;
	font-weight: 400;
	font-size: 18px;
	text-decoration: none;
	color: rgb(255, 255, 255);
`;
