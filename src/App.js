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

function App() {
	const user = null;

	return (
		<Router>
			<Routes>
				<Route
					exact
					path={ROUTES.HOME}
					element={user ? <Navigate replace to={ROUTES.BROWSE} /> : <Home />}
				/>
				<Route
					path={ROUTES.BROWSE}
					element={user ? <Browse /> : <Navigate replace to={ROUTES.SIGNIN} />}
				/>
				<Route path={ROUTES.SIGNUP} element={<Signup />} />
				<Route
					path={ROUTES.SIGNIN}
					element={user ? <Navigate replace to={ROUTES.BROWSE} /> : <Signin />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
