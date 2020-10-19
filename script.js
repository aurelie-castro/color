//aller chercher les éléments dans le HTML
var ipt = document.getElementById("ipt");
var btn = document.getElementById("btn");

// var color = localStorage.getItem("couleur");

//donner instructions au clic (changer bgcolor) et stocker la reponse
btn.addEventListener("click", function(){
    var reponse = ipt.value;
    document.body.style.backgroundColor = reponse;
    localStorage.setItem("couleur", reponse);
});

console.log(ipt.value);
//aller chercher reponse dans storage et l'appliquer
var color = localStorage.getItem("couleur");
if(color){
    document.body.style.backgroundColor = color;
}

console.log(color);
console.log(reponse);


