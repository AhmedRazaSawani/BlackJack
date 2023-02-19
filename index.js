
let cards = []
let sum = 0
let hasblackjack = false
let isalive = false
let outofmoney = false
let player = {
    name: "Ahmed",
    money: 150
}
document.getElementById("newcard-button").disabled = true;
let playernameEl = document.getElementById("playername")
let playermoneyEl = document.getElementById("playermoney")
playernameEl.textContent = player.name + ": $" 
playermoneyEl.textContent = player.money


function getRandomCard() {
    let randomnumber = Math.floor(Math.random()*13) + 1
    if( randomnumber > 10 ) {
        return 10
    }else if( randomnumber === 1) {
        return 11
    }else{
        return randomnumber
    }

    

}


let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    document.getElementById("newcard-button").disabled = false;
    isalive = true
    player.money -= 10;
    playermoneyEl.textContent = player.money;
    if(playermoneyEl.textContent === 0 || player.money < 0){
        isalive = false
        alert("you are out of money")
        document.getElementById("newcard-button").disabled = true;
        playermoneyEl.textContent = 0
    }else{
        isalive = true
        outofmoney = true
    }
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    rendergame()
}

function rendergame() {
    cardsEl.textContent = "Cards: "
    for(let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "Wohoo! you've got BlackJack!"
        hasblackjack = true
        isalive = false
    }else{
        message = "You're out of the game!"
        isalive = false
    }
    if(message === "You're out of the game!" || message === "Wohoo! you've got BlackJack!"){
        document.getElementById("newcard-button").disabled = true;
    }
    messageEl.textContent = message
}

if(isalive === true && hasblackjack === false) {
    newcard()
}

function newcard() {
    player.money -= 5;
    playermoneyEl.innerHTML = player.money;

    if (player.money < 0) {
        alert("Not enough money.");
        document.getElementById("newcard-button").disabled = true;
    } else if (isalive === true) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        rendergame();
    }
}
