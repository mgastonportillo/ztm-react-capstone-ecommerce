import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { AuthPageContainer } from "./authentication.styles";

const Authentication = () => {
	return (
		<AuthPageContainer>
			<SignInForm />
			<SignUpForm />
		</AuthPageContainer>
	);
};

export default Authentication;
