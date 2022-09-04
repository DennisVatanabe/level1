const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,

    pagination: {
    el: '.swiper-pagination', 
    clickable: true,
    },
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".banner__burger").addEventListener("click", function() {
        document.querySelector(".banner__header-nav").style.display = "block"
        document.querySelector(".banner__cross").style.display ="block"
        document.querySelector(".banner__burger").style.display = "none"
        document.querySelector(".banner__title").style.display = "none"
        document.querySelector(".banner__subtitle").style.display = "none"
        document.querySelector(".banner__button").style.display = "none"
    })

    document.querySelector(".banner__cross").addEventListener("click", function() {
        document.querySelector(".banner__header-nav").style.display = "none"
        document.querySelector(".banner__cross").style.display = "none"
        document.querySelector(".banner__burger").style.display ="block"
        document.querySelector(".banner__header-logo").style.display = "inherit"
        document.querySelector(".banner__title").style.display = "block"
        document.querySelector(".banner__subtitle").style.display = "block"
        document.querySelector(".banner__button").style.display = "block"
    })
})