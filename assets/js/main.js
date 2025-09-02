const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const close = document.querySelector(".closeMenuBtn");

menu.addEventListener("click", () => header.classList.toggle("showMenu"));
close.addEventListener("click", () => menu.click());
