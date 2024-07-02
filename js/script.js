//SNACK 1//

//CREO L'ARRAY PER I DATI DELL'UTENTE//
let guests = ['Alessandro Del piero', 'David Trezeguet', 'Paulo Dybala', 'Leonardo Bonucci'];
//IMPOSTO VARIABILE DI CONTROLLO//
let check_guest = false;

//RECUPERO IL PULSANTE DAL DOM E LO LASCIO IN ATTESA DI EVENTO CLICK//

document.getElementById('check-guest').addEventListener('click', function () {
        //RECUPERO IL VALORE INSERITO NELL'INPUT//
    let name = document.getElementById('name').value;
    //GENERO CICLO ARRAY//
    for (let i = 0; i < guests.length; i++) {
        //CONTROLLO VALORE ITERATO//
        if (guests[i].toLowerCase() === name.toLowerCase()) {
            check_guest = true;
        }   
    }
        
        
    //VERIFICO VARIABILE DI CONTROLLO//
    if (check_guest) {
        console.log(`Benvenuto ${name}, prego si accomodi`);
    }

    else {
        console.log(`ALT! Chi siete, non entrate`);
    }

});