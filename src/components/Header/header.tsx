import * as React from "react";
import './header.scss';

export default class Header extends React.Component<{}> {
	componentDidMount(): void {
		console.log(1)
	}
	
	render() {
		return <header>this is Header</header>
	}
}