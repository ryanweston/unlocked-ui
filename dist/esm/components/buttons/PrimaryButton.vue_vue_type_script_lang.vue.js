import { defineComponent } from 'vue';
import '../base/BaseButton.vue.js';
import script$1 from '../base/BaseButton.vue_vue_type_script_lang.vue.js';

var script = defineComponent({
    name: 'PrimaryButton',
    extends: script$1,
    props: {
        callback: Function,
        contactsPromise: Promise
    }
});

export { script as default };
