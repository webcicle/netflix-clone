import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { GlobalStyles } from './global-styles';

ReactDOM.render(
	<Router>
		<GlobalStyles />
		<App />
	</Router>,
	document.getElementById('root')
);
