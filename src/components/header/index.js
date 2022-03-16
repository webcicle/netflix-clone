import React from 'react';
import { Background, ButtonLink, Container, Logo } from './styles/header';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<ReactRouterLink to={to}>
			<Logo {...restProps} />
		</ReactRouterLink>
	);
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
	return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

// Create Header component and CCs for Frame, Logo, Button,
// set prop bg = true and also pass the children and spread the other props – render children inside bg if available or otherwise outside
// structure: Header > Frame > Logo, Button
// CCs just get the children, exept the links that get a "to" prop as well
// Make sure to wrap the logo in a RouterLink and pass the svg in from the container
