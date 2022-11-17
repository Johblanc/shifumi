
//INITIALISATION

const SHI = document.getElementById('shi');
const FU = document.getElementById('fu');
const MI = document.getElementById('mi');
const PLAYER = document.getElementById('player');
const IA = document.getElementById('ia');
const COMMAND = document.getElementById('command');
const SCOPLAYER = document.getElementById("score-player");
const SCOIA = document.getElementById("score-ia");
const RESTART = document.getElementById('restart');

//VARIABLE DE SCORE A ZERO
let scorePlayer = 0
let scoreIA = 0

//LIAISON DES EVENTS
SHI.addEventListener('click', () => shiPlayer());
FU.addEventListener('click', () => fuPlayer());
MI.addEventListener('click', () => miPlayer());
RESTART.addEventListener('click', () => razScore());

/**Le joueur joue Shi, la Pierre */
function shiPlayer() {
  console.log("on affiche l'image de la pierre (shi)");
  affichageCoup(PLAYER,"shi")
  compare("shi");
}

/**Le joueur joue Fu, les Ciseaux */
function fuPlayer() {
  console.log("on affiche l'image des ciseaux (fu)");
  affichageCoup(PLAYER,"fu")
  compare("fu");

}

/**Le joueur joue Mi, la Feuille */
function miPlayer() {
  console.log("on affiche l'image de la feuille (mi)");
  affichageCoup(PLAYER,"mi")
  compare("mi");
}

/**L'IA joue un coup */
function randomIA() {
  let symboles = ['shi', 'fu', 'mi'];
  let rand = Math.floor(Math.random() * 3);
  return symboles[rand];
}

/**Résolution d'une manche */
function compare(coup) {
  let resultRand = randomIA();
  affichageCoup(IA,resultRand)
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

/**Incrémentation du Score du joueur */
function indentPlayer() {               //--> Nom à changer  /!\ ici et aux appel
  scorePlayer++;
  console.log(`le nouveau score du joueur c'est ${scorePlayer}`);
  SCOPLAYER.textContent =scorePlayer;   //--> Création du nouvelle function majScoreJoueur
}

/**Incrémentation du Score l'IA */
function indentIA() {                   //--> Nom à changer  /!\ ici et aux appel
  scoreIA++;
  console.log(`le nouveau score de l'IA c'est ${scoreIA}`);
  SCOIA.textContent =scoreIA;           //--> Création du nouvelle function majScoreIA
}

/**Vérifiction des conditions de fin de partie */
function finDeManche() {                //--> Nom à changer  /!\ ici et aux appel
  let sommescores = (scoreIA + scorePlayer);
  console.log(`Le score de la partie est de ${sommescores}`);
  return sommescores >= 3;
}


/**Interversion de l'affichage des commande et du restart */
function switchHidden(){
  console.log(COMMAND.getAttribute("class"));
  if (COMMAND.getAttribute("class")){
    COMMAND.removeAttribute("class");
    RESTART.setAttribute("class", "btn-restart hidden");
  }else{
    console.log("test null");
    COMMAND.setAttribute("class", "hidden");
    RESTART.setAttribute("class", "btn-restart");
  }
}

/**Reset des Scores */
function razScore(){
  console.log("score à zéro");
  scorePlayer = 0;
  scoreIA = 0;
  SCOPLAYER.textContent = scorePlayer;    //
  SCOIA.textContent = scoreIA;            //--> Création du nouvelle function razAffichage
  switchHidden()                          //    + Enlever les images des balises PLAYER et IA
}

/**Affichage de l'image d'un coup dans une balise */
function affichageCoup(balise,coupjoue){
  balise.setAttribute("src",`/img/${coupjoue}.png`);
}