import "./styles.css";
import { showHomePage } from "./home.js";
import { showAboutPage } from "./about.js";
import { showMenuPage } from "./menu.js";


showHomePage();
// showMenuPage();
// showAboutPage();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", showHomePage);
menuButton.addEventListener("click", showMenuPage);
aboutButton.addEventListener("click", showAboutPage);
