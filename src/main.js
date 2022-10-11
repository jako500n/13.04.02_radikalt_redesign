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
});

klikker2.addEventListener("click", (e) => {
  vis2.classList.toggle("hidden");
});

klikker3.addEventListener("click", (e) => {
  vis3.classList.toggle("hidden");
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
