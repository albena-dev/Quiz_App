// taking  3 variables to select the class=======

let scrollContainer = document.querySelector(".gallery");
let back_btn = document.getElementById("back_btn");
let next_btn = document.getElementById("next_btn");

// adding eventlistener & function for scrolling the img======

scrollContainer.addEventListener("wheel", (event) => {
  event.preventDefault(); //to prevent scorll up & down
  scrollContainer.scrollLeft = +event.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});
next_btn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});
back_btn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});
