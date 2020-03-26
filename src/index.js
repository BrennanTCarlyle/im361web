import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    counter: 0,
    pageName: "Featured",
    active: "Featured",
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
    MVmodalImages: [
      "./images/batman.jpg",
      "./images/boba.jpg",
      "./images/witchKing.jpg",
      "./images/dredd.jpg",
    ],
    VGmodalImages: [
      "./images/warlock.png",
      "./images/vaultDweller.png",
      "./images/giantDadLautrec.png",
      "./images/noble6.png",
    ],
    HISTmodalImages: [
      "./images/ww2.jpg",
      "./images/knight.jpg",
      "./images/dress.jpg",
      "./images/union.jpg",
    ],
    COMmodalImages: [
      "./images/batman.jpg",
      "./images/tony.jpg",
      "./images/pool.png",
      "./images/saitama.jpg",
    ],
    OTHERmodalImages: [
      "./images/steampunk.jpg",
      "./images/cyberpunk.jpg",
      "./images/stilts.jpg",
      "./images/anime.jpg",
    ],
    PROPSmodalImages: [
      "./images/lastWord.jpg",
      "./images/crest.jpg",
      "./images/slayer.jpg",
      "./images/portal.jpg",
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
