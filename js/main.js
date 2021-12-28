// window design
var elNavbar = document.querySelector(".navbar");
var elBtn = document.querySelector('.scroll-up-btn')

window.addEventListener("scroll", function(){
    if(this.scrollY > 20){
        elNavbar.classList.add("sticky");
    }else{
        elNavbar.classList.remove("sticky");
    };
    if(this.scrollY > 500){
        elBtn.classList.add("show");
    }else{
        elBtn.classList.remove("show");
    }
});

// typed.js
var typed = new Typed(".type", {
    strings: [ "Frontend developer","Freelancer","UI designer"],
    typeSpeed: 160,
    backSpeed: 120,
    loop: true
});

var typed = new Typed(".type__second", {
    strings: [ "Frontend developer","Freelancer","UI designer"],
    typeSpeed: 160,
    backSpeed: 120,
    loop: true
});

//scroll-up
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

//mode 
let elToggler = document.querySelector('toggler');

elBtn.addEventListener('toggle', function(){
    document.body.classList.toggle('dark-theme')
})