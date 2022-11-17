import styled from "styled-components";

export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;
	margin-bottom: 25px;
`;

export const CategoryTitle = styled.h2`
	font-weight: 500;
	font-size: 38px;
	margin-bottom: 29px;
	text-align: center;
`;
