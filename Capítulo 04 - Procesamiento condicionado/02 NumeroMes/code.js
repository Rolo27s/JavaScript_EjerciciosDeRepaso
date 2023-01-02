const sol = document.getElementById("sol");

function queMes(mes){
    switch(mes){
        case "1": sol.innerHTML = "ENERO"; break;
        case "2": sol.innerHTML = "FEBRERO"; break;
        case "3": sol.innerHTML = "MARZO"; break;
        case "4": sol.innerHTML = "ABRIL"; break;
        case "5": sol.innerHTML = "MAYO"; break;
        case "6": sol.innerHTML = "JUNIO"; break;
        case "7": sol.innerHTML = "JULIO"; break;
        case "8": sol.innerHTML = "AGOSTO"; break;
        case "9": sol.innerHTML = "SEPTIEMBRE"; break;
        case "10": sol.innerHTML = "OCTUBRE"; break;
        case "11": sol.innerHTML = "NOVIEMBRE"; break;
        case "12": sol.innerHTML = "DICIEMBRE"; break;
        default: sol.innerHTML = "Error de referencia - Elige un mes del 1 al 12"; break;
    }
}