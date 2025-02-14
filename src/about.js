const showAboutPage = () => {
  const content = document.querySelector("#content");
  content.textContent = "";
  const aboutPage = document.createElement("div");
  aboutPage.textContent = "ABOUT";

  content.appendChild(aboutPage);
};

export { showAboutPage };
