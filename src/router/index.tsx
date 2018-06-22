export default [{
    "url": "/index",
    "component": (): any => {
        return require.ensure([], () => {
            return require('../components/Header/header');
        });
    }

},{
    "url": "",
    "component": (): any => {
        return require.ensure([], () => {
            return require('../components/Main/main');
        });
    }
}];