"use strict";

function validation() {
    const PLAYERONE = document.querySelector('#player1-name').value;
    const PLAYERTWO = document.querySelector('#player2-name').value;
    const SCOREONE = document.querySelector('#player1-score');
    SCOREONE.innerHTML = PLAYERONE;
    const SCORETWO = document.querySelector('#player2-score');
    SCORETWO.innerHTML = PLAYERTWO;
    document.querySelector('#players-names').classList.add("disabled");
}

function replacename() {
    document.querySelector('#btn-start-game').addEventListener('click', validation);
    
}

function changebg() {
    
}

window.addEventListener('load', replacename);

