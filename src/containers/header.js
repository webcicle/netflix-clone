import React from 'react';
import { Header } from '../components';
import logo from '../logo.svg';
import * as ROUTES from '../constants/routes';

export default function HeaderContainer({ children }) {
	return (
		<Header>
			<Header.Container>
				<Header.Logo to={ROUTES.HOME} src={logo} alt='Logo' />
				<Header.ButtonLink to={ROUTES.SIGNIN}>Sign in</Header.ButtonLink>
			</Header.Container>
			{children}
		</Header>
	);
}
