import React, { useContext, useState } from 'react';
import { SelectProfileContainer } from './';
import { FirebaseContext } from '../context/firebase';

export default function BrowseContainer({ slides }) {
	const { firebase } = useContext(FirebaseContext);
	const [profile, setProfile] = useState({});
	const user = firebase.auth().currentUser || {};

	return (
		<>
			<SelectProfileContainer user={user} setProfile={setProfile} />
			<div>Hello from the BrowseContainer</div>
		</>
	);
}
