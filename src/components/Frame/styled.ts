import styled from 'styled-components';
import { FlexContainer } from 'constants/FlexContainer';

export const FrameContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	justify-content: center;
	width: 100%;
	height: clamp(450px, 100%, 1200px);
	padding: 0 14%;
	gap: 5rem;
`;
export const CardContainer = styled.div`
	${FlexContainer}
	flex-direction: column;
`;
export const ImageStyled = styled.img`
	width: 100%;
`;
export const Loader = styled.div`
	${FlexContainer}
	height: 800px;
`;
