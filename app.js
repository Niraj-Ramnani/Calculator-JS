var display = document.querySelector(".display");
var currentInput = "";
var numarr = [];
var oparr = [];
var num = "";

function append(number) {
    num += number;
    currentInput += number;
    display.value = currentInput;
}

function clr() {
    currentInput = "";
    display.value = "";
    numarr = [];
    oparr = [];
    num = "";
}

function del() {
    currentInput = currentInput.slice(0, -1);
    num = num.slice(0, -1);
    display.value = currentInput;
}

function decimal() {
    if (!num.includes(".")) {  
        num += ".";
        currentInput += ".";
        display.value = currentInput;
    }
}

function operate(op) {
    if (num !== "") {  
        numarr.push(parseFloat(num));  
        num = "";  

        oparr.push(op);  
        currentInput += op;  
        display.value = currentInput;
    }
}

function calculate() {
    if (num !== "") {  
        numarr.push(parseFloat(num));  
    } else {
        return;  
    }

    for (let i = 0; i < oparr.length; i++) {
        if (oparr[i] === '*' || oparr[i] === '/') {
            let num1 = numarr[i];
            let num2 = numarr[i + 1];
            let result = 0;

            if (oparr[i] === '*') {
                result = num1 * num2;
            } else if (oparr[i] === '/') {
                if (num2 === 0) {
                    display.value = "Error: Division by zero";
                    return;
                }
                result = num1 / num2;
            }

            numarr[i] = result;
            numarr.splice(i + 1, 1);
            oparr.splice(i, 1);
            i--;  
        }
    }

    
    let result = numarr[0]; 
    for (let i = 0; i < oparr.length; i++) {
        let num = numarr[i + 1];
        if (oparr[i] === '+') {
            result += num;
        } else if (oparr[i] === '-') {
            result -= num;
        }
    }


    currentInput = result.toString();
    display.value = currentInput;
    
    numarr = []; 
    oparr = [];
    num = result.toString();
}

function play(){
    var sound = document.getElementById('sound');
    if(!sound.paused){
        sound.pause();
        sound.currentTime = 0; 
    }
    sound.play();
}
var btns = document.querySelectorAll("button");
for (let btn of btns ){

    btn.addEventListener('click', play );
      
}