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

//SNACK 2//
//GENERO L'ARRAY//
//let numbers = []; 

//AVVIO IL CICLO PER 6 ITERAZIONI//

//for (let i = 0; i < 6; i++) {
    //CONSENTO ALL'UTENTE DI INSERIRE IL NUMERO//
   // let num = prompt('Inserisci un numero');
    // CONTROLLO SE IL NUMERO INSERITO E' DISPARI//
   // if (num % 2 != 0) {
        //AGGIUNGO IL NUMERO ALL'ARRAY//
       // numbers.push(num);
   // }
    
//}

//MOSTRO L'ARRAY//
//console.log(numbers);


//SNACK 3//

document.getElementById('send-number').addEventListener('click', function () {
    //RECUPERO IL VALORE DAL CAMPO INPUT//
    let num = document.getElementById('number').value;

    //CONTROLLO CHE IL NUMERO INSERITO ABBIA 4 CIFRE//
    if(num.length === 4){
        //ASSEGNO VARIABILE CONTENENTE LA SOMMA DELLE CIFRE//
        let somma = 0;
    
        for (let i = 0; i < num.length; i++) {
            console.log(num[i]);
            somma += parseInt(num[i]);
            console.log(somma);
        }
        
      
        
    }
    else{
        alert('Non hai inserito un numero di 4 cifre');
    }


    
});