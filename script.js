"use strict";

function validation () {
    const PLAYERONE = document.querySelector('#player1-name').value;
    const PLAYERTWO = document.querySelector('#player2-name').value;
    const SCOREONE = document.querySelector('#player1-score');
    SCOREONE.innerHTML = PLAYERONE;
    const SCORETWO = document.querySelector('#player2-score');
    SCORETWO.innerHTML = PLAYERTWO;
}

function replacename ()  {
    document.querySelector('#btn-start-game').addEventListener('click', validation);
}

window.addEventListener('load' , replacename );
