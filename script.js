const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');

shi.addEventListener('click', () => shiPlayer());
fu.addEventListener('click', () => fuPlayer());
mi.addEventListener('click', () => console.log('mi'));

// Pour le reste, a vous de jouer

function fuPlayer() {
  // player.setAttribute("src","/img/fu.png");
  console.log("on affiche l'image de la feuille");

}

function miPlayer() {
  //  player.setAttribute("src","/img/mi.png");
    console.log("on affiche l'image des ciseaux");
}


function shiPlayer(){
  //  player.setAttribute("src","/img/shi.png");
console.log("on affiche l'image de la pierre");
}
