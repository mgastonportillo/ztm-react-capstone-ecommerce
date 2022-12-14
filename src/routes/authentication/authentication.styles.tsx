import styled from 'styled-components';

export const AuthPageContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	column-gap: 100px;
	row-gap: 50px;
	justify-content: center;
	padding: 0 15px 30px 15px;

	@media screen and (max-width: 800px) {
		padding: 0;

		&:last-child {
			padding-bottom: 15px;
		}
	}
`;
