'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../base/BaseButton.vue.js');
var BaseButton_vue_vue_type_script_lang = require('../base/BaseButton.vue_vue_type_script_lang.vue.js');

var script = vue.defineComponent({
    name: 'PrimaryButton',
    extends: BaseButton_vue_vue_type_script_lang["default"],
    props: {
        callback: Function,
        contactsPromise: Promise
    }
});

exports["default"] = script;
