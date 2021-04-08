let currentnumber ='0';
let operations = [];
let numbers = [];
let operationMode = false;

function numberpress(num){
    currentnumber ==='0' ? currentnumber = num : currentnumber+= num;
    updateDisplay(currentnumber);
    operationMode = true;
}

function calcualte(){
    let total = '0';
    for (let i=0; i< numbers.length; i++ ){
        if(i === 0 ){
            total = Number.parseFloat(numbers[i]);
        }else {
            total = operate(total, Number.parseFloat(numbers[i]), operations[i-1]);
        }
    } return `${total}`;
}


function operate(val1, val2, op){
switch (op) {
    case 'add': 
        return val1 + val2;
         
    case 'subtract':
        return val1 - val2;

    case 'multiply':
        return val1 * val2;
        
    case 'divide':
        return val1 / val2;
    
    default:
        return '0';

    }

}

function reset(num = '0') {
    numbers = [];
    operations =[];
    currentnumber = num;
}




function operatorPress(op){
    if(!operationMode) {
        return;
    }

    operations.push(op);
    numbers.push(currentnumber);

    if(op ==='equal'){
        currentnumber = calcualte()
        updateDisplay(currentnumber);
        reset(currentnumber);
    } else{
        currentnumber = '0';
        updateDisplay();
        operationMode = false;
    }

}



function updateDisplay(num = '0')
{
    const robin = document.getElementById('display');
    robin.type = "text";
    robin.value = num;
}


function buttonpress(info){
    if(info === 'dot') 
    {
        currentnumber = currentnumber + '.'; //if current nymber has more then one dot
        updateDisplay(currentnumber);
    }
    else if(info=== 'clear')
    {
        reset();
        updateDisplay();
    }
    else if(info ==='percent')
    {
        currentnumber = currentnumber * 0.01;
        updateDisplay(currentnumber);
    }
    else if(info === 'negate')
    {
        currentnumber = -currentnumber;
        updateDisplay(currentnumber)
    }
    else if(!isNaN(Number.parseInt(info))) {
        numberpress(info);
    }
    else{
        operatorPress(info);
    }
        

}



document.querySelectorAll(".key").forEach(
    batman => {
        batman.addEventListener('click', ()=> buttonpress(batman.id))
    }
);
