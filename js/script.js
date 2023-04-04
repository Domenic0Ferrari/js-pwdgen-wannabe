// chiediamo all'utente qual è il suo nome

const userName = prompt(`Qual è il tuo nome?`);

// chiediamo all'utente qual è il suo cognome

const userSurname = prompt(`Qual è il tuo cognome?`);

// chiediamo all'utente qual è il suo colore preferito

const userColor = prompt(`Qual è il tuo colore preferito?`);

// sommiamo le stringhe e inseriamo il risultato

const eleSpan = document.getElementById(`result`);

eleSpan.innerHTML = userName + userSurname + userColor;



