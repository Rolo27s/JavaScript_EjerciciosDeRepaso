const PI = 3.141592;

function solution() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    const sol1 = document.getElementById("sol1");
    const sol2 = document.getElementById("sol2");
    const diff = document.getElementById("diff");

    let solution1 = PI * n1 * n1;
    let solution2 = PI * n2 * n2;
    let difference;

    solution1 = solution1.toFixed(2);
    solution2 = solution2.toFixed(2);

    sol1.innerHTML = solution1 + "  cm²"; /* ALT + 0178 */
    sol2.innerHTML = solution2 + "  cm²";

    if (n1 > n2) {
        difference = solution1 - solution2;
        difference = difference.toFixed(2);
        diff.innerHTML = difference + " cm²";
    } else if (n2 > n1) {
        difference = solution2 - solution1;
        difference = difference.toFixed(2);
        diff.innerHTML = difference + " cm²";
    } else {
        difference = 0;
        difference = difference.toFixed(2);
        diff.innerHTML = difference + " cm²";
    }
}

solution();
