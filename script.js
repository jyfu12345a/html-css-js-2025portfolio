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
