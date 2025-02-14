const showHomePage = () => {
  const content = document.querySelector("#content");
  content.textContent = "";
  const homePage = document.createElement("div");
  homePage.textContent = "HOME";

  content.appendChild(homePage);
}

export { showHomePage };
