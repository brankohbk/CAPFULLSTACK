"use strict"

// ===============================
// MUESTRA UN "TO THE TOP" AL SCROLLEAR.
let upper = document.getElementById("toTop");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 220) {
    upper.className = "toTop showTopper"
  } else {
    upper.className = "toTop hideTopper"
  }

};

window.addEventListener("scroll", myScrollFunc);