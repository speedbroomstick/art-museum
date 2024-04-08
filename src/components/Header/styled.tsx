import styled from 'styled-components';
import { FlexContainer } from 'constants/FlexContainer';
import { FontStyle } from 'constants/FontStyle';
import { Link } from 'react-router-dom';
export const HeaderStyled = styled.header`
	${FlexContainer}
	height: 127px;
	background: linear-gradient(
		90deg,
		#343333 38.05%,
		#484848 69.22%,
		#282828 98.98%
	);
	padding: 0 min(160px, 10%);
`;

export const HorizontalContainer = styled.div`
	${FlexContainer}
	width: 20%;
	gap: 1rem;
`;
export const TopBar = styled.div`
	${FlexContainer}
	justify-content: space-between;
`;

export const LinkStyled = styled(Link)`
	${FlexContainer}
	${FontStyle}
	width: 10rem;
	justify-content: flex-start;
	font-family: 'Inter', sans-serif;
	font-size: 18px;
	text-decoration: none;
	color: rgb(255, 255, 255);
	&:hover {
		transform: scale(0.9);
	}
`;

export const BurgerMenu = styled.a<{ $isNavigation?: boolean }>`
	position: relative;
	width: 40px;
	height: 34px;
	transform: ${({ $isNavigation }) =>
		$isNavigation ? 'rotate(90deg)' : 'none'};
	cursor: pointer;
	&,
	span {
		display: inline-block;
		transition: all 0.4s;
		box-sizing: border-box;
	}
	& span {
		position: absolute;
		left: 0;
		width: 100%;
		height: 4px;
		background-color: ${({ theme }) => theme.colors.orange};
		border-radius: 4px;
	}
	& span:nth-of-type(1) {
		top: 0;
	}

	& span:nth-of-type(2) {
		top: 15px;
	}
	& span:nth-of-type(3) {
		bottom: 0;
	}
`;
export const ContainerLinks = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	flex: 1;
	gap: 0.5rem;
	width: 350px;
`;
