// create a styles folder
// create main components
// create compound components for Input, Button, OptFormText,
// include the chevron icon on the button

import React from 'react';
import { Input, Button, Text, Container } from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
	return <Input {...restProps} />;
};

OptForm.Button = function OptFormInput({ children, ...restProps }) {
	return (
		<Button {...restProps}>
			{children}
			<img src='/images/icons/chevron-right.png' />
		</Button>
	);
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};
