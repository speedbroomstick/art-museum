import styled from 'styled-components';
import { FontStyle } from 'constants/styles/FontStyle';
import { FlexContainer } from 'constants/styles/FlexContainer';

export const PaginationDiv = styled.div`
	${FlexContainer}
	justify-content: flex-end;
	gap: 1rem;
	margin-top: 2rem;
	padding: 0 14%;
`;
export const Link = styled.a`
	${FontStyle}
	text-decoration: none;
	color: ${({ theme }) => theme.colors.black};
	font-size: 18px;
	&:hover {
		cursor: pointer;
	}
`;
export const ActiveLink = styled.a`
	${FlexContainer}
	${FontStyle}
	width: 30px;
	height: 30px;
	text-decoration: none;
	color: rgb(255, 255, 255);
	font-size: 18px;
	font-weight: 700;
	border-radius: 5px;
	background-color: rgb(241, 121, 0);
	&:hover {
		cursor: pointer;
	}
`;
