'use strict';

var vue = require('vue');

var script$1 = vue.defineComponent({
  name: 'Button'
});

const _hoisted_1$1 = { type: "text" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1$1))
}

script$1.render = render$1;
script$1.__file = "src/components/Button.vue";

var script = vue.defineComponent({
  name: 'Button2'
});

const _hoisted_1 = { type: "text" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1))
}

script.render = render;
script.__file = "src/components/Button2.vue";

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Button: script$1,
  Button2: script
});

const plugin = {
  install (Vue) {
    for (const componentKey in components) {
      if (undefined(componentKey)) {
        const component = components[componentKey];
        Vue.component(component.name, component);
      }
    }
  }
};

module.exports = plugin;
