const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');
const scoPlayer = document.getElementById("score-player");
const scoIA = document.getElementById("score-ia");
const restart = document.getElementById('restart');

let scorePlayer = 0
let scoreIA = 0

shi.addEventListener('click', () => shiPlayer());
fu.addEventListener('click', () => fuPlayer());
mi.addEventListener('click', () => miPlayer());
restart.addEventListener('click', () => razScore());

function shiPlayer() {
  console.log("on affiche l'image de la pierre (shi)");
  affichageCoup(player,"shi")
  compare("shi");
}

function fuPlayer() {
  console.log("on affiche l'image des ciseaux (fu)");
  affichageCoup(player,"fu")
  compare("fu");

}

function miPlayer() {
  console.log("on affiche l'image de la feuille (mi)");
  affichageCoup(player,"mi")
  compare("mi");
}

function randomIA() {
  let symboles = ['shi', 'fu', 'mi'];
  let rand = Math.floor(Math.random() * 3);
  return symboles[rand];
}

function compare(coup) {
  let resultRand = randomIA();
  affichageCoup(ia,resultRand)
  let gagnant = ["shifu", "fumi", "mishi"];
  let enCours = coup + resultRand;
  console.log(`l'IA joue ${resultRand}`);
  if (resultRand == coup) {
    console.log("Égalité");
  }
  else if (gagnant.includes(enCours)) {

    console.log("Gagnant");
    indentPlayer();
  }
  else {

    console.log("Perdant");
    indentIA();
  }
  if (finDeManche()) {  // La partie est finie
    console.log("Les commandes se cachent et le restart apparait");
    switchHidden();
  } else {              // La partie continue
    console.log("l'utilisateur choisi un coup");
  };
}

function indentPlayer() {
  scorePlayer++;
  console.log(`le nouveau score du joueur c'est ${scorePlayer}`);
  scoPlayer.textContent =scorePlayer;
}


function indentIA() {
  scoreIA++;
  console.log(`le nouveau score de l'IA c'est ${scoreIA}`);
  scoIA.textContent =scoreIA;
}

function finDeManche() {
  let sommescores = (scoreIA + scorePlayer);
  console.log(`Le score de la partie est de ${sommescores}`);
  return sommescores >= 3;
}


function switchHidden(){
  console.log(command.getAttribute("class"));
  if (command.getAttribute("class")){
    command.removeAttribute("class");
    restart.setAttribute("class", "btn-restart hidden");
  }else{
    console.log("test null");
    command.setAttribute("class", "hidden");
    restart.setAttribute("class", "btn-restart");
  }
}

function razScore(){
  console.log("score à zéro");
  scorePlayer = 0;
  scoPlayer.textContent =scorePlayer;
  scoreIA = 0;
  scoIA.textContent =scoreIA;
  switchHidden()
}

function affichageCoup(balise,coupjoue){
  balise.setAttribute("src",`/img/${coupjoue}.png`);
}