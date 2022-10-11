

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
inbuttons=document.getElementById('cal');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == 'Back') {
            l = screen.value.length - 1;
            screenValue = screen.value.substring(0, l);
            screen.value = screenValue;
        
        }
        else if (buttonText == 'Sin') {
        
            sin();
        }
        else if (buttonText == 'Cos') {
        
            cos();
        }
        else if (buttonText == 'Tan') {
        
            tan();
        }
        else if (buttonText == 'log') {
        
            log();
        }
        else if (buttonText == 'π') {
        
            pi();
        }
        else if (buttonText == 'e') {
        
            ex();
        }
        else if (buttonText == 'n!') {
            fact();
        }
        else if (buttonText == '1/x') {
            inv();
        }
        else if (buttonText == 'asin') {
           Asin()
        }
        else if (buttonText == 'acos') {
           Acos();
        }
        else if (buttonText == 'atan') {
           Atan();
        }
        else if(buttonText=='√x'){
        poe();
        
        } else if(buttonText=='ln'){
            po();
            
                    }
                    else if(buttonText=='abs'){
                     gh()
                    }

      
                
                   
       else{
        
            screenValue += buttonText;
            screen.value = screenValue;
                }

    });
}
function sin() {
    screen.value = Math.sin(screen.value);

}
function cos() {
    screen.value = Math.cos(screen.value);

}
function tan() {
    screen.value = Math.tan(screen.value);

}
function log() {
    screen.value = Math.log(screen.value);

}
function pi() {
    screen.value = 3.141592653589793238;

}
function ex() {
    screen.value = 2.7182818285;

}
function fact(){
var i,n,f=1;
n=screen.value;
for(i=1;i<=n;i++){
    f=f*i;
}
screen.value=f;


}
function inv(){
screen.value=1/screen.value;

}
function Asin() {
    screen.value = Math.asin(screen.value);

}
function Acos() {
    screen.value = Math.acos(screen.value);

}
function Atan() {
    screen.value = Math.atan(screen.value);

}
function poe(){
screen.value=Math.sqrt(screen.value);


}
function po(){
screen.value=Math.log(screen.value)/Math.log(2);

}
function gh(){

    screen.value=Math.abs(screen.value)
}