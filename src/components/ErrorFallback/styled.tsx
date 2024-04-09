import { FontStyle } from 'constants/styles/FontStyle';
import { FlexContainer } from 'constants/styles/FlexContainer';
import styled from 'styled-components';

export const AlertContainer = styled.section`
	${FlexContainer}
	${FontStyle}
    flex-direction: column;
	gap: 1rem;
	& h2 {
		font-size: 3rem;
		color: rgb(255, 0, 0);
	}
	& pre {
		font-size: 1rem;
		white-space: pre-wrap;
		color: rgb(255, 0, 0);
	}
	@media (max-width: 700px) {
		& h2 {
			font-size: 2rem;
		}
		& pre {
			font-size: 0.8rem;
		}
	}
	@media (max-width: 450px) {
		& h2 {
			font-size: 1.5rem;
		}
		& pre {
			font-size: 0.5rem;
		}
	}
`;
export const TextMessage = styled.div`
	${FlexContainer}
	text-align: center;
`;
export const TryAgain = styled.button`
	${FontStyle}
	font-size: 1rem;
	font-weight: 700;
	width: 200px;
	height: 50px;
	color: rgb(250, 250, 250);
	border-radius: 10px;
	border: 1px solid rgb(255, 252, 252);
	background-color: rgb(164, 255, 95);
	cursor: pointer;
	&:hover {
		background-color: rgb(174, 252, 114);
	}
	&:active {
		transform: scale(0.9);
	}
`;
