export default [{
    "url": "",
    "component": (): any => {
        return require.ensure([], () => {
            return require('../components/Main/main');
        })
    }

},{
    "url": "/index",
    "component": (): any => {
        return require.ensure([], () => {
            return require('../components/Header/header');
        })
    }
}];