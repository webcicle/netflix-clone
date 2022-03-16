import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Browse, Signup, Signin } from './pages';

import * as ROUTES from './constants/routes';

function App() {
	return (
		<Routes>
			<Route exact path={ROUTES.HOME} element={<Home />} />
			<Route path={ROUTES.BROWSE} element={<Browse />} />
			<Route path={ROUTES.SIGNUP} element={<Signup />} />
			<Route path={ROUTES.SIGNIN} element={<Signin />} />
		</Routes>
	);
}

export default App;
