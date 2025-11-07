let element = document.getElementById("element");
let increasee = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");

let count = 0;

increasee.addEventListener("click" , function(){
    count++;
    updateDisplay();
});

decrease.addEventListener("click" , function(){
    count--;
    updateDisplay();
});

reset.addEventListener("click" , function(){
    count = 0;
    updateDisplay();
});

function updateDisplay(){
    element.innerText = count;

    if(count > 0){
        element.style.color = "green";
    }else if(count < 0){
        element.style.color = "red";
    }else{
        element.style.color = "black";
    }
}   