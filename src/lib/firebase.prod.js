import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';

const config = {
	apiKey: 'AIzaSyC823c8g4lVYMPuvPybat5AAcweEv-PwKc',
	authDomain: 'netflix-clone-f9483.firebaseapp.com',
	projectId: 'netflix-clone-f9483',
	storageBucket: 'netflix-clone-f9483.appspot.com',
	messagingSenderId: '194020776354',
	appId: '1:194020776354:web:04653cd7d9487636a4bafb',
};

const firebase = Firebase.initializeApp(config);

export { firebase };
