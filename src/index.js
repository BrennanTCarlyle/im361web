import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    counter: 0,
    userName: "BTCarlyle"

  }
});

window.app = app;
