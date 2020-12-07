document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.nav-menu').classList.toggle('show');
})

document.querySelector('.productos').addEventListener('click',() => {
    document.querySelector('.nav-menu li ul').classList.toggle('show');
})