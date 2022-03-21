import React from 'react';
import { Route, Navigate } from 'react-router-dom';

// 1. create component IsUserRedirect as a React Router Route and have it take a user, loggedInPath prop + rest and children
// 2. use the rederProp to either render the children (if not logged in) or a redirect element that sends them to the loggedInPath prop
// 3. Import component to the app component and wrap the signin component, instead of the route
// 4. create second component ProtectedRoute that takes user, rest, children
// 5. Have it render (with prop location) the children if the user is logged in, or otherwise redirect to pathname: 'signin', with the state: {from: location} to preserve history
// 6. Wrap the Browse page in the new component and setup home page with IsUserRedirect

export function IsUserRedirect({
	user,
	loggedInPath,
	element,
	children,
	...restProps
}) {
	return (
		<Route
			{...restProps}
			render={() => {
				if (!user) return children;
				if (user) return <Navigate to={{ path: loggedInPath }} />;
				return;
			}}
		/>
	);
}
