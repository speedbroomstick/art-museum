import styled from 'styled-components';
import { FontStyle } from 'constants/styles/FontStyle';
import { Field } from 'formik';
import { FlexContainer } from 'constants/styles/FlexContainer';

export const InputSearchField = styled(Field)`
	${FontStyle}
	width: clamp(300px, 95%, 762px);
	height: 64px;
	padding: 16px;
	background-color: rgba(57, 57, 57, 0.05);
	border-radius: 16px;
	border: none;
	font-family: 'Inter', sans-serif;
	color: rgba(57, 57, 57, 0.5);
	&:hover,
	&:focus {
		border: 1px solid rgba(57, 57, 57, 0.5);
	}
	&::placeholder {
		color: rgba(57, 57, 57, 0.5);
	}
`;
export const InputWrap = styled.div`
	${FlexContainer}
`;
export const Magnifier = styled.img`
	margin-left: -3rem;
`;
export const SpanEror = styled.span`
	color: rgb(255, 0, 0);
`;
