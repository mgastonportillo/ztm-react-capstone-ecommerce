import styled from "styled-components";

export const CartItemContainer = styled.div`
	width: 100%;
	display: flex;
	height: 80px;
	margin-bottom: 15px;
`;

export const CartItemImg = styled.img`
	width: 60px;
	object-fit: cover;
`;

export const ItemDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 20px;

	h2 {
		font-size: 16px;
	}

	span {
		display: flex;
	}
`;
