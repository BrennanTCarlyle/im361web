import Vue from 'vue/dist/vue.js'
import "./style.css";

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    counter: 0,
    currentPage: "Home",
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
        ]
      },

      el: '#popup',
        data: {
          show: true
        },

      computed: {
        pluralMedium: function() {
          if (this.mediumName == "Video Games") {
            return "Cosplays for all of your favorite games!";
          } else if (this.mediumName == "Featured") {
            return this.mediumName;
          } else {
            return this.mediumName;
          }
        },
        cannotPlaceOrder: function() {
          return this.orderAmount < 1;
        },
        isDangerous: function() {
          return this.orderAmount >= 10;
        },
        orderAmount: function() {
          return this.mediumTypes.length;
        }
      }

    });

window.app = app;
