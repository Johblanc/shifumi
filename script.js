const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');

let scorePlayer = 0
let scoreIA = 0

shi.addEventListener('click', () => shiPlayer());
fu.addEventListener('click', () => fuPlayer());
mi.addEventListener('click', () => miPlayer());

// Pour le reste, a vous de jouer

function shiPlayer() {
  //  player.setAttribute("src","/img/shi.png");
  console.log("on affiche l'image de la pierre (shi)");
  compare("shi");
}

function fuPlayer() {
  // player.setAttribute("src","/img/fu.png");
  console.log("on affiche l'image des ciseaux (fu)");
  compare("fu");

}

function miPlayer() {
  //  player.setAttribute("src","/img/mi.png");
  console.log("on affiche l'image de la feuille (mi)");
  compare("mi");
}

function randomIA() {
  let symboles = ['shi', 'fu', 'mi'];
  let rand = Math.floor(Math.random() * 3);
  return symboles[rand];
}

function compare(coup) {
  let resultRand = randomIA();
  let gagnant = ["shifu", "fumi", "mishi"];
  let enCours = coup + resultRand;
  console.log(`l'IA joue ${resultRand}`);
  if (resultRand == coup) {
    console.log("Égalité");
  }
  else if (gagnant.includes(enCours)) {

    console.log("Gagnant");
    indentPlayer()
  }
  else {

    console.log("Perdant");
    indentIA ();
  }

}

function indentPlayer(){
  scorePlayer++;
  console.log(`le nouveau score du joueur c'est ${scorePlayer}`);
}


function indentIA (){
  scoreIA++; 
  console.log(`le nouveau score de l'IA c'est ${scoreIA}` )
}


