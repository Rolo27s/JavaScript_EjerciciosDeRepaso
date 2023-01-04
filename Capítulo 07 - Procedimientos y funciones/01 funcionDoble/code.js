let n1 = parseInt(prompt("Dame un numero para multiplicarlo por dos: "));
let n2 = parseInt(prompt("Dame otro numero para multiplicarlo por dos: "));

function doble (n1, n2){
    let n1D = n1*2;
    let n2D = n2*2;

    document.write(n1 + " x 2 = " + n1D + "<br>");
    document.write(n2 + " x 2 = " + n2D);
}

doble (n1, n2);