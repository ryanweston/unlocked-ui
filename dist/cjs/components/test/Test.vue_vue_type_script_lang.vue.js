'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
    name: 'Test',
    props: {
        callback: Function,
        contactsPromise: Promise
    }
});

exports["default"] = script;
