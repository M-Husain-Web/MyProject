let newImage = document.querySelector('img')
let container = document.querySelector(".container")

for(i=1 ; i<=500 ; i++)
{
    let newImage = document.createElement('img')
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    container.append(newImage)

}