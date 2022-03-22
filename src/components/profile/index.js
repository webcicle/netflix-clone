import React from 'react';
import { Title, List, Name, Picture, Container, Item } from './styles/profiles';

export default function Profile({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Profile.Title = function ProfileTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Profile.List = function ProfileList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

Profile.Name = function ProfileName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};

Profile.Item = function ProfileItem({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

Profile.Picture = function ProfilePicture({ src, ...restProps }) {
	console.log(src);
	return (
		<Picture
			{...restProps}
			src={src ? `/images/users/${src}.png` : '/image/misc/loading.gif'}
		/>
	);
};

// Pictur: if src, add img + URL : show loading thing from misc folder
