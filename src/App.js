import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { Home, Browse, Signup, Signin } from './pages';
import { IsUserRedirect } from './helpers/routes';

import * as ROUTES from './constants/routes';
import { useAuthListener } from './hooks';

function App() {
	const { user } = useAuthListener();

	return (
		<Router>
			<Routes>
				<Route
					exact
					path={ROUTES.HOME}
					user={user}
					element={user ? <Navigate replace to={ROUTES.BROWSE} /> : <Home />}
				/>
				<Route
					path={ROUTES.BROWSE}
					user={user}
					element={user ? <Browse /> : <Navigate replace to={ROUTES.SIGNIN} />}
				/>
				<Route path={ROUTES.SIGNUP} element={user ? <Browse /> : <Signup />} />
				<Route
					path={ROUTES.SIGNIN}
					user={user}
					element={user ? <Navigate replace to={ROUTES.BROWSE} /> : <Signin />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
