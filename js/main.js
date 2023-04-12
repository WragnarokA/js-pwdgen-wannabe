let nome = prompt("Nome?");
let cognome = prompt("Cognome?");
let colore = prompt("Qual è il tuo colore preferito?");
let annoCorrente = 2023; 
let password = `${nome} ${cognome} ${colore} ${annoCorrente}`;

document.getElementById("nome").innerText = nome
document.getElementById("cognome").innerText = cognome
document.getElementById("colore").innerText = colore
document.getElementById("password").innerText = password