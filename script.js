function toggleMenu() {
  /* Defining the function */
  /* Using an in-built system in javascript to target an element on our webpage, which we will use that element */
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  /* The 2 code of lines above allows us to target each of them */
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  /* The 2 code of lines above makes it so when the target is pressed, it will either add or remove the open class in that element; where the open class will have some styling */
}

/* Dark / Light Mode*/
/* This gets 1 element with an id of modeToggle*/
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
/* This gets ALL elements with a class of icon*/
const themeIcons = document.querySelectorAll(".icon");
/* currentTheme keeps track of what theme we are on, as well as saves theme in a local storage (basically in the browser)*/
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

/* ("click") is a pre-made thing on java script*/
btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

/* one = means setting something to something, whereas triple = is checking if something is the same*/

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");
  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}
