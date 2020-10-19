var ipt = document.getElementById("ipt");
var btn = document.getElementById("btn");

// var color = localStorage.getItem("couleur");


btn.addEventListener("click", function(){
    var reponse = ipt.value;
    document.body.style.backgroundColor = reponse;
    localStorage.setItem("couleur", reponse);
});

console.log(ipt.value);

var color = localStorage.getItem("couleur");
document.body.style.backgroundColor = color;

console.log(color);
console.log(reponse);


