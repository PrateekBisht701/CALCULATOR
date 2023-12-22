const display = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');

console.log(buttons)
let string = '';

buttons.forEach( button => {
    
    button.addEventListener('click', (e) => {
        
        if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;

            // if(string      = string){

            // }
        }
        else if(e.target.innerHTML === 'AC'){
            string = '';
            display.value = string;
        }
        else if(e.target.innerHTML === 'DE'){
            string = string.slice(0,-1)
            display.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            display.value = string;
        }
    })
})
//The eval() function evaluates JavaScript code represented as a string and returns its completion value.
