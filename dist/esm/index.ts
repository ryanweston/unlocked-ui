import { App } from 'vue';
import components from './components/index.js';

const plugin = {
    install(Vue: App) {
        for (const componentKey in components) {
            if (components.hasOwnProperty(componentKey)) {
                const component = components[componentKey];
                Vue.component(component.name, component);
            }
        }
    }
};

export { plugin as default };
