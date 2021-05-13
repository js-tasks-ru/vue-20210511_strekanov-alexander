import Vue from './vendor/vue.esm.browser.js';

new Vue({
  el: '#app',
  data: {
    counter: 0
  },
  methods: {
    inc() {
      this.counter += 1;
    }
  }
});
