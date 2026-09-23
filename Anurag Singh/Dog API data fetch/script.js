let img = document.querySelector('img')
let button = document.querySelector('button')


button.addEventListener('click', (e)=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((json) => {
         img.src = json.message
});

})
