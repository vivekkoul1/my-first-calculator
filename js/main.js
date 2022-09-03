




document.querySelector("#c").onclick = reset; 

// document.getElementById("one").addEventListener('mousedown', one);
// document.getElementById("one").addEventListener('mouseup', oneup);
document.querySelector("#one").onclick = one;
document.querySelector("#two").onclick = two;
document.querySelector("#three").onclick = three;    
document.querySelector("#four").onclick = four; 
document.querySelector("#five").onclick = five;    
document.querySelector("#six").onclick = six;    
document.querySelector("#seven").onclick = seven;    
document.querySelector("#eight").onclick = eight;    
document.querySelector("#nine").onclick = nine;    
document.querySelector("#zero").onclick = zero;    
document.querySelector("#plus").onclick = plus;    
document.querySelector("#minus").onclick = minus; 
document.querySelector("#product").onclick = product; 
document.querySelector("#divide").onclick = divide; 
document.querySelector("#dot").onclick = dot; 


function reset() {
       
    document.querySelector('.output').innerText = ""
    document.querySelector('.input').innerText = ""
    
}

function one() {

    let num = document.querySelector('.input').innerText ;
    num = num + "1";
    document.querySelector('.input').innerText = num;


}

function oneup() {

    document.getElementById("one").style.backgroundColor="#262626";
    document.getElementById("one").style.color="white";
 
}

function two() {

    let num = document.querySelector('.input').innerText ;
    num = num + "2";
    document.querySelector('.input').innerText = num;
}

function three() {

    let num = document.querySelector('.input').innerText ;
    num = num + "3";
    document.querySelector('.input').innerText = num;
}

function four() {

    let num = document.querySelector('.input').innerText ;
    num = num + "4";
    document.querySelector('.input').innerText = num;
}

function five() {

    let num = document.querySelector('.input').innerText ;
    num = num + "5";
    document.querySelector('.input').innerText = num;
}

function six() {

    let num = document.querySelector('.input').innerText ;
    num = num + "6";
    document.querySelector('.input').innerText = num;
}

function seven() {

    let num = document.querySelector('.input').innerText ;
    num = num + "7";
    document.querySelector('.input').innerText = num;
}

function eight() {

    let num = document.querySelector('.input').innerText ;
    num = num + "8";
    document.querySelector('.input').innerText = num;
}

function nine() {

    let num = document.querySelector('.input').innerText ;
    num = num + "9";
    document.querySelector('.input').innerText = num;
}

function zero() {

    let num = document.querySelector('.input').innerText ;
    num = num + "0";
    document.querySelector('.input').innerText = num;
}

function plus() {

    let num = document.querySelector('.input').innerText ;
    num = num + "+";
    document.querySelector('.input').innerText = num;
}

function minus() {

    let num = document.querySelector('.input').innerText ;
    num = num + "-";
    document.querySelector('.input').innerText = num;
}

function divide() {

    let num = document.querySelector('.input').innerText ;
    num = num + "/ ";
    document.querySelector('.input').innerText = num;
}

function product() {

    let num = document.querySelector('.input').innerText ;
    num = num + "x ";
    document.querySelector('.input').innerText = num;
}

function dot() {

    let num = document.querySelector('.input').innerText ;
    num = num + ".";
    document.querySelector('.input').innerText = num;
}

//arithematic operations

function getInput() {
    return document.querySelector(".input").innerText;
}
// alert(getInput());

function printInput(num) {
    document.querySelector(".input").innerText = num;
}
// printInput(78);

function getOutput() {
    return document.querySelector(".output").innerText;
}
// alert(getOutput());

function printOutput(num) {
    document.querySelector(".output").innerText = num;
}
// printOutput(77777);