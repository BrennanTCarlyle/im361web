import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    counter: 0,
    currentPage: "Featured",
    userName: "BTCarlyle",
    mediumName: null,
    orderAmount: [],
    mediumTypes: [
      "Featured",
      "Movies",
      "Video Games",
      "Historical",
      "Comics",
      "Other",
      "Props",
    ],
    slideIndex: 1,
    isModalShown: false,
    modalImage: null,
    modalImages: [
      "./images/shaxxCosplay.jpg",
      "./images/ornstein.jpg",
      "./images/warhammer.jpg",
      "./images/dredd.jpg",
    ],
  },
  methods: {
    openModal: function(image) {
      this.modalImage = image;
      this.isModalShown = true;
    },
    hideModal: function() {
      this.modalImage = null;
      this.isModalShown = false;
    }
  }
});

window.app = app;
