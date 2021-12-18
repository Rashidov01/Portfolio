// window design
let elNavbar = document.querySelector(".navbar")

window.addEventListener("scroll", function(){
    if(this.scrollY > 20){
        elNavbar.classList.add("sticky");
    }else{
        elNavbar.classList.remove("sticky");
    }
})

// typed.js
let typed = new Typed(".type", {
    strings: [ "Frontend developer","Freelancer","UI designer"],
    typeSpeed: 120,
    backSpeed: 80,
    loop: true
});