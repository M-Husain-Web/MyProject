let count = document.querySelector('.count')
let minus_button = document.querySelector('.minus_button')
let plus_button = document.querySelector('.plus_button')
let changeBy = document.querySelector('.changeBy')
let Reset_button = document.querySelector('.resetBtn')

minus_button.addEventListener('click' ,() =>{
   let countValue = parseInt(count.innerText)
   let changeByValue = parseInt(changeBy.value)
   count.innerText= countValue - changeByValue

})
plus_button.addEventListener('click' ,() =>{
    let countValue = parseInt(count.innerText)
    let changeByValue = parseInt(changeBy.value)
    count.innerText= countValue + changeByValue
 
 })
Reset_button.addEventListener('click' , ()=>{
    count.innerText = 0 
    changeBy.value = 1
 })

 