let tabMatrix = new Array();

/* Declaro la 1, 2, 3 y 4 fila de la tabla */
tabMatrix[0] = new Array;
tabMatrix[1] = new Array;
tabMatrix[2] = new Array;
tabMatrix[3] = new Array;

/* Inicio manual en posiciones concretas */
/* Ultima fila y ultima columna reservadas para mostrar sumatoria */
/* Primer for accede a las filas */
for (let i = 0 ; i < 4 ; i++){
    /* Segundo for accede a las columnas */
    for (let j = 0 ; j < 5 ; j++){
        if (i != 3 && j != 4) tabMatrix[i][j] = parseInt(prompt("Escribe el valor de la fila " + (i+1) + " y la columna " + (j+1)));
    }
}

document.write(
   `<h1>Tabla generada a partir de JS</h1>
    <i>La ultima fila muestra la sumatoria de filas</i>
    <br>
    <i>La ultima columna muestra la sumatoria de columnas</i>
   <table>
  <tr>
    <td>${tabMatrix[0][0]}</td>
    <td>${tabMatrix[0][1]}</td>
    <td>${tabMatrix[0][2]}</td>
    <td>${tabMatrix[0][3]}</td>
    <th style="background-color: #d4b9b0";>${tabMatrix[0][4] = tabMatrix[0][0]+tabMatrix[0][1]+tabMatrix[0][2]+tabMatrix[0][3]}</th>
  </tr>
  <tr>
    <td>${tabMatrix[1][0]}</td>
    <td>${tabMatrix[1][1]}</td>
    <td>${tabMatrix[1][2]}</td>
    <td>${tabMatrix[1][3]}</td>
    <th style="background-color: #d4b9b0";>${tabMatrix[1][4] = tabMatrix[1][0]+tabMatrix[1][1]+tabMatrix[1][2]+tabMatrix[1][3]}</th>
  </tr>
  <tr>
    <td>${tabMatrix[2][0]}</td>
    <td>${tabMatrix[2][1]}</td>
    <td>${tabMatrix[2][2]}</td>
    <td>${tabMatrix[2][3]}</td>
    <th style="background-color: #d4b9b0";>${tabMatrix[2][4] = tabMatrix[2][0]+tabMatrix[2][1]+tabMatrix[2][2]+tabMatrix[2][3]}</th>
  </tr>
  <tr>
    <th style="background-color: #d4b9b0";>${tabMatrix[3][0] = tabMatrix[0][0]+tabMatrix[1][0]+tabMatrix[2][0]}</th>
    <th style="background-color: #d4b9b0";>${tabMatrix[3][1] = tabMatrix[0][1]+tabMatrix[1][1]+tabMatrix[2][1]}</th>
    <th style="background-color: #d4b9b0";>${tabMatrix[3][2] = tabMatrix[0][2]+tabMatrix[1][2]+tabMatrix[2][2]}</th>
    <th style="background-color: #d4b9b0";>${tabMatrix[3][3] = tabMatrix[0][3]+tabMatrix[1][3]+tabMatrix[2][3]}</th>
    <th style="background-color: #f57242";>${tabMatrix[0][4]+tabMatrix[1][4]+tabMatrix[2][4]+tabMatrix[3][0]+tabMatrix[3][1]+tabMatrix[3][2]+tabMatrix[3][3]}</th>
  </tr>
</table>`
    );
