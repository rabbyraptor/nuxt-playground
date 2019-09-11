import Vue from 'vue';
import VMasker from './MaskedInput.js';

Vue.directive('ui-mask', (el, binding) => {
    if(binding.value.mask) {
        VMasker(el).maskPattern(binding.value.mask);
    }
});