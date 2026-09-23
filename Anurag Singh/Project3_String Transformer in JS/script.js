const input = document.querySelector(".text_input")
const LowerCase = document.querySelector("#lower-case span")
const UpperCase = document.querySelector("#Upper-case span")
const camelcase = document.querySelector("#camel-case span")
const pascalcase = document.querySelector("#Pascal-case span")
const SnakeCase = document.querySelector("#snake-case span")
const KababCase = document.querySelector("#kabab-case span")
const Trim = document.querySelector("#trim span")

function snakeCase(str){
    return str.replaceAll(' ', '_' )
}

function kababCase(str){
    return str.replaceAll(' ', '-')
}

function trim(str){
    return str.replaceAll(' ', '')
}


function capitalizeString(str){
    if(str.length > 0) 
        return str[0].toUpperCase() + str.slice(1, str.length)
}

function toCamelCase(str){
    
    let finalArray = []
    let lowerCaseString = str.toLowerCase();
    let wordArray = lowerCaseString.split(' ');
    finalArray= wordArray.map((word,i) => {
    if(i === 0) return word
    return capitalizeString(word)
    }) 
    return finalArray.join('')
}


function toPascalCase(str){
    let lowerCaseString = str.toLowerCase();
    let wordArray = lowerCaseString.split(' ');
    let finalArray = wordArray.map((word,i) => {
    return capitalizeString(word)
    })
return finalArray.join('')
}

function UpdateScreen(){
    LowerCase.innerText = input.value.trim().toLowerCase()
    UpperCase.innerText = input.value.trim().toUpperCase()
    camelcase.innerText = toCamelCase(input.value)
    pascalcase.innerText = toPascalCase(input.value)
    SnakeCase.innerText = snakeCase(input.value.trim())
    KababCase.innerText = kababCase(input.value.trim())
    Trim.innerText = trim(input.value.trim())
}

UpdateScreen()

input.addEventListener('input' , UpdateScreen)


