

let gameSeq = [];
let userSeq = [];
let btns = ["btn-1", "btn-2" , "btn-3" , "btn-4"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game is started");
        started = true;

        levelUp();
    }
});

function gameFlash (btn) {
    btn.classList.add("flash");
    setTimeout ( function() {
        btn.classList.remove("flash");
    }, 350);
}

function userFlash (btn) {
    btn.classList.add("userFlash");
    setTimeout ( function() {
        btn.classList.remove("userFlash");
    }, 350);
}

function levelUp () {
    userSeq = [];
    level++; 
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random()*4);
    console.log(randIdx);
    let randColor = btns[randIdx];
    console.log(randColor);
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    gameFlash (randBtn);
}

function checkSeq (idx) {
    
    if( userSeq[idx] === gameSeq[idx]) {
        if ( userSeq.length == gameSeq.length ) {
            setTimeout(levelUp(), 1000);
        }
        
    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}<b> <br> Press any key to restart the game `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "beige";
        }, 200);
        reset();
    }
}
function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn"); 

for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}