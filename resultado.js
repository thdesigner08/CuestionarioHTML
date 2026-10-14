
let brasil = document.getElementById("brasil");
setTimeout(() => { brasil.play() }, 2000);

let puntos = 0;
let boton1 = document.getElementById("terminarCuestionario")
boton1.addEventListener("click", () => {
    let r1 = document.getElementById("10").checked;
    let r2 = document.getElementById("1893").checked;
    let r3 = document.getElementById("rojas").checked;
    let r4 = document.getElementById("7").checked;
    let r5 = document.getElementById("riber").checked;
    let r6 = document.getElementById("mhk").checked;
    let r7 = document.getElementById("batigol").checked;
    let r8 = document.getElementById("bvb").checked;
    let r9 = document.getElementById("menotti").checked;
    let r10 = document.getElementById("niuls").checked;

    if (r1 == true) { puntos++ };
    if (r2 == true) { puntos++ };
    if (r3 == true) { puntos++ };
    if (r4 == true) { puntos++ };
    if (r5 == true) { puntos++ };
    if (r6 == true) { puntos++ };
    if (r7 == true) { puntos++ };
    if (r8 == true) { puntos++ };
    if (r9 == true) { puntos++ };
    if (r10 == true) { puntos++ };

    localStorage.setItem("total",puntos);
    window.location.href = "resultado.html" 
})