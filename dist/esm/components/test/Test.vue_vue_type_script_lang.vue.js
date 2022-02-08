import { defineComponent } from 'vue';

var script = defineComponent({
    name: 'Test',
    props: {
        callback: Function,
        contactsPromise: Promise
    }
});

export { script as default };
