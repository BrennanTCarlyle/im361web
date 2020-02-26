import Vue from 'vue/dist/vue.js'
import "./style.css";
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
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

 methods: {
    NewWindow: function() {
            window.open("file:///C:/Users/Brennan/Documents/IM361/IM361REPO/im361web/Featured_shaxx.html");
        }
}

    });

window.app = app;
