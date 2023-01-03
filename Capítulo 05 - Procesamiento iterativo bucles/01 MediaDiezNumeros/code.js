/* Defino como constante el numero de numeros a evaluar */
const N = 3;

/* Defino n como un array de numeros */
let n = [];
let total = 0;

for(let i = 0 ; i < N ; i++){  
    n[i] = parseInt(prompt("Escribe un numero " + (i+1) + "/" + N + " :"));
}

/* Veo en consola el valor de mis numeros y calculo el total */
for(let i = 0 ; i < N ; i++){
    console.log(n[i]);
    total += n[i];
}

console.log("TOTAL: " + total);

document.write("La media del conjunto de numeros <br>");
for(let i = 0 ; i < N ; i++){
    if (i < N-1) document.write(n[i] + ", ");
    else document.write(n[i] + " es: <br>");
}

document.write((total/N).toFixed(2));