let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let l1=document.getElementById("l1");
let l2=document.getElementById("l2");
let l3=document.getElementById("l3");

b1.addEventListener("click",red);
b2.addEventListener("click",yellow);
b3.addEventListener("click",green);


function red(){
    b1.style.backgroundColor="red";
    l1.style.backgroundColor="red";
    b2.style.backgroundColor="rgba(12, 13, 14, 1)";
    l2.style.backgroundColor="rgb(104, 111, 119)";
    b3.style.backgroundColor="rgba(6, 6, 7, 1)";
    l3.style.backgroundColor="rgb(104, 111, 119)";
}
function yellow(){
    b2.style.backgroundColor="gold";
    l2.style.backgroundColor="gold";
    b1.style.backgroundColor="rgba(0, 0, 0, 1)";
    l1.style.backgroundColor="rgb(104, 111, 119)";
    b3.style.backgroundColor="rgba(0, 0, 0, 1)";
    l3.style.backgroundColor="rgb(104, 111, 119)";
}
function green(){
    b3.style.backgroundColor="green";
    l3.style.backgroundColor="green";
    b1.style.backgroundColor="rgba(0, 0, 0, 1)";
    l1.style.backgroundColor="rgb(104, 111, 119)";
    b2.style.backgroundColor="rgba(0, 0, 0, 1)";
    l2.style.backgroundColor="rgb(104, 111, 119)";
}