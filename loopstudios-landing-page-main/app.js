let hamburger = document.querySelector(".header__navigation__hamburger")
let ham = document.querySelector('.hamburger')
let closed = document.querySelector(".close")
let header = document.querySelector(".header")
let box = document.querySelector('.header__section__box')
let menu = document.querySelector('.header__section__menu')
let page = document.querySelector('.page-wrapper')

hamburger.addEventListener('click', ()=>{
    if(ham.style.display != "none"){
        ham.style.display = "none"
        closed.style.display = "grid"
        header.style.background = "black"
        box.style.display = "none"
        menu.style.display = "grid"
    }
    else{
        ham.style.display = "grid"
        closed.style.display = "none"
        box.style.display = "grid"
        menu.style.display = "none"
        header.style.background = "url(/images/mobile/image-hero.jpg)"
        location.reload()
    }
    
})
