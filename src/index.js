import { about } from "./about";
import { home } from "./home";
import { menu } from "./menu";

home();

const homeButton = document.querySelector("#homeButton");
const menuButton = document.querySelector("#menuButton");
const aboutButton = document.querySelector("#aboutButton");

homeButton.addEventListener("click", () => home());
menuButton.addEventListener("click", () => menu());
aboutButton.addEventListener("click", () => about());
