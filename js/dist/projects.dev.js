"use strict";

var projectBtn = document.querySelectorAll(".project");
projectBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.nextElementSibling.classList.toggle("visible");
    btn.querySelector(".arrow").classList.toggle("rotated");
  });
});