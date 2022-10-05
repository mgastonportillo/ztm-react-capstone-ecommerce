import styled from "styled-components";

export const SignInContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
`;

export const SignInTitle = styled.h2`
	font-weight: 600;
	margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media screen and (max-width: 420px) {
		flex-direction: column;
		flex-wrap: wrap;
	}
`;
