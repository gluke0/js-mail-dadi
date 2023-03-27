// bottone per lanciare i dati, 1 utente e 1 cpu

let play = document.getElementById('play');

let win = 0;
let lose = 0;
let tie = 0;

let winCount = document.getElementById('winner');
let loseCount = document.getElementById('loser');
let tieCount = document.getElementById('tie');

play.addEventListener('click',
  function() {
    const playerDice = Math.floor(Math.random() * 6) + 1;
    const cpuDice = Math.floor(Math.random() * 6) + 1;

    if (playerDice > cpuDice){
      alert(`HAI IL NUMERO ${playerDice} E LA CPU HA IL NUMERO ${cpuDice}. HAI VINTO!`);
      document.getElementById("main").classList.add("win")
      document.querySelector("main").classList.remove("lose", "tie")
      win += 1;
      winCount.innerHTML = `${win}`;
    } else if (cpuDice > playerDice){
      alert(`HAI IL NUMERO ${playerDice} E LA CPU HA IL NUMERO ${cpuDice}. HAI PERSO :(`);
      document.getElementById("main").classList.add("lose")
      document.querySelector("main").classList.remove("win", "tie")
      lose += 1;
      loseCount.innerHTML = `${lose}`;
    } else {
      alert(`HAI IL NUMERO ${playerDice} E LA CPU HA IL NUMERO ${cpuDice}. PAREGGIO!`);
      document.getElementById("main").classList.add("tie")
      document.querySelector("main").classList.remove("lose", "win")
      tie += 1;
      tieCount.innerHTML = `${tie}`;
    }
});

function refreshPage(){
    window.location.reload();
}