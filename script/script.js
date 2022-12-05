/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

1. il prezzo del biglietto è definito in base ai km (0.21 € al km)
2. va applicato uno sconto del 20% per i minorenni
3. va applicato uno sconto del 40% per gli over 65.
4. L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//analisi e lista steps
/*
1- collego elemento dal DOM
2- chiedo all'utente quanti KM deve percorrere (promt)
3- chiedo all'utente l'età (promt)
4- definisco prezzo del biglietto STANDARD "senza sconti" (const)
5- calcolo il prezzo reale con lo sconto se necessario (let)
6- stampo in pagina
*/

// prezzo per chilometro
x = 0.21

//.1
const targetElement = document.getElementById("result");
const targetKm = document.getElementById("userKm");
const targetAge = document.getElementById("userAge");
const targetPrice = document.getElementById("price");
const targetSold = document.getElementById("sconto");
////console.log("reuslt")

//.2 .3
const userKm = parseInt(prompt("Quanti KM vuoi percorrere?", "137").trim());

const userAge = parseInt(prompt("inserisci la tua età", "24").trim());

//.4
const normalTotal = userKm * x

//.5

if (userAge >= 18 && userAge <= 64) {
    result = normalTotal;
    sconto = (normalTotal * 0)

} else if (userAge <= 17) {
    sconto = (normalTotal * 0.2)
    result = (normalTotal - sconto)

} else if (userAge >= 64) {
    sconto = (normalTotal * 0.4)
    result = (normalTotal - sconto)
}

//.6

//price
targetPrice.innerText = `${result.toFixed(2)}`;
//age
targetAge.innerText = `${userAge} `;
//km
targetKm.innerText = `${userKm} `;
//sconto
targetSold.innerText = `${sconto.toFixed(2)}`;