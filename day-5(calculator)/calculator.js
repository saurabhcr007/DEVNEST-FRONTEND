function add(){
    var f = +(document.querySelector(".fnumber").value);
    var s = +(document.querySelector(".snumber").value);
    let y = f + s;
    document.querySelector(".resu").innerHTML=y;
}
function substract(){
    var f = document.querySelector(".fnumber").value;
    var s = document.querySelector(".snumber").value;
    let y = f - s;
    document.querySelector(".resu").innerHTML=y;
}
function multi(){
    var f = document.querySelector(".fnumber").value;
    var s = document.querySelector(".snumber").value;
    let y = f * s;
    document.querySelector(".resu").innerHTML=y;
}
function div(){
    var f = document.querySelector(".fnumber").value;
    var s = document.querySelector(".snumber").value;
    let y = f / s;
    document.querySelector(".resu").innerHTML=y;
}
document.querySelector(".but1").addEventListener("click",add);
document.querySelector(".but2").addEventListener("click",substract);
document.querySelector(".but3").addEventListener("click",multi);
document.querySelector(".but4").addEventListener("click",div);