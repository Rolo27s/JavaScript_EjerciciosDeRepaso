function change() {
  let x = document.getElementById("option1").value;
  let y = document.getElementById("option2").value;
  let z;
  console.log(x);
  console.log(y);
  z = x;
  x = y;
  y = z;
  console.log(x);
  console.log(y);
  document.getElementById("option1_result").innerHTML =
    "El primer valor ahora es: " + x;
  document.getElementById("option2_result").innerHTML =
    "El segundo valor ahora es: " + y;
}
