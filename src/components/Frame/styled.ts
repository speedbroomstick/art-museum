import styled from 'styled-components';
import { FlexContainer } from 'constants/FlexContainer';

export const FrameContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
	width: 100%;
	padding: 0 14%;
	height: clamp(300px,50vh,700px);
	justify-content: center;
	gap: 5rem;
`;
export const CardContainer = styled.div`
	${FlexContainer}
	flex-direction: column;
`;
export const ImageStyled = styled.img`
   width: 100%;
`