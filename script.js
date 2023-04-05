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

function change_case_o(TOUR) {
    //let TOUR = document.querySelector('.btn1');
    TOUR.innerHTML = 'O';
    // let i = 0;
    // while(i<TOUR.length) {
    //     TOUR[i].innerHTML='<p>O</p>';
    //     i= i+1;
    // }
}

function change_case_x(TOUR) {
    //let TOUR = document.querySelector('.btn1');
    TOUR.innerHTML = 'X';
    // let i = 0;
    // while(i<TOUR.length) {
    //     TOUR[i].innerHTML='<p>X</p>';
    //     i= i+1;
    // }
}

function radio_player(evt) {
    console.log(evt);
    const RADIO1 = document.querySelector('input[name=radio]:checked').value;
    
    if(RADIO1 == 0) {
        change_case_o(evt.target);
        
    } else {
        change_case_x(evt.target);        
    }
    victoire(); 
}

function onclick_grille() {
    let test = document.querySelectorAll('.btn1');
    let i=0;
    while (i<test.length){
        test[i].addEventListener('click', radio_player);
        i++;    
    }
    
}


// FONCTION JOUEUR 1 / JOUEUR 2





//      RECHERCHE DE VAINQUEUR 


function victoire() {
    let resultat1 = document.querySelector('#idbtn1').innerHTML; 
    let resultat2 = document.querySelector('#idbtn2').innerHTML;  
    let resultat3 = document.querySelector('#idbtn3').innerHTML;
    

    if (
              (resultat1 && resultat2 && resultat3 ==  "X") || (resultat1 && resultat2 && resultat3 ==  "O")
            ) {
              alert("Victoire");
            }
        
               

    
        
    


//     const PLAYERTWO = document.querySelector('#player2-name').value;
//     const SCOREONE = document.querySelector('#player1-score');
//     SCOREONE.innerHTML = PLAYERONE;
//     const SCORETWO = document.querySelector('#player2-score');
//     SCORETWO.innerHTML = PLAYERTWO;
//     document.querySelector('#players-names').classList.add("disabled");
}



// function rechercherVainqueur(grille) {
//     if (
//       case1.innerHTML ==  case2.innerHTML == case3.innerHTML
//     ) {
//       alert("Victoire");
//       return true;
//       console.log("ceci est le premier log" + case1.innerHTML);
//     }

//     console.log("ceci est le second log" + case1.innerHTML);
//     }


window.addEventListener('load', replacename);
window.addEventListener('load', onclick_grille);
