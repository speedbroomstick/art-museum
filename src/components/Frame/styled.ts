import styled from 'styled-components';
import { FlexContainer } from 'constants/FlexContainer';

export const FrameContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 425px);
	width: 100%;
	height: 514px;
	justify-content: center;
	gap: 5rem;
`;
export const CardContainer = styled.div`
	${FlexContainer}
	flex-direction: column;
`;
