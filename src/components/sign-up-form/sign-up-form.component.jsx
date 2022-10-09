import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignUpContainer, SignUpTitle } from "./sign-up-form.styles";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormField = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password != confirmPassword) {
			alert("Password doesn't match");
			return;
		}

		dispatch(signUpStart(email, password, displayName));
		resetFormField();
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<SignUpContainer>
			<SignUpTitle>Don't have an account?</SignUpTitle>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					required
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
				/>

				<FormInput
					label="Email"
					required
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
				/>

				<FormInput
					label="Password"
					required
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
				/>

				<FormInput
					label="Confirm Password"
					required
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
				/>

				<Button type="submit">Sign Up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;
