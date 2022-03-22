import React from 'react';
import { Header, Profile } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function SelectProfileContainer(user, setProfile) {
	return (
		<>
			<Header bg={false}>
				<Header.Container>
					<Header.Logo to={ROUTES.HOME} src={logo} alt='Netlfix logo' />
				</Header.Container>
			</Header>
			<Profile>
				<Profile.Title>Who's watching?</Profile.Title>
				<Profile.List>
					<Profile.Item>
						<Profile.Picture src={user.user.photoURL} alt='Profile pic' />
						<Profile.Name>{user.user.displayName}</Profile.Name>
					</Profile.Item>
				</Profile.List>
			</Profile>
		</>
	);
}

// 1. Add header component with just Header, Frame and Logo (link to HOME)
// 2. Create Component 'Profiles' and CCs: Title, List > User > Picture, Name
// 3. Get picURL and Profile name from Firebase
