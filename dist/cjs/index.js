'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('./components/index.js');

const plugin = {
    install(Vue) {
        const components = index["default"];
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

exports["default"] = plugin;
