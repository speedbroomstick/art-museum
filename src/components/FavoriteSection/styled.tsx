import styled from 'styled-components';
import { FlexContainer } from 'constants/FlexContainer';
export const TextContainer = styled.div`
	${FlexContainer}
	margin: 4rem 0;
`;
export const OrangeText = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	color: rgba(241, 121, 0);
	@media (max-width: 600px) {
		& img {
			width: 40px;
			height: 40px;
		}
	}
`;
