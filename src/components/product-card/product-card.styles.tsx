import styled from 'styled-components';

export const ProductCardContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	@media screen and (max-width: 400px) {
		height: 250px;
	}

	button {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 255px;
		display: none;

		@media screen and (max-width: 900px) {
			display: block;
			opacity: 0.9;
			min-width: unset;
			padding: 0 10px;
		}

		@media screen and (max-width: 400px) {
			top: 155px;
		}
	}

	&:hover {
		img {
			opacity: 0.8;
		}

		button {
			opacity: 0.85;
			display: flex;

			@media screen and (max-width: 900px) {
				opacity: 0.9;
			}
		}
	}
`;

export const ProductImage = styled.img`
	width: 100%;
	height: 95%;
	object-fit: cover;
	border-radius: 10px;
	margin-bottom: 5px;
`;

export const Footer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;

	@media screen and (max-width: 900px) {
		width: 75%;
	}
`;

export const Price = styled.span`
	width: 10%;

	@media screen and (max-width: 900px) {
		width: 25%;
		text-align: right;
	}
`;
