let bars = document.querySelector(".bars");
let x = document.querySelector(".x");
let div_bars = document.querySelector(".div_bars");
bars.onclick = function(){
    div_bars.style.transform = "translate(0)";
}
x.onclick = function(){
    div_bars.style.transform = "translate(-2000px)";
}