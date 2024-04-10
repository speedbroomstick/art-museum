import { FlexContainer } from 'constants/styles/FlexContainer';
import styled from 'styled-components';

export const SortIconBox = styled.button<{ $isActive: boolean }>`
	${FlexContainer}
	width: 64px;
	height: 64px;
	padding: 16px;
	background-color: ${({ $isActive }) =>
		$isActive ? 'rgba(247, 119, 0, 0.4)' : 'rgba(57, 57, 57, 0.05)'};
	border-radius: 16px;
	margin-left: 1.1rem;
	border: none;
	& img {
		width: 32px;
		height: 32px;
	}
	&:hover {
		cursor: pointer;
		border: 1px solid rgba(57, 57, 57, 0.5);
	}
	&:active {
		transform: scale(0.9);
	}
`;
