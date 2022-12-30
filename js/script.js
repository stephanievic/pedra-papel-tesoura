let scoreUser = document.querySelector("#scoreUser");
let scoreComp= document.querySelector("#scoreComputer");
const paper = document.querySelector("#paper");
const rock = document.querySelector ("#rock");
const scissors = document.querySelector("#scissors");

let userPoints = 0, compPoints = 0, compChoice = 0;

function compOption () {
    const options = ["pedra", "papel", "tesoura"];
    let randomOption = Math.floor(Math.random () * 3);

    return compChoice = options[randomOption];
}

function game (userChoice){
    let resultMessage = document.querySelector("#result");

    compOption();

    if (compChoice == userChoice){
        resultMessage.innerHTML = "<h1> Empatou! </h1> <p> Você e o computador escolheu o mesmo movimento.";
    }  
    
    switch (userChoice) {
        case "pedra":
            if (compChoice == "tesoura"){
                resultMessage.innerHTML = "<h1> Você ganhou!! </h1> <p> Você escolheu pedra, e o computador escolheu tesoura.";
                userPoints ++;
            }

            else if (compChoice == "papel"){
                resultMessage.innerHTML = "<h1> Você perdeu! :( </h1> <p> Você escolheu pedra, e o computador escolheu papel.";
                compPoints ++;
            }

        break;
    
        case "tesoura":
            if (compChoice == "papel"){
                resultMessage.innerHTML = "<h1> Você ganhou!! </h1> <p> Você escolheu tesoura, e o computador escolheu papel.";
                userPoints++;
            }

            else if (compChoice == "pedra") {
                resultMessage.innerHTML = "<h1> Você perdeu! :( </h1> <p> Você escolheu tesoura, e o computador escolheu pedra.";
                changeBorder()
                compPoints ++;
            }

        break;

        case "papel":
            if (compChoice == "pedra"){
                resultMessage.innerHTML = "<h1> Você ganhou!! </h1> <p> Você escolheu papel, e o computador escolheu pedra.";
                userPoints ++;
            }

            else if (compChoice == "tesoura"){
                resultMessage.innerHTML = "<h1> Você perdeu! :( </h1> <p> Você escolheu papel, e o computador escolheu tesoura."; 
                changeBorder();
                compPoints ++;
            }

        break;
    }     

    resultMessage.classList.add("result");
    resultMessage.classList.remove("hide");
    
    changeScore();
}

function changeScore (){
    scoreUser.innerHTML = `${userPoints}`;
    scoreComp.innerHTML = `${compPoints}`;
}

paper.addEventListener("click", () => {
    game("papel");
});

rock.addEventListener("click", () => {
    game ("pedra");
});

scissors.addEventListener("click", () => {
    game("tesoura");
})


