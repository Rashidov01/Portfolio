// window design
var elHeader = document.querySelector(".header");
var elBtn = document.querySelector('.scroll-up-btn')

window.addEventListener("scroll", function(){
    if(this.scrollY > 20){
        elHeader.classList.add("sticky");
    }else{
        elHeader.classList.remove("sticky");
    };
    if(this.scrollY > 1200){
        elBtn.classList.add("show");
    }else{
        elBtn.classList.remove("show");
    }
});

// typed.js
var typed = new Typed(".type", {
    strings: [ "Frontend developer","42 AbuDhabi student","UI/UX designer"],
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

 $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

//mode
let elButton = document.querySelector('.navbar-menu__hamburg');
let elNav = document.querySelector('.header__nav');

elButton.addEventListener('click', function() {
    elNav.classList.toggle('active')
    elButton.classList.toggle('active')
})