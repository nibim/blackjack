let firstCard = getRandomNum();
let dealerFirstCard = getRandomNum ();
let secondCard = getRandomNum();

let cards = [firstCard, secondCard];
console.log(cards);
let sum = firstCard + secondCard;
let message="";
let inGame = true;
let blackJack = false;
let startedGame = false;
let cardElement = document.getElementById("cards");
let sumElement = document.getElementById("sum");
let msgElement = document.getElementById("message");

const inputEl = document.getElementById("input-el");
const user = {name : ""};

function signUp(){    
    user.name = inputEl.value;
    msgElement.textContent = "Welcome " + user.name + "! Wanna play a round of Blackjack?"
    inputEl.setAttribute("value","")
}


function getRandomNum() {
    let num = Math.floor(Math.random() * 13) + 1;
    if(num > 10)
    return 10;
    else if(num === 1) {
        return 11
    }
    else{
        return num
    }
}

function startGame() {
    renderGame();
}

function renderGame() {
    startedGame = true;
    cardElement.textContent = "your cards: ";
    for (let index = 0; index < cards.length; index++) {
        cardElement.textContent += cards[index] + " ";
    }
    sumElement.textContent = "The sum is: " + sum;
    if (sum>21){message = "you lost",inGame=false}
    else if (sum===21){message= "you got a black jack!",blackJack = true}
    else{message= "Do you want to draw another card?"}
    
    msgElement.textContent = message;
}


function increase() {
    if(startedGame == false){
        msgElement.textContent = "Please first start the game!"
    }
    else if(inGame === true && blackJack === false){
    let thirdCard = getRandomNum();
    cards.push(thirdCard);
    sum += thirdCard;
    renderGame();
    }
}