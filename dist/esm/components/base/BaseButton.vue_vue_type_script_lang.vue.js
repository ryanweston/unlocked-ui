import { defineComponent, VueElement } from 'vue';

var script = defineComponent({
    name: 'BaseButton',
    props: {
        child: VueElement,
        onFocus: Object,
        onClick: Function,
    }
});

export { script as default };
