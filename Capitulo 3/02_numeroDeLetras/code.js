function medir(frase){
    /* let frase = document.getElementById("frase").value; */ /* De esta manera le puedo pasar el input con parametro */
    let sol = document.getElementById("solucion");
    let size = frase.length;
    sol.innerHTML = "El contenido mide " + size;
}

