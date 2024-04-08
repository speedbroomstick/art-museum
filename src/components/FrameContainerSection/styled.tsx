import { FlexContainer } from 'constants/FlexContainer';
import styled from 'styled-components';

export const FrameContainer = styled.section<{ $inset?: boolean }>`
	display: grid;
	grid-template-columns: ${({ $inset }) =>
		$inset ? 'repeat(3,3fr)' : 'repeat(auto-fit, minmax(300px, 1fr))'};
	grid-auto-rows: ${({ $inset }) => ($inset ? '140px' : 'minmax(200px,1fr)')};
	justify-content: center;
	width: 100%;
	height: clamp(450px, 100%, 1200px);
	padding: 0 14%;
	gap: ${(props) => (props.$inset ? '1rem' : '5rem')};
	margin-bottom: 8rem;
	@media (max-width: 1100px) {
		grid-template-columns: ${({ $inset }) =>
			$inset
				? 'repeat(auto-fit,minmax(350px,1fr))'
				: 'repeat(auto-fit, minmax(300px, 1fr))'};
	}
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
