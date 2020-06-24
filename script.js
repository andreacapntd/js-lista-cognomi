// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’ (quindi dobbiamo avere già definito questo array)
// stampa la lista ordinata alfabeticamente (quindi devo averla ordinata prima di stamparla)
// scrivi anche la posizione “umana” della lista in cui il nuovo utente si trova



//definisco array con la lista dei cognomi

var listaCognomi = ["Baggio", "Stallonne", "Jordan", "Pippen", "Carrey"];
console.log(listaCognomi);

//chiedo all'utente il suo cognome

var cognomeUtente = prompt("Ciao,inserisci il tuo cognome");
console.log(cognomeUtente);

//inserisco il cognome dell'utente nell'array

listaCognomi.push(cognomeUtente);
console.log(listaCognomi);

//ordino la lista dei cognomi in ordine alfabetico

listaCognomi.sort();
console.log(listaCognomi);

//stampare l'indice del nuovo utente inserito
