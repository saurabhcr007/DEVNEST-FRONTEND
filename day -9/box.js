var clicked = document.querySelector('.clicked')
var remaining = document.querySelector('.remaining')
var booked = 0;
var notbooked = 36;

const box1 = document.querySelector('.box1');
box1.addEventListener('click', () => {
    if(box1.classList.contains('boxc1')){
        box1.classList.remove('boxc1')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
    else{
        box1.classList.add('boxc1')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box2 = document.querySelector('.box2');
box2.addEventListener('click', () => {
    if(box2.classList.contains('boxc2')){
        box2.classList.remove('boxc2')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;

    }
    else{
        box2.classList.add('boxc2')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box3 = document.querySelector('.box3');
box3.addEventListener('click', () => {
    if(box3.classList.contains('boxc3')){
        box3.classList.remove('boxc3')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;

    }
    else{
        box3.classList.add('boxc3')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box4 = document.querySelector('.box4');
box4.addEventListener('click', () => {
    if(box4.classList.contains('boxc4')){
        box4.classList.remove('boxc4')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;

    }
    else{
        box4.classList.add('boxc4')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box5 = document.querySelector('.box5');
box5.addEventListener('click', () => {
    if(box5.classList.contains('boxc5')){
        box5.classList.remove('boxc5')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;

    }
    else{
        box5.classList.add('boxc5')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box6 = document.querySelector('.box6');
box6.addEventListener('click', () => {
    if(box6.classList.contains('boxc6')){
        box6.classList.remove('boxc6') 
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;

    }
    else{
        box6.classList.add('boxc6')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box7 = document.querySelector('.box7');
box7.addEventListener('click', () => {
    if(box7.classList.contains('boxc7')){
        box7.classList.remove('boxc7')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;

    }
    else{
        box7.classList.add('boxc7')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box8 = document.querySelector('.box8');
box8.addEventListener('click', () => {
    if(box8.classList.contains('boxc8')){
        box8.classList.remove('boxc8')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box8.classList.add('boxc8')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box9 = document.querySelector('.box9');
box9.addEventListener('click', () => {
    if(box9.classList.contains('boxc9')){
        box9.classList.remove('boxc9')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box9.classList.add('boxc9')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box29 = document.querySelector('.box29');
box29.addEventListener('click', () => {
    if(box29.classList.contains('boxc29')){
        box29.classList.remove('boxc29')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box29.classList.add('boxc29')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box10 = document.querySelector('.box10');
box10.addEventListener('click', () => {
    if(box10.classList.contains('boxc10')){
        box10.classList.remove('boxc10')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box10.classList.add('boxc10')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box11 = document.querySelector('.box11');
box11.addEventListener('click', () => {
    if(box11.classList.contains('boxc11')){
        box11.classList.remove('boxc11')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box11.classList.add('boxc11')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box12 = document.querySelector('.box12');
box12.addEventListener('click', () => {
    if(box12.classList.contains('boxc12')){
        box12.classList.remove('boxc12')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box12.classList.add('boxc12')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box13 = document.querySelector('.box13');
box13.addEventListener('click', () => {
    if(box13.classList.contains('boxc13')){
        box13.classList.remove('boxc13')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box13.classList.add('boxc13')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box14 = document.querySelector('.box14');
box14.addEventListener('click', () => {
    if(box14.classList.contains('boxc14')){
        box14.classList.remove('boxc14')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box14.classList.add('boxc14')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box15 = document.querySelector('.box15');
box15.addEventListener('click', () => {
    if(box15.classList.contains('boxc15')){
        box15.classList.remove('boxc15')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box15.classList.add('boxc15')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box16 = document.querySelector('.box16');
box16.addEventListener('click', () => {
    if(box16.classList.contains('boxc16')){
        box16.classList.remove('boxc16')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box16.classList.add('boxc16')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box17 = document.querySelector('.box17');
box17.addEventListener('click', () => {
    if(box17.classList.contains('boxc17')){
        box17.classList.remove('boxc17')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box17.classList.add('boxc17')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box18 = document.querySelector('.box18');
box18.addEventListener('click', () => {
    if(box18.classList.contains('boxc18')){
        box18.classList.remove('boxc18')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box18.classList.add('boxc18')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box19 = document.querySelector('.box19');
box19.addEventListener('click', () => {
    if(box19.classList.contains('boxc19')){
        box19.classList.remove('boxc19')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box19.classList.add('boxc19')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box20 = document.querySelector('.box20');
box20.addEventListener('click', () => {
    if(box20.classList.contains('boxc20')){
        box20.classList.remove('boxc20')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box20.classList.add('boxc20')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box21 = document.querySelector('.box21');
box21.addEventListener('click', () => {
    if(box21.classList.contains('boxc21')){
        box21.classList.remove('boxc21')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box21.classList.add('boxc21')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box22 = document.querySelector('.box22');
box22.addEventListener('click', () => {
    if(box22.classList.contains('boxc22')){
        box22.classList.remove('boxc22')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box22.classList.add('boxc22')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box23 = document.querySelector('.box23');
box23.addEventListener('click', () => {
    if(box23.classList.contains('boxc23')){
        box23.classList.remove('boxc23')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box23.classList.add('boxc23')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box24 = document.querySelector('.box24');
box24.addEventListener('click', () => {
    if(box24.classList.contains('boxc24')){
        box24.classList.remove('boxc24')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box24.classList.add('boxc24')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box25 = document.querySelector('.box25');
box25.addEventListener('click', () => {
    if(box25.classList.contains('boxc25')){
        box25.classList.remove('boxc25')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box25.classList.add('boxc25')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box26 = document.querySelector('.box26');
box26.addEventListener('click', () => {
    if(box26.classList.contains('boxc26')){
        box26.classList.remove('boxc26')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box26.classList.add('boxc26')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box27 = document.querySelector('.box27');
box27.addEventListener('click', () => {
    if(box27.classList.contains('boxc27')){
        box27.classList.remove('boxc27')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box27.classList.add('boxc27')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box28 = document.querySelector('.box28');
box28.addEventListener('click', () => {
    if(box28.classList.contains('boxc28')){
        box28.classList.remove('boxc28')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box28.classList.add('boxc28')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box30 = document.querySelector('.box30');
box30.addEventListener('click', () => {
    if(box30.classList.contains('boxc30')){
        box30.classList.remove('boxc30')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box30.classList.add('boxc30')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box31 = document.querySelector('.box31');
box31.addEventListener('click', () => {
    if(box31.classList.contains('boxc31')){
        box31.classList.remove('boxc31')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box31.classList.add('boxc31')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box32 = document.querySelector('.box32');
box32.addEventListener('click', () => {
    if(box32.classList.contains('boxc32')){
        box32.classList.remove('boxc32')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box32.classList.add('boxc32')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box33 = document.querySelector('.box33');
box33.addEventListener('click', () => {
    if(box33.classList.contains('boxc33')){
        box33.classList.remove('boxc33')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box33.classList.add('boxc33')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box34 = document.querySelector('.box34');
box34.addEventListener('click', () => {
    if(box34.classList.contains('boxc34')){
        box34.classList.remove('boxc34')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box34.classList.add('boxc34')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box35 = document.querySelector('.box35');
box35.addEventListener('click', () => {
    if(box35.classList.contains('boxc35')){
        box35.classList.remove('boxc35')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box35.classList.add('boxc35')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )
const box36 = document.querySelector('.box36');
box36.addEventListener('click', () => {
    if(box36.classList.contains('boxc36')){
        box36.classList.remove('boxc36')
        booked --;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked ++;
        remaining.value = "SEAT REMAINING :"+ notbooked;
    }
    else{
        box36.classList.add('boxc36')
        booked ++;
        clicked.value = "SEAT BOOKED : "+ booked;
        notbooked --;
        remaining.value = "SEAT REMAINING :"+ notbooked; 
    }
} )