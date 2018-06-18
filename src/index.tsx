import './reset.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";

import Canvas from './components/Canvas/canvas';
import { Header } from "./components/Header/header";

ReactDOM.render(
    <Canvas class="bg-class"/>,
    // <Header name="Website" />,
    document.getElementById("app")
);