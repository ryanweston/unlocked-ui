import { defineComponent, openBlock, createElementBlock } from 'vue';

var script$1 = defineComponent({
  name: 'Button'
});

const _hoisted_1$1 = {
  class: "u-input",
  type: "text"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1$1))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.u-input[data-v-015de462] {\n    --tw-border-opacity: 1;\n    border-color: rgb(31 182 255 / var(--tw-border-opacity));\n    --tw-bg-opacity: 1;\n    background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: rgb(31 182 255 / var(--tw-text-opacity))\n}\n";
styleInject(css_248z);

script$1.render = render$1;
script$1.__scopeId = "data-v-015de462";
script$1.__file = "src/components/Button.vue";

var script = defineComponent({
  name: 'Button2'
});

const _hoisted_1 = { type: "text" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1))
}

script.render = render;
script.__file = "src/components/Button2.vue";

var components = { Button: script$1, Button2: script };

const plugin = {
  install (Vue) {
    for (const componentKey in components) {
      if (components.hasOwnProperty(componentKey)) {
        const component = components[componentKey];
        Vue.component(component.name, component);
      }
    }
  }
};

export { plugin as default };
