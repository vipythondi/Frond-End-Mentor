let hamburger = document.querySelector('.hidden-menu')
let openH = document.querySelector('.hamburger')
let closeH = document.querySelector('.close')
let hide = document.querySelector('.page-wrapper__header__content__text')
let menu = document.querySelector('.hamburger-menu')

hamburger.addEventListener('click', ()=>{
    if(openH.style.display!='none'){
        openH.style.display = 'none'
        closeH.style.display = 'block'
        menu.style.display = 'block'
        hide.style.display = 'none'
    }
    else{
        openH.style.display = 'block'
        closeH.style.display = 'none'
        menu.style.display = 'none'
        hide.style.display = 'grid'
    }
})