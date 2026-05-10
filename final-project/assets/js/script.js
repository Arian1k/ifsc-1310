const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    const menuIsOpen = navLinks.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", menuIsOpen);

    if (menuIsOpen) {
      menuButton.textContent = "Close";
    } else {
      menuButton.textContent = "Menu";
    }
  });
}