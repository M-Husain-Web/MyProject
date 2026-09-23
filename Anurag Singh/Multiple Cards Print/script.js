
/*---------------Multiple clone cards print code-------------------------------------------------*/

// let container = document.querySelector(".container")
// let card = document.querySelector(".card")

// for(i=1 ; i<=500 ; i++)
// {
//     let newCard = card.cloneNode()
//     newCard.innerText = i
//     container.appendChild(newCard)
// }




function cardClicked(){
    console.log('Card double clicked');
}

let card = document.querySelector('.card')
let container = document.querySelector(".container")

let count = 1
function clicked(){
   let newCard = document.createElement('div');
   newCard.classList.add('card')
   newCard.innerText = count++
   container.append(newCard) 

}
card.addEventListener('click' , clicked)