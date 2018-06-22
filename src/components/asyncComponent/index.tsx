import * as React from 'react';

interface Props {
    [propName: string]: any
}

interface state {
    component: any
}

export default function asyncComponent(importComponent: any): any {
    class AsyncComponent extends React.Component<Props, {}> {
        public state: state;
        constructor(props: any) {
            super(props);

            this.state = {
                component: null,
            };
        };

        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({
                component: component
            });
        };

        render() {
            const C = this.state.component;

            return C ? < C {...this.props} /> : null;
        }
    }

    return AsyncComponent;
}