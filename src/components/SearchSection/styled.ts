import styled from 'styled-components';

export const HeaderText = styled.h2`
	font-family: 'Lexend', sans-serif;
	font-weight: 700;
	font-size: 64px;
	line-height: 80px;
	text-align: center;
	color: rgb(57, 57, 57);
	width: 40rem;
`;
export const OrangeSpan = styled.span`
	color: rgba(241, 121, 0, 1);
`;
export const VerticalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-top: ${({ theme }) => theme.marginTop ?? 0};
`;
export const InputSearch = styled.input`
	width: clamp(300px, 100%, 762px);
	height: 64px;
	padding: 16px;
	background-color: rgba(57, 57, 57, 0.05);
	border-radius: 16px;
	border: none;
	font-family: 'Inter', sans-serif;
	font-weight: 400;
	font-size: 14px;
	color: rgba(57, 57, 57, 0.5);
	&:hover,
	&:focus {
		border: 1px solid rgba(57, 57, 57, 0.5);
	}
	&::placeholder {
		color: rgba(57, 57, 57, 0.5);
	}
`;
export const InputContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	margin-top: 5rem;
`;
export const Magnifier = styled.img`
	margin-left: -3rem;
`;
