import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
	auth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
	useEffect(() => {
		(async () => {
			const response = await getRedirectResult(auth);
			if (response) {
				const userDocRef = await createUserDocumentFromAuth(response.user);
			}
		})();
	}, []);

	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h2>Sign In Page</h2>
			<button onClick={logGoogleUser}>Sign In with Google Pop-up</button>
			<br />
			<br />
			<button onClick={signInWithGoogleRedirect}>
				Sign In with Google Redirect
			</button>
		</div>
	);
};

export default SignIn;
