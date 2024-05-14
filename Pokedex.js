var corpinho = document.getElementById("corpinho");
var header = document.getElementById("header");
document.getElementById("botao").addEventListener("click", function(){
    corpinho.classList.toggle("corpinho");
    corpinho.classList.toggle("corpinhopreto");
    header.classList.toggle("headerpreto");
    document.getElementById("nav-items").classList.toggle("nav-items-preto");
});