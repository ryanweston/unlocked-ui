'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
    name: 'BaseButton',
    props: {
        child: vue.VueElement,
        onFocus: Object,
        onClick: Function,
    }
});

exports["default"] = script;
