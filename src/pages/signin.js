import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer, FooterContainer } from '../containers';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
	const { firebase } = useContext(FirebaseContext);
	const navigate = useNavigate();
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	function handleSignIn(event) {
		event.preventDefault();
		// firebase magic here
		firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				navigate.push(ROUTES.BROWSE);
			})
			.catch((error) => {
				setEmailAddress('');
				setPassword('');
				setError(error.message);
			});
	}

	const isInvalid = password === '' || emailAddress === '';

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignIn} method='POST'>
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
							Sign In
						</Form.Submit>
					</Form.Base>

					<Form.Text>
						New to Netflix?{' '}
						<Form.Link to={ROUTES.SIGNUP}>Sign up now</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you are not a
						bot. Learn more.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
