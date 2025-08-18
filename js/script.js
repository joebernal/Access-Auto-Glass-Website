const btnOpen = document.querySelector("#btnOpen");
const btnClose = document.querySelector("#btnClose");
const menuTopNav = document.querySelector("#menuTopNav");
const overlay = document.querySelector("#overlay");
const breakpoint = window.matchMedia("(width < 43.75em");

const setUpTopNav = () => {
  if (breakpoint.matches) {
    // console.log("is mobile");
  } else {
    // console.log("is tablet/desktop");
    closeMobileMenu();
  }
};

setUpTopNav();

btnOpen.addEventListener("click", openMobileMenu);
btnClose.addEventListener("click", closeMobileMenu);

breakpoint.addEventListener("change", () => {
  // console.log("breakpoint crossed");
  setUpTopNav();
});

function openMobileMenu() {
  // console.log("run openMobileMenu");
  btnOpen.setAttribute("aria-expanded", "true");
  menuTopNav.style.transitionDuration = "400ms";
  overlay.style.transitionDuration = "400ms";
  bodyScrollLock.disableBodyScroll(menuTopNav);
  btnClose.focus();
}
function closeMobileMenu() {
  // console.log("run closeMobileMenu");
  btnOpen.setAttribute("aria-expanded", "false");
  bodyScrollLock.enableBodyScroll(menuTopNav);
  btnOpen.focus();

  setTimeout(() => {
    menuTopNav.removeAttribute("style");
    overlay.removeAttribute("style");
  }, 500);
}

// Close mobile menu when any nav link inside it is clicked
document.querySelectorAll("#menuTopNav .topnav__link").forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileMenu();
  });
});
