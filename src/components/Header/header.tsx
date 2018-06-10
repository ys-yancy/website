import * as React from "react";
import './header.scss';

interface headerProps {
	name: string
}

export class Header extends React.Component<headerProps, {}> {
	render() {
		return <header>this is {this.props.name } Header</header>
	}
}