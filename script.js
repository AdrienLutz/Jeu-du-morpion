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


// FONCTION CHANGEMENT ETAT CASE 

function change_case_o() {
    let TOUR = document.querySelector('#btn1');
    TOUR.innerHTML = '<p>O</p>';
}

function change_case_x() {
    let TOUR = document.querySelector('#btn1');
    TOUR.innerHTML = '<p>X</p>';
}


function onclick_grille() {
    document.querySelector('#btn1').addEventListener('click', radio_player);
}


// FONCTION JOUEUR 1 / JOUEUR 2

function radio_player() {
    const RADIO1 = document.querySelector('input[name=radio]:checked').value;
          
    if(RADIO1 == 0) {
        change_case_o();
        
    } else {
        change_case_x();        
    }
}




window.addEventListener('load', replacename);
window.addEventListener('load', onclick_grille);
