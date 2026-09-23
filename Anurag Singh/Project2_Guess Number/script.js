let UserInput = document.querySelector(".UserInput")
let form = document.querySelector("form")
const result = document.querySelector(".result")
const all_guesses = document.querySelector(".all_guesses")
let submit_btn = document.querySelector(".submit_btn")
let RestartGame_btn = document.querySelector(".RestartGame_btn");


(function (){

    let guessArray = []
    let randomNumber = Math.round(Math.random()*100);

    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        let UserInputNum = parseInt(UserInput.value)
        if (UserInputNum > randomNumber){
            result.innerText = 'Too High!';
        }
        else if(UserInputNum < randomNumber){
            result.innerText ='Too Low!';
        }
        else{
            result.innerText = 'You got it, Congrats!!!';
            RestartGame_btn.disabled = false
            submit_btn.disabled = true
            
        }
        guessArray.push(UserInputNum)
        all_guesses.innerText = "Your guesses : " + guessArray.join(', ')
    
        form.reset();
            
    })
    RestartGame_btn.addEventListener('click', ()=>{
        all_guesses.innerText = ''
        result.innerText = ''
        RestartGame_btn.disabled = true
        submit_btn.disabled = false
        randomNumber = Math.round(Math.random()*100)
    
    })

})()


    
    
    


