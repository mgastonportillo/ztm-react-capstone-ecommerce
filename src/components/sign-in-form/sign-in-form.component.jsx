import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
	signInWithGooglePopup,
	signInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import "./sign-in-form.style.scss";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const resetFormField = () => {
		setFormFields(defaultFormFields);
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		alert(`Welcome, ${user.displayName}!`);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInUserWithEmailAndPassword(email, password);
			alert(`Welcome back!`);
			resetFormField();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Incorrect password for email");
					break;
				case "auth/user-not-found":
					alert("No user linked to this email");
					break;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<div className="sign-in-container">
			<h2>Already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
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
				<div className="buttons-container">
					<Button type="submit">Sign In</Button>
					<Button type="button" onClick={signInWithGoogle} buttonType="google">
						Sign In with Google
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
