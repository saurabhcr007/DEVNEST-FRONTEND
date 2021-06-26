const myques = ['','what is 2-3?','what is 3*5?','what is 15/3?','what is 5*5?'];
const myans = [[''],['1','3','5','7'],['5','10','15','20'],['5','3','1','7'],['20','25','15','10']];
const right = [2,1,3,1,2];
var display = document.querySelector('.ques');
var next = document.querySelector('.result');
var res = document.querySelector('.output');
var aans = document.getElementsByClassName('ans');
var current=0;
var value=0;
var score=0;

next.addEventListener('click' ,() =>  {
    current++;
    if(current < myques.length ){
        display.innerHTML= myques[current];
    for(let i=0;i<4;i++){
        aans[i].innerHTML= myans[current][i];
    }}
})
for(let i=0;i<4;i++){
    aans.value=i+1
    aans[i].addEventListener('click' ,(e) => {
        e.target.value = i+1;
        if(e.target.value==right[current]){
            console.log("right");
            score++;
            res.innerHTML = "result:"+score+"/5"; 
        }
        else{
            console.log("wrong");

        }
    })
}