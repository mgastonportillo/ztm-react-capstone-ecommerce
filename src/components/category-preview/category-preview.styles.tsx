import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-bottom: 30px;
`;

export const Title = styled(Link)`
	font-weight: 600;
	font-size: 28px;
	margin-bottom: 25px;
	text-decoration: none;
	color: black;
	cursor: pointer;
`;

export const Preview = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;

	@media screen and (max-width: 900px) {
		grid-template-columns: repeat(3, 1fr);
		row-gap: 45px;
	}

	@media screen and (max-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
		row-gap: 45px;
	}
`;
