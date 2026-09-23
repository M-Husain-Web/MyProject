let myName = document.querySelector(".nameHeading")
let myAge = document.querySelector(".ageHeading")
let Inputname = document.querySelector(".Inputname")
let Inputage = document.querySelector(".Inputage")


// myName.innerText = localStorage.Inputname;
myName.innerText = localStorage.getItem('Inputname');
myAge.innerText = localStorage.getItem('Inputage')

Inputname.addEventListener('input' , (e) =>{
    // localStorage.Inputname = e.target.value
    localStorage.setItem('Inputname', e.target.value)
    myName.innerText = localStorage.getItem('Inputname');

})

Inputage.addEventListener('input', (e) =>{

    localStorage.setItem('Inputage', e.target.value)
    myAge.innerText = localStorage.getItem('Inputage');

})