import { defineComponent, VueElement, openBlock, createElementBlock } from 'vue';

var script$2 = defineComponent({
  name: 'BaseButton',
  props: {
    child: VueElement,
    onFocus: Object,
    onClick: Function,
  }
});

const _hoisted_1$2 = {
  class: "bg-black",
  type: "text"
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1$2))
}

script$2.render = render$2;
script$2.__file = "src/components/base/BaseButton.vue";

var script$1 = defineComponent({
  name: 'PrimaryButton',
  extends: script$2,
  props: {
    callback: Function,
    contactsPromise: Promise
  }
});

const _hoisted_1$1 = {
  class: "bg-blue",
  type: "text"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1$1))
}

script$1.render = render$1;
script$1.__file = "src/components/buttons/PrimaryButton.vue";

var script = defineComponent({
  name: 'SecondaryButton'
});

const _hoisted_1 = {
  class: "bg-blue",
  type: "text"
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", _hoisted_1))
}

script.render = render;
script.__file = "src/components/buttons/SecondaryButton.vue";

var components = { PrimaryButton: script$1, SecondaryButton: script };

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
