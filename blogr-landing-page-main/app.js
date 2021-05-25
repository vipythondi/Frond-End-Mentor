let hamburger = document.querySelector(".hamburger")
let hamb = document.querySelector('.hamb')
let closed = document.querySelector('.close')
let content = document.querySelector('.header__content')
let hamburger_menu = document.querySelector(".hamburger__menu")
hamburger.addEventListener('click', ()=>{
    if(hamb.style.display != "none"){
        hamb.style.display = "none"
        closed.style.display = "grid"
        content.style.display = "none"
        hamburger_menu.classList.add("show")
        hamburger_menu.style.display = "grid"
    }
    else {
        hamb.style.display = "grid"
        closed.style.display = "none"
        content.style.display = "grid"
        hamburger_menu.classList.remove("show")
        hamburger_menu.style.display = "none"
    }
})