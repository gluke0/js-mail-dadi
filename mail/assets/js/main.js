// chiedi utente email
// controllo con email registrate
// output si o no

// email con permesso
let lista = ['mariorossi@gmail.com','google@gmail.com','boolean@gmail.com','mrjava@gmail.com','elonmusk@gmail.com','tim@gmail.com',]
 
document.getElementById("luck").addEventListener('click', function() {
 
    let controllore = false;
    let nome = document.getElementById("email").value;

    for (let x = 0; x < lista.length; x++) {

        if (lista[x] == nome){
            controllore = true
      }
    }

    if (controllore) {
        document.getElementById("main").classList.add("lucky")
    } else {
        document.getElementById("main").classList.add("unlucky")  
    }
})

function refreshPage(){
    window.location.reload();
}