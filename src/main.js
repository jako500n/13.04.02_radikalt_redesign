import "./style.css";

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

// MENU
const menu_click = document.querySelector(".menu_click");
var menu_punkter = document.querySelector(".menu_punkter");
var menu_luk = document.querySelector(".menu_luk");

menu_click.addEventListener("click", (e) => {
  menu_punkter.classList.toggle("hidden");
});

menu_luk.addEventListener("click", (e) => {
  menu_punkter.classList.add("hidden");
});

// Klikker
const vis = document.querySelector(".vis");
const vis2 = document.querySelector(".vis2");
const vis3 = document.querySelector(".vis3");
const vis4 = document.querySelector(".vis4");
const vis5 = document.querySelector(".vis5");

const klikker = document.querySelector(".klikker");
const klikker2 = document.querySelector(".klikker2");
const klikker3 = document.querySelector(".klikker3");
const klikker4 = document.querySelector(".klikker4");
const klikker5 = document.querySelector(".klikker5");

klikker.addEventListener("click", (e) => {
  console.log("halloooo");
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

klikker4.addEventListener("click", (e) => {
  vis4.classList.toggle("hidden");
  var arrow4 = document.querySelector(".arrow4");
  var arrow_up4 = document.querySelector(".arrow_up4");

  arrow4.classList.toggle("arrow_up4");
});

klikker5.addEventListener("click", (e) => {
  vis5.classList.toggle("hidden");
  var arrow5 = document.querySelector(".arrow5");
  var arrow_up5 = document.querySelector(".arrow_up5");

  arrow5.classList.toggle("arrow_up5");
});

//OM SIDE JS//
window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises :)");
  document.querySelector(".1").classList.add("hide");
  document.querySelector(".2").classList.add("hide");
  document.querySelector(".3").classList.add("hide");
  document.querySelector(".4").classList.add("hide");
  document.querySelector(".5").classList.add("hide");
}
