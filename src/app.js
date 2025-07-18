import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";




window.onload = function() {

  let who = ['Mi perro ', 'Dayloc ','Mi gato ','Nef ','Lalo ']
  let action = ['se comió ', 'buggeó ', 'robó ', 'orinó ', 'estrelló ']
  let what = ['la tarea ', 'mi laptop ','los ahorros ','la mantita ','el cochazo de 4Geeks ']
  let when = ['en el desayuno.','durante la clase de Java.','mientras dormía.','mientras programaba una web de impuestos.','tras su entrevista para Amazon.']

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

function getRandom(anyAray){
  let max = anyAray.length;
  let min = 0;
  let random = getRandomNumber (min, max);
  return anyAray[random];
} 

document.getElementById("excuse").innerHTML = getRandom(who) + getRandom(action) + getRandom(what) + getRandom(when)

};
