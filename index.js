var navToggleButton = document.querySelector("#nav-toggle");
var navMenu = document.querySelector("#main-nav");

navToggleButton.addEventListener("click", () => {
  var isExpanded = navToggleButton.getAttribute("aria-expanded");
  if (isExpanded === "false") {
    navToggleButton.setAttribute("aria-expanded", true);
    navMenu.setAttribute("data-visible", true);
    document.body.classList.toggle("menu-open");
  } else {
    navToggleButton.setAttribute("aria-expanded", false);
    navMenu.setAttribute("data-visible", false);
    document.body.classList.toggle("menu-open");
  }
});
