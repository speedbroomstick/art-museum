import styled from 'styled-components';
import { FontStyle } from 'constants/FontStyle';
import { FlexContainer } from 'constants/FlexContainer';

export const OrangeText = styled.h4`
	${FontStyle}
	color: ${({ theme }) => theme.colors.orange};
`;
export const MainTitle = styled.h2`
	${FontStyle}
	font-size: 32px;
	color: ${({ theme }) => theme.colors.black};
`;
export const ContainerForHeader = styled.div`
	${FlexContainer}
	flex-direction: column;
	margin: 7rem 0 3rem 0;
`;
