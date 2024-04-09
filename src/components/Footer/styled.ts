import styled from 'styled-components';
import { FlexContainer } from 'constants/styles/FlexContainer';

export const FooterWrap = styled.footer`
	${FlexContainer}
	height: 127px;
	background-color: rgb(255, 255, 255);
	padding: 0 min(160px, 10%);
`;
export const FooterDiv = styled.div`
	${FlexContainer}
	justify-content: space-between;
`;
export const ImageLogo = styled.img`
	width: min(180px, 30%);
`;
