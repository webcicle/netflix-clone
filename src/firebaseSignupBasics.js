// Basic Firebase Signup with email, password and firstName
// Run this function on the FORM element

const handleSignUp = (event) => {
	event.preventDefault();
	// firebase setup
	firebase
		.auth() //authenticates the inputs
		.createUserWithEmailAndPassword(emailAddress, password)
		// This adds a first name and a random photo URL to the standardized user object (can be used interchangeably, just add more keys) remove this part for a basic signin auth
		.then((result) => {
			result.user.updateProfile({
				displayName: firstName,
				photoURL: Math.floor(Math.random() * 5) + 1,
			});
		})
		// this then sends them to the page (navigate is useNavigate from React Router)
		.then(() => {
			navigate(ROUTES.BROWSE);
		})
		//catch error and print if needed
		.catch((error) => {
			setEmailAddress('');
			setPassword('');
			setFirstName('');
			setError(error.message);
		});
};
