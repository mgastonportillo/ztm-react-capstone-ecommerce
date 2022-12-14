import { ChangeEvent, FormEvent, useState } from 'react';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/user.action';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { SignUpContainer, SignUpTitle } from './sign-up-form.styles';

const defaultFormFields = {
	displayName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const SignUpForm = () => {
	const dispatch = useDispatch();
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formFields;

	const resetFormField = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (password != confirmPassword) {
			alert("Password doesn't match");
			return;
		}

		try {
			dispatch(signUpStart(email, password, displayName));
			resetFormField();
		} catch (error) {
			if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
				alert('Cannot create user, email already in use');
			} else {
				console.log('User creation encountered an error', error);
			}
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
