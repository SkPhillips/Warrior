// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true
let weaponChoice = true

// Create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const dmgBtn = document.getElementById("dmgBtn")
const resetBtn = document.getElementById("resetBtn")
const ogreWords = document.getElementById("ogre-words")
const ogreDefeat = document.getElementById("ogre-defeat")
const ogre = document.getElementById("ogre")
const dead = document.getElementById("dead")
const sword = document.getElementById("sword")
const book = document.getElementById("book")
const axe = document.getElementById("axe")
const arm = document.getElementById("arm")
const choose = document.getElementById("choose")
const weaponContainer = document.getElementById("weapon-container")





function showResetButton() {
    dmgBtn.style.display = "none"
    resetBtn.style.display = "block"
    ogre.style.display = "none"
    dead.style.display = "block"
}

/* When Attack Button is Clicked */
 dmgBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Warrior 2 Turn"
        
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Warrior 1 Turn"
        
    }
    
    if (player1Score >= 20) {
        message.textContent = "Warrior ONE did the most damage ⚔️"
        ogreWords.style.display = "none";
        ogreDefeat.style.display = "block";
        showResetButton()
    }  else if (player2Score >= 20) {
        message.textContent = "Warrior TWO did the most damage ⚔️"
        ogreWords.style.display = "none";
        ogreDefeat.style.display = "block";
        showResetButton()
    }
    player1Turn = !player1Turn
})
 
resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = true
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    resetBtn.style.display = "none"
    dmgBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    ogre.style.display = "block"
    ogreWords.style.display = "block"
    dead.style.display = "none"
    ogreDefeat.style.display = "none"
    weaponContainer.style.display = "block"
    message.textContent = "Warrior 1 Claim A Weapon"
    dmgBtn.style.display = "none"
    
}


// WEAPON BUTTONS

// When Weapon Button is Selected
  
sword.addEventListener("click", function(){

    if (weaponChoice) {
        player1Dice.style.backgroundImage = "url(https://www.svgrepo.com/show/152773/sword.svg"
        player1Dice.style.backgroundColor = "#1725e8"
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Warrior 2 Claim A Weapon"
        
    } else {
        player2Dice.style.backgroundImage = "url(https://www.svgrepo.com/show/152773/sword.svg"
        player2Dice.style.backgroundColor = "#1725e8"
        message.textContent = "Warrior 1 Turn"
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        choose.style.display= "none" 
        weaponContainer.style.display = "none"
        dmgBtn.style.display = "block"
    }

    weaponChoice = !weaponChoice
})



book.addEventListener("click", function(){

    if (weaponChoice) {
        player1Dice.style.backgroundImage = "url(https://www.svgrepo.com/show/51050/open-book.svg"
        player1Dice.style.backgroundColor = "green"
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Warrior 2 Claim A Weapon"
        
    } else {
        player2Dice.style.backgroundImage = "url(https://www.svgrepo.com/show/51050/open-book.svg"
        player2Dice.style.backgroundColor = "green"
        message.textContent = "Warrior 1 Turn"
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        choose.style.display= "none" 
        weaponContainer.style.display = "none"
        dmgBtn.style.display = "block"
    }

    weaponChoice = !weaponChoice
    
    
})

axe.addEventListener("click", function(){
    
    if (weaponChoice) {
        player1Dice.style.backgroundImage = "url(https://www.svgrepo.com/show/159003/battle-axe.svg"
        player1Dice.style.backgroundColor = "red"
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Warrior 2 Claim A Weapon"
        
    } else {
        player2Dice.style.backgroundImage = "url(https://www.svgrepo.com/show/159003/battle-axe.svg"
        player2Dice.style.backgroundColor = "red"
        message.textContent = "Warrior 1 Turn"
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        choose.style.display= "none" 
        weaponContainer.style.display = "none"
        dmgBtn.style.display = "block"
    }

    weaponChoice = !weaponChoice
    
})

arm.addEventListener("click", function(){

    if (weaponChoice) {
        player1Dice.style.backgroundImage = "url(https://www.svgrepo.com/show/37733/arm-muscles-silhouette.svg"
        player1Dice.style.backgroundColor = "orange"
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Warrior 2 Claim A Weapon"
        
    } else {
        player2Dice.style.backgroundImage = "url(https://www.svgrepo.com/show/37733/arm-muscles-silhouette.svg"
        player2Dice.style.backgroundColor = "orange"
        message.textContent = "Warrior 1 Turn"
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        choose.style.display= "none" 
        weaponContainer.style.display = "none"
        dmgBtn.style.display = "block"
    }

    weaponChoice = !weaponChoice
    
})

