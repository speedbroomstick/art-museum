import styled from 'styled-components';
import { FlexContainer } from 'constants/FlexContainer';
import { FontStyle } from 'constants/FontStyle';

export const DetailsBlock = styled.div`
	${FlexContainer}
	width: 80%;
	height: clamp(130px, 10vh, 400px);
	background-color: rgb(240, 241, 241);
	justify-content: space-between;
	padding: 32px 24px;
	margin-top: -4rem;
	& > div > div > h4 {
		margin-bottom: 0.5rem;
	}
	& > div > div {
		margin-bottom: 1rem;
	}
`;

export const FavoriteButton = styled.button`
	${FlexContainer}
	width: 59px;
	height: 59px;
	align-self: center;
	background-color: rgba(251, 215, 178, 0.3);
	border-radius: 35.09px;
	border: none;
	cursor: pointer;
	&:hover {
		background-color: rgba(251, 215, 178, 0.5);
	}
`;
export const ArtText = styled.h4`
	${FontStyle}
	font-weight: 500;
	font-size: 17.5px;
	color: ${({ theme }) => theme.colors.black};
`;
export const ArtistText = styled.h5`
	${FontStyle}
	color: ${({ theme }) => theme.colors.orange};
`;
export const StatusText = styled.h4`
	${FontStyle}
	font-weight: 700;
	color: ${({ theme }) => theme.colors.black};
`;
