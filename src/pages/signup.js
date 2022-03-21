import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer, FooterContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignUp() {
	const navigate = useNavigate();
	const { firebase } = useContext(FirebaseContext);

	const [firstName, setFirstName] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const isInvalid = firstName === '' || password === '' || emailAddress === '';

	const handleSignUp = (event) => {
		event.preventDefault();
		// firebase setup
		firebase
			.auth()
			.createUserWithEmailAndPassword(emailAddress, password)
			.then((result) => {
				result.user.updateProfile({
					displayName: firstName,
					photoURL: Math.floor(Math.random() * 5) + 1,
				});
			})
			.then(() => {
				navigate(ROUTES.BROWSE);
			})
			.catch((error) => {
				setEmailAddress('');
				setPassword('');
				setFirstName('');
				setError(error.message);
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignUp} method='POST'>
						<Form.Input
							value={firstName}
							placeholder='First name'
							onChange={({ target }) => setFirstName(target.value)}
						/>
						<Form.Input
							value={emailAddress}
							placeholder='Email address'
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							value={password}
							placeholder='Password'
							onChange={({ target }) => setPassword(target.value)}
							type='password'
							autoComplete='off'
						/>
						<Form.Submit disabled={isInvalid} type='submit'>
							Sign Up
						</Form.Submit>
						<Form.Text>
							Already a user?{' '}
							<Form.Link to={ROUTES.SIGNIN}>Sign in now</Form.Link>
						</Form.Text>
						<Form.TextSmall>
							This page is protected by Google reCAPTCHA to ensure you are not a
							bot. Learn more.
						</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
