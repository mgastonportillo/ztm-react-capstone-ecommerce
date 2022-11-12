import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	background-color: black;
	color: white;
	text-transform: uppercase;
	font-family: 'Open Sans', sans-serif;
	font-weight: 400;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	white-space: nowrap;
	transition: all 0.1s ease-out;

	@media screen and (max-width: 420px) {
		width: 100%;
	}

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}

	&:active {
		transform: scale(0.95);
	}
`;

export const GoogleSignInButton = styled(BaseButton)`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

export const InvertedButton = styled(BaseButton)`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

export const ButtonSpinner = styled(SpinnerContainer)`
	width: 30px;
	height: 30px;
`;
