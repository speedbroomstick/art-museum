import styled from 'styled-components';
import { FlexContainer } from 'constants/FlexContainer';
import { FontStyle } from 'constants/FontStyle';

export const HeaderText = styled.h2`
	font-family: 'Lexend', sans-serif;
	font-weight: 700;
	font-size: 64px;
	line-height: 80px;
	text-align: center;
	color: ${({ theme }) => theme.colors.black};
	width: 40rem;
	@media (max-width: 800px) {
		font-size: 40px;
		width: 20rem;
	}
	@media (max-width: 500px) {
		font-size: 30px;
	}
`;
export const OrangeSpan = styled.span`
	color: rgba(241, 121, 0);
`;
export const VerticalContainer = styled.div`
	${FlexContainer}
	flex-direction: column;
	margin-top: ${({ theme }) => theme.marginTop ?? 0};
`;
export const InputSearch = styled.input`
	${FontStyle}
	width: clamp(300px, 95%, 762px);
	height: 64px;
	padding: 16px;
	background-color: rgba(57, 57, 57, 0.05);
	border-radius: 16px;
	border: none;
	font-family: 'Inter', sans-serif;
	color: rgba(57, 57, 57, 0.5);
	&:hover,
	&:focus {
		border: 1px solid rgba(57, 57, 57, 0.5);
	}
	&::placeholder {
		color: rgba(57, 57, 57, 0.5);
	}
`;
export const InputContainer = styled.div`
	${FlexContainer}
	margin-top: 5rem;
`;
export const Magnifier = styled.img`
	margin-left: -3rem;
`;
