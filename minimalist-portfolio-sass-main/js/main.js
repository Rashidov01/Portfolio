let elHeaderMenu = document.querySelector(".header");
let elHamburgMenu = elHeaderMenu.querySelector(".header-hamburg__btn");

elHamburgMenu.addEventListener("click", function(){
  elHeaderMenu.classList.toggle("header-top__open");
})