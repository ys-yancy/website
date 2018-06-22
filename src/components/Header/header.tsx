import * as React from "react";
import './header.scss';

interface headerProps {
	name: string
}

export default class Header extends React.Component<headerProps, {}> {
	render() {
		return <header>this is Header</header>
	}
}