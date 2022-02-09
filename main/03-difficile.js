/**
 * Exercice - FOU
 * 
 * Programmer une fonction qui prend en paramètres un numéro de ligne et de colonne et renvoie (return) un tableau
 * contenant les paires lignes-colonnes accessibles par un Fou. Comme il avait été fait en cours pour la Tour.
 * Un fou ne se déplace qu'en diagonale, sur toute la longueur du plateau.
 * 
 * Si vous ne connaissez pas le jeu d'échecs, allez chercher une image sur le net. Le plateau se présente comme un 
 * ensemble de cases, 8 en ligne et 8 en colonne, donc 64 cases. Nous considérerons que les lignes vont de 1 à 8, et idem pour 
 * les colonnes. Donc inutile de gérer les colonnes comme des lettres.
 * 
 * Exemple : movementsFou(3, 4) correspond à un Fou placé sur la 3ème ligne et la 4ème colonne.
 * 
 * L'implémentation déjà faite est bien sûr fausse mais définit un format de réponse qui est correct. Il s'agira bien 
 * de renvoyer un tableau de tableau, c'est à dire un tableau qui contiendra de petits tableaux qui sont les paires ligne-colonne.
 */
  

console.log(`Les movements d'un fou sont : ${mouvementsFou(3,3).map(cell => `[${cell}]`)}`)

function mouvementsFou(ligne, colonne) {
    //déclaration des index
    let i;
    let j;

    let resultat = [];

    // mouvements direction : x négatif, y positif 
    for (i=ligne, j=colonne; i>1 && j<8 ; i--, j++){
        resultat.push([i-1,j+1]);
    } 

    // mouvements direction : x positif, y négatif 
    for (i=ligne, j=colonne; i<8 && j>1 ; i++, j--){
        resultat.push([i+1,j-1]);
    } 

    // mouvements direction : x positif, y positif 
    for (i=ligne, j=colonne; i<8 && j<8 ; i++, j++){
        resultat.push([i+1,j+1]);
    }
    // mouvements direction : x négatif, y négatif 
    for (i=ligne, j=colonne; i>1 && j>1 ; i--, j--){
        resultat.push([i-1,j-1]);
    }
    return resultat;
}


/**
 * Ce log ne fait pas partie de l'exercice, ne vous en préoccupez donc pas, mais il vous aidera à afficher 
 * vos tests avec un joli formattage.
 *
 



/**
 * Programmer une fonction qui prend en paramètre un nombre, correspondant à la hauteur d'une pyramide et qui renvoie un tableau de caractères "*" et espace
 * afin de construire une pyramide avec la hauteur en argument.
 * 
 * Exemple, pour une hauteur de 5 : ["    *    ", "   ***   ", "  *****  ", " ******* ", "*********"]
 * 
 * Comme pour l'exercice précédent, vous ne devriez pas toucher au log, mais il vous servira à contrôler votre résultat.
 * Pour l'exemple précédent, il vous affichera :
 * 
 *     * 1---2x1 -1 = 1 (total de estrellas) ---- total de estrellas de la base 9 = 8 espacios vacios  
 *    ***   
 *   *****  
 *  ******* 
 * *********
 * 
 * return ["    *    ", "   ***   ", "  *****  ", " ******* ", "*********"]
 */

 pyramide(3).forEach(result => console.log(`${result}`));

function pyramide(hauteur) {
    let result = [];
    let string_length = (2*hauteur)-1;
   
    // parcourir les etages
    for (let i = 1; i <= hauteur; i++) {
                
        let stars_by_floor = stars(i);
        let blank_space_by_floor = (string_length-stars_by_floor)/2;
        let word = "";

        //boucle pour les premiers espace en blanc
        for (let j=0; j<blank_space_by_floor; j++){
            //concaténation 
            word += " ";
        }

        //boucle pour les etoiles
        for (let k=0; k<stars_by_floor; k++){
            //concaténation 
            word += "*";
        }
        
        //boucle pour les espaces en blanc
        for (let l=0; l<blank_space_by_floor; l++){
            //concaténation 
            word += " ";
        }
        result.push(word);
    }
return result;
} 


//fonction qui retourne le nombre de etoile par rapport a l'etage actuel
function stars(floor){
    return (2*floor)-1;
} 
