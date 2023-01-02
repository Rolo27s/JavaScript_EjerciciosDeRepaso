const sol = document.getElementById("Solucion");
sol.innerHTML = "Prueba";

function solve(a, b, c){
    console.log("Valor de A: " + a + " |", "Valor de B: " + b + " |", "Valor de C: " + c);
    let result = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    let result2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);

    result = result.toFixed(4);
    result2 = result2.toFixed(4);

    sol.innerHTML = result + " &nbsp y &nbsp " + result2;
    return result + " &nbsp y &nbsp " + result2;
}