
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
    playerUp();
  }
  else {
    console.log("Perdant");
    iaUp();
  }
  if (finDePartie()) {  // La partie est finie
    console.log("Les commandes se cachent et le restart apparait");
    switchHidden();
  } else {              // La partie continue 
    console.log("l'utilisateur choisi un coup");
  };
}

/** Mise à jour de l'affichage du score */
function majScore(balise, score) {
  balise.textContent = score; 
}

/**Incrémentation du Score du joueur */
function playerUp() {              
  scorePlayer++;
  console.log(`le nouveau score du joueur c'est ${scorePlayer}`);
  majScore(SCOPLAYER, scorePlayer )
}

/**Incrémentation du Score l'IA */
function iaUp() {                   
  scoreIA++;
  console.log(`le nouveau score de l'IA c'est ${scoreIA}`);
  majScore(SCOIA, scoreIA)
}

/**Vérifiction des conditions de fin de partie */
function finDePartie() {               
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
  scorePlayer = 0;                        
  scoreIA = 0;                                     
  console.log("score à zéro");            
  razAffichage();                         
                          
}

/** Effacement des balises jouées une fois la partie fini */
function razAffichage() {                 
  SCOPLAYER.textContent = scorePlayer;    
  SCOIA.textContent = scoreIA;            
  switchHidden()                          
  PLAYER.removeAttribute("src");          
    IA.removeAttribute("src");            
}

/**Affichage de l'image d'un coup dans une balise */
function affichageCoup(balise,coupjoue){
  balise.setAttribute("src",`./img/${coupjoue}.png`);
}