/* Pido una palabra al usuario */
let palabra = prompt("Dame una palabra: ");

/* Convierto la palabra a todo mayusculas para deterctar mejor las vocales */
palabra = palabra.toUpperCase();

/* Guardo el valor de la longitud de mi palabra */
let longitud = palabra.length;
let nV = 0;

for(let i = 0 ; i < longitud ; i++){
    switch(palabra[i]){
        case 'A': case 'E' : case 'I': case 'O': case 'U': 
        nV++;
        break;
    }
}
document.write("La palabra " + palabra + (" mide ") + longitud + "<br>");

if (nV == 1) document.write("Tu palabra tiene " + nV + " vocal");
if (nV > 1) document.write("Tu palabra tiene " + nV + " vocales");
if (nV == 0) document.write("Tu palabra no tiene vocales y te la has inventado");