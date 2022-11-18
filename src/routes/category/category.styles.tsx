import styled from 'styled-components';

export const CategoryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 50px;
	margin-bottom: 25px;

	@media screen and (max-width: 900px) {
		grid-template-columns: repeat(3, 1fr);
		row-gap: 45px;
	}

	@media screen and (max-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
		row-gap: 45px;
	}
`;

export const CategoryTitle = styled.h2`
	font-weight: 500;
	font-size: 38px;
	margin-bottom: 29px;
	text-align: center;
`;
