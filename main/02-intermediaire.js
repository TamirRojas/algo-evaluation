/**
 * Programmer une fonction prenant en argument 2 tableaux et qui renvoie un tableau contenant leurs valeurs alternées.
 * 
 * Exemple : [1, 2, 3] et ["apple", "orange", "banana"] renverra : [1, "apple", 2, "orange", 3, "banana"]
*/
let tableau_nombres=[1, 2, 3];
let tableau_fruits=["apple", "orange", "banana"];

console.log(combine(tableau_nombres, tableau_fruits));

function combine(tableau1, tableau2) {
    let tableau_result=[];
    for (let i = 0; i < tableau1.length; i++){
        tableau_result.push(tableau1[i]);
        tableau_result.push(tableau2[i]);
    }
    return tableau_result;
}


/**
 * Programmer une fonction prenant en argument un tableau d'éléments et une valeur offset, 
 * et qui renvoie un tableau avec les valeurs du tableau en argument décalées de la valeur de offset.
 * Par exemple : rotate([1, 2, 3, 4, 5], 2) renverra [4, 5, 1, 2, 3] 
 */
let tableau_elements=[];
// 
for (let i=1;i<=5; i++) {
    tableau_elements.push([i])
}

console.log("Exo nº2 intermediaire")
console.log("tableau initial: "+tableau_elements)

console.log("resultat: "+rotate(tableau_elements,2))

function rotate(tableau, offset) {  
    let tableau_result=[]; 
    let n = tableau.length;
    let limite = n-offset;
    let i = 0;
    if(offset>n){
        return("offset invalide");
    }
    else {
        for (i = limite; i < n; i++) {
            tableau_result.push(tableau[i]); 
        }
        for (i=0; i<limite; i++) {
            tableau_result.push(tableau[i]);
        }
        return tableau_result;
    }
}

/**
 * Suite de Syracuse
 * 
 * La suite de Syracuse est une suite de nombre (nous avions vu la suite de Fibonacci en cours), calculée en prenant 
 * pour chaque élément la moitié de sa valeur s'il est pair
 * et le triple plus 1 s'il est impair. Cette suite est infinie, et nous ne prendrons que les 10 premiers éléments.
 * 
 * Programmer une fonction prenant en argument le nombre pour lequel la suite est calculée et qui renvoie un tableau contenant
 *  les 10 premiers éléments de la suite de Syracuse.
 * 
 * Par exemple, pour 14, la suite sera : [14, 7, 22, 11, 34, 17, 52, 26, 13, 40]
 * Pour 1, la suite sera : [1, 4, 2, 1, 4, 2, 1, 4, 2, 1]
 */
 
 function syracuse(nombre) {
    let array = [];
    if (nombre % 2 === 0){
        array.push(nombre/2)
    }
    else{
        array.push((nombre*3)+1)
    }
    syracuse()
}
