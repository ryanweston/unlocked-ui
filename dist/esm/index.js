import componentsList from './components/index.js';

const plugin = {
    install(Vue) {
        const components = componentsList;
        for (const componentKey in components) {
            console.log(componentKey);
            console.log(components);
            if (components.hasOwnProperty(componentKey)) {
                const component = components[componentKey];
                Vue.component(component.name, component);
            }
        }
    }
};

export { plugin as default };
