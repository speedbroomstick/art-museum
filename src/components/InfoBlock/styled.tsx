import styled from 'styled-components';
import { FlexContainer } from 'constants/FlexContainer';
import { FontStyle } from 'constants/FontStyle';

export const DetailsBlock = styled.div<{ $image?: boolean }>`
	${FlexContainer}
	width: ${(props) => (props.$image ? '100%' : '80%')};
	height: clamp(100%, 10vh, 400px);
	background-color: rgb(240, 241, 241);
	justify-content: space-between;
	padding: 32px 24px;
	margin-top: ${({ $image }) => ($image ? '0' : '-4rem')};
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
	flex: 0 0 auto;
	background-color: rgba(251, 215, 178, 0.3);
	border-radius: 35.09px;
	border: none;
	cursor: pointer;
	&:hover {
		background-color: rgba(251, 215, 178, 0.5);
	}
`;
export const ArtText = styled.p`
	${FontStyle}
	width: 10rem;
	font-weight: 500;
	font-size: 17.5px;
	color: ${({ theme }) => theme.colors.black};
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
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
export const ImageContainer = styled.img`
	width: 80px;
	height: 80px;
`;
