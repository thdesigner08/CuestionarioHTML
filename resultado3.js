let puntos = localStorage.getItem("total");
document.getElementById("resultado").textContent= puntos + "/10";

setTimeout(function(){
 if (puntos<3) {
    let jugadore = document.getElementById("jugadore");
    jugadore.play();
 } else if(4>=puntos && puntos <=7) {
    let mushasho = document.getElementById("mushasho");
    mushasho.play();
 }  else if(puntos>7) {
    let shesh = document.getElementById("shesh");
    shesh.play();
}},500);

let boton = document.getElementById("volveraJugar")
boton.addEventListener("click",()=>{
    window.location.href = "index.html";
})