import "./style.css";

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

const vis = document.querySelector(".vis");
const vis2 = document.querySelector(".vis2");
const vis3 = document.querySelector(".vis3");

const klikker = document.querySelector(".klikker");
const klikker2 = document.querySelector(".klikker2");
const klikker3 = document.querySelector(".klikker3");

klikker.addEventListener("click", (e) => {
  vis.classList.toggle("hidden");
  var arrow = document.querySelector(".arrow");
  var arrow_up = document.querySelector(".arrow_up");

  arrow.classList.toggle("arrow_up");
});

klikker2.addEventListener("click", (e) => {
  vis2.classList.toggle("hidden");
  var arrow2 = document.querySelector(".arrow2");
  var arrow_up2 = document.querySelector(".arrow_up2");

  arrow2.classList.toggle("arrow_up2");
});

klikker3.addEventListener("click", (e) => {
  vis3.classList.toggle("hidden");
  var arrow3 = document.querySelector(".arrow3");
  var arrow_up3 = document.querySelector(".arrow_up3");

  arrow3.classList.toggle("arrow_up3");
});

const menu_click = document.querySelector(".menu_click");
var menu_punkter = document.querySelector(".menu_punkter");
var menu_luk = document.querySelector(".menu_luk");
menu_click.addEventListener("click", (e) => {
  menu_punkter.classList.toggle("hidden");
});

menu_luk.addEventListener("click", (e) => {
  menu_punkter.classList.add("hidden");
});
