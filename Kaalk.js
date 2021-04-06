let currentnumber ='0';

function numberpress(num){
    currentnumber ==='0' ? currentnumber = num : currentnumber+= num;
    updateDisplay(currentnumber);
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
        currentnumber = currentnumber + '.';
        updateDisplay(currentnumber);
    }
    else if(info=== 'clear')
    {
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
    else{}

}



document.querySelectorAll(".key").forEach(
    batman => {
        batman.addEventListener('click', ()=> buttonpress(batman.id))
    }
);