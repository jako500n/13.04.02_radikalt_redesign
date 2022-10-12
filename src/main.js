import "./style.css";

// skal nok laves om til element child ?!
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

// const openMenu = document.querySelector(".openMenu");
// const menu = document.querySelector(".menu");
// const closeMenu = document.querySelector(".closeMenu");

// openMenu.addEventListener("click", (e) => {
//   menu.style.display = "block";
//   console.log("helloe");
// });

// closeMenu.addEventListener("click", (e) => {
//   menu.style.display = "none";
// });
