let n1 = parseInt(prompt("Dame un numero: "));
let n2 = parseInt(prompt("Dame otro numero: "));

function maximo (n1, n2){
    let max;
    if (n1 > n2) max = n1;
    else if (n1 < n2) max = n2;
    else max = n1 + ", son iguales";

    document.write("El numero maximo es " + max);
}

maximo (n1, n2);