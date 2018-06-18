import * as React from 'react';
import { Switch } from 'react-router'
import { BrowserRouter as Router, HashRouter, Route, Link, Redirect } from 'react-router-dom';
import asyncComponent from './components/asyncComponent/index';
import routers from './router/index';

interface FadingRoute {
    component: React.Component
}

interface FadingRouteParams {
    [propName: string]: any;
}

export default class RouteContainer extends React.Component<{}> {
    path = '';

    FadingRoute = (params: FadingRouteParams) => {
        const { component: Component, ...rest } = params;
        return (
            <Route exact {...rest} render={(param: any, props?: any) => {
                const { match } = param;
                this.path = match.path;
                return (
                    <Component {...props} />
                )
            }} />
        )
    };

    render(): any {
        return (
            <div>
                {/* <Route exact path="/" render={() => (
                    <Redirect to="/index" />
                )} /> */}

                {
                    routers.map(((item: any, index: number) => {
                        if (item.children && item.children.length) {
                            return item.children.map((val: any, key: any) => {
                                if (val.component) {
                                    const component = asyncComponent(val.component);
                                    return <this.FadingRoute path={val.url} component={component} key={key} />
                                }
                            })
                        }
                        if (item.component) {
                            const component = asyncComponent(item.component);
                            return <this.FadingRoute path={item.url} component={component} key={index} />
                        }
                    }))
                }
            </div>
        )
    }
}