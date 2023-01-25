/********  Calcular factorial de 10 usando bucle while, una bifurcación if y una sentencia break  *********************************/

let factorial=1;

let max = 1;

while(true){

    factorial *= max;
    
    console.log("Factorial es: ", factorial);
    max++

    if (max == 11){
        break;
    }
}

