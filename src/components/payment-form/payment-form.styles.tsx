import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
	height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const FormContainer = styled.form`
	height: 100px;
	min-width: 500px;

	@media screen and (max-width: 900px) {
		min-width: 100vw;
		padding: 0 20px;
	}
`;

export const PaymentButton = styled(Button)`
	margin-left: auto;
	margin-top: 30px;
`;
