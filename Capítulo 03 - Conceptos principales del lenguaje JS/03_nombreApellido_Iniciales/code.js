function generarSiglas(frase){
    /* let frase = document.getElementById("frase").value; */ /* De esta manera le puedo pasar el input con parametro */
    let sol = document.getElementById("solucion");
    let size = frase.length;
    let siglas = "";
    for(let i = 0; i < size; i++){
        if(i == 0) siglas = frase[i];
        if(frase[i] == ' ') siglas += frase[i+1];
    }
    siglas = siglas.toUpperCase();
    sol.innerHTML = "Las siglas son: " + siglas;
}

