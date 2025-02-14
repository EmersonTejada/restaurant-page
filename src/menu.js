const showMenuPage = () => {
  const content = document.querySelector("#content");
  content.textContent = "";
  const menuPage = document.createElement("div");
  menuPage.textContent = "MENU";

  content.appendChild(menuPage);
};

export { showMenuPage };
