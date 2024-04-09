import styled from 'styled-components';
import { FlexContainer } from 'constants/FlexContainer';
import { FontStyle } from 'constants/FontStyle';

export const DetailMain = styled.main`
	${FlexContainer}
	flex-wrap: wrap;
	height: 100%;
	padding: 5rem 0;
	gap: 4rem;
`;
export const DescriptionDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-between;
	flex: 0 0 390px;
	height: 511px;
`;
export const HeadText = styled.h2`
	${FontStyle}
	font-size: 32px;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.colors.black};
`;
export const ArtAuthor = styled.h4`
	${FontStyle}
	font-size: 24px;
	margin-bottom: 0.5rem;
	color: ${({ theme }) => theme.colors.orange};
`;
export const DateText = styled.h5`
	${FontStyle}
	font-size: 16px;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.black};
`;
export const TextOverview = styled.p`
	${FontStyle}
	font-size: 16px;
	font-weight: 400;
	margin-bottom: 0.5rem;
	color: ${({ theme }) => theme.colors.black};
`;
export const OrangeSpan = styled.span`
	color: ${({ theme }) => theme.colors.orange};
`;
export const ImageDiv = styled.div`
	display: grid;
	& > button,
	img {
		grid-area: 1/1/2/2;
	}
	& > button {
		align-self: initial;
		justify-self: flex-end;
		background-color: rgb(255, 255, 255);
		border: 1px solid rgb(240, 241, 241);
		margin: 1rem 1rem;
	}
	& > button:hover {
		background-color: rgba(255, 255, 255, 0.6);
	}
`;
