
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


//LIAISON DES EVENTS
SHI.addEventListener('click', () => coupPlayer("shi"));
FU.addEventListener('click', () => coupPlayer("fu"));
MI.addEventListener('click', () => coupPlayer("mi"));
RESTART.addEventListener('click', () => razScore());

/**Le joueur joue un coup : "shi" || "fu" || "mi" */
function coupPlayer(coup) {
  console.log(`on affiche l'image de ${coup}`);
  affichageCoup(PLAYER,coup)
  compare(coup,randomIA());
}

/**Affichage de l'image d'un coup dans une balise */
function affichageCoup(balise,coupjoue){
  balise.setAttribute("src",`/img/${coupjoue}.png`);
}

/**L'IA joue un coup */
function randomIA() {
  let symboles = ['shi', 'fu', 'mi'];
  let rand = Math.floor(Math.random() * 3);
  return symboles[rand];
}

/**Résolution d'une manche */
function compare(coupPlayer, coupIA) {
  let gagnant = ["shifu", "fumi", "mishi"];

  console.log(`l'IA joue ${coupIA}`);
  affichageCoup(IA,coupIA);

  if (coupPlayer == coupIA) {
    console.log("Égalité");
  } 
  else if (gagnant.includes(coupPlayer + coupIA)) {
    console.log("Gagnant");
    scoreUp(SCOPLAYER);
  }
  else {
    console.log("Perdant");
    scoreUp(SCOIA);
  }
  if (finDePartie()) {  // La partie est finie
    console.log("Les commandes se cachent et le restart apparait");
    switchHidden();
  } else {              // La partie continue
    console.log("l'utilisateur choisi un coup");
  };
}

/**Incrémentation du Score*/
function scoreUp(balise) {
  balise.textContent = Number(balise.textContent) + 1 ;   //--> Création du nouvelle function majScoreJoueur
  console.log(`Nouveau score ${SCOPLAYER.textContent} à ${SCOIA.textContent}`);
}


/**Vérifiction des conditions de fin de partie */
function finDePartie() {
  let sommescores = (Number(SCOIA.textContent) + Number(SCOPLAYER.textContent));
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
  razAffichage();
}

function razAffichage(){
  SCOPLAYER.textContent = 0;
  SCOIA.textContent = 0;
  switchHidden() ;
  PLAYER.removeAttribute("src");
  IA.removeAttribute("src");
}