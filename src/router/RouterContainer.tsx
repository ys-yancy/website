import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../components/asyncComponent/index';
import routers from '../router/index';

interface ReactComponent {
    component: React.Component;
};

interface FadingRouteParams {
    [propName: string]: any;
};

export default class RouterContainer extends React.Component<{}> {
    protected FadingRoute: (params: FadingRouteParams) => any = function (params: FadingRouteParams): any {
        const { component: Component, ...reset } = params;
        return (
            <Route exact {...reset} render={(routerParams: any, props?: any): any => {
                return (
                    <Component {...props} />
                )
            }}/>
        );
    };

    public componentDidMount(): void{
    };

    render(): any {
        return (
            <Switch>
                {/* {
                    <Route exact path = '/index' render = {(): any => {
                        return <Redirect to = '' />
                    }}/>
                } */}

                {
                    routers.map((item: any, index: number): any => {
                        const children: any = item.children;
                        if (children && children.length) {
                            return children.map((val: any, key: string): any => {
                                if (val.component) {
                                    const component: any = asyncComponent(val.component);
                                    return <this.FadingRoute path={val.url} component={component} key={key} />
                                }
                            })
                        }

                        if (item.component) {
                            const component: any = asyncComponent(item.component);
                            return <this.FadingRoute path={item.url} component={component} key={index} />
                        }
                    })
                }
            </Switch>
        )
    }

}