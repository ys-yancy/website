import './reset.scss';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, HashRouter, Route, Link, Redirect } from 'react-router-dom';
import RouterContainer from './app';
import Canvas from './components/Canvas/canvas';
import { Header } from "./components/Header/header";

ReactDOM.render(
    <Router>
        <div className="frame">
            <Canvas class="bg-class" />
            <RouterContainer />
        </div> 
    </Router>,
    document.getElementById("app")
);