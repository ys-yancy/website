import * as React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import RouterContainer from '../router/RouterContainer';
import Canvas from '../components/Canvas/canvas';

export default class App extends React.Component<{}> {
    render(): any {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Canvas class="app-container-bg" />
                    <RouterContainer />
                </React.Fragment>
            </BrowserRouter>
        )
    }
}