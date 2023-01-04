/* Defino como constante el numero de numeros a evaluar y lo pido al usuario*/
const N = parseInt(prompt("Cuantos numeros quieres calcular?: "));

/* Defino n como un array de numeros */
let n = [];
let total = 0, nP = 0;

for(let i = 0 ; i < N ; i++){  
    n[i] = parseInt(prompt("Escribe un numero " + (i+1) + "/" + N + " :"));
}

/* Veo en consola el valor de mis numeros y calculo el total */
for(let i = 0 ; i < N ; i++){
    console.log(n[i]);
    total += n[i];
    if (n[i] % 2 == 0) nP++;
}

console.log("TOTAL: " + total);

document.write("Este es el listado de los numeros ingresados <br>");
for(let i = 0 ; i < N ; i++){
    if (i < N-1) document.write(n[i] + ", ");
    else if (i == N-1 && nP != 1) document.write(n[i] + ", y hay " + nP + " numeros pares");
    else document.write(n[i] + ", y hay " + nP + " numero par");
}