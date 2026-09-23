let button = document.querySelector('button')
let popUp = document.querySelector('.popUp')
let crossIcon = document.querySelector('.cross_icon')
let popUp_container = document.querySelector('.popUp_container')

button.addEventListener('click', (e)=>{
    popUp.classList.add('open')
})

crossIcon.addEventListener('click', (e) => {
    popUp.classList.remove('open')
})

// popUp_container.addEventListener('click', (e) => {
//     popUp.classList.remove('open')
// })