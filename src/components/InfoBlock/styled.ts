import styled from 'styled-components';

export const DetailsBlock = styled.div`
	display: flex;
	width: 80%;
	height: 100%;
	background-color: rgb(240, 241, 241);
	align-items: center;
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
	display: flex;
	align-items: center;
	justify-content: center;
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
	font-family: 'Lexend', sans-serif;
	font-weight: 500;
	font-size: 17.5px;
	color: rgb(57, 57, 57);
`;
export const ArtistText = styled.h5`
	font-family: 'Lexend', sans-serif;
	font-weight: 400;
	font-size: 15.3px;
	color: rgb(224, 164, 73);
`;
export const StatusText = styled.h4`
	font-family: 'Lexend', sans-serif;
	font-weight: 700;
	font-size: 15.5px;
	color: rgb(57, 57, 57);
`;
