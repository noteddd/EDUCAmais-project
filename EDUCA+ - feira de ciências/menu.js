
let btnMenu = document.getElementById('btn-menu-m')
let Menu = document.getElementById('m-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    Menu.classList.add('hype-menu')
})

Menu.addEventListener('click', ()=>{
    Menu.classList.remove('hype-menu')
})

overlay.addEventListener('click', ()=>{
    Menu.classList.remove('hype-menu')
})