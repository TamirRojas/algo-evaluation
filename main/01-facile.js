/**
 * Programmer une fonction qui renvoie le signe du nombre passé en paramètre :
 * - "POSITIVE" s'il est de signe positif
 * - "NEGATIVE" s'il est de signe négatif
 * - "NUL" s'il est nul
 */
 console.log("Exo 1")
 console.log("Le signe du nombre est:"+ signe(2))

 function signe(nombre){
    if(nombre > 0){
        return "POSITIVE"
    } else if (nombre < 0){
        return "NEGATIVE"
    } else {
        return "NUL"
    }
 }
 /* DEUXIÈME FUNCTION - UTILISATION DE Math.sign FUNCTION */ 

 console.log("Le signe du nombre dans la 2ème function est:" + signe_2(-2))

 function signe_2(nombre_2) {
    if (Math.sign(nombre_2)===1) {
        return "POSITIVE";
    } else if (Math.sign(nombre_2)===-1) {
        return "NEGATIVE";
    } else {
        return "NUL"
    }
 }
 /**
 * Programmer une fonction prenant en argument un tableau de nombres, et qui renvoie un tableau ne contenant que les nombres pairs.
 * Astuce : un nombre pair est un nombre dont le reste de la division par 2 est 0.
 */

 //initialization de variables
 let nombres=[];
 let result=[];

 // tableau de 25 elements 
 for (let i=1; i<=25;i++){
    nombres.push([i])
 }

 for (let i=0;i<nombres.length;i++){
    if (nombresPairs(nombres[i])==true){
        // Création tableau resultat
        result.push(nombres[i])
    }
 }
 console.log()
 console.log("Exo 2")
 console.log("Tableau Input:" + nombres)
 console.log("Tableau nombres pairs:" + result)

 // vérifier si le nombre est pair ou non 
 function nombresPairs(x){
    if (x%2===0){
        return true;
    }
    else{
        return false;
    }
 }